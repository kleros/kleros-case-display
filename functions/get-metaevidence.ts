import { Arbitrable__factory } from "@generated/contracts";
import { DisputeQuery, Sdk, getSdk } from "@generated/graphql";
import { Handler } from "@netlify/functions";
import { BaseContract, JsonRpcProvider } from "ethers";
import { GraphQLClient } from "graphql-request";
import { StatusCodes } from "http-status-codes";

const genSdk = (subgraph: string) =>
  getSdk(
    new GraphQLClient(`https://api.thegraph.com/subgraphs/name/${subgraph}`)
  );

const sdk = {
  [1]: genSdk("andreimvp/kleros-display-mainnet"),
  [100]: genSdk("andreimvp/kleros-display"),
} as Record<number, Sdk>;

const supportedChains = Object.keys(sdk).map((k) => +k);

export const getSubgraphData = async (
  chainId: number,
  key: keyof Sdk,
  id: string
) => await sdk[chainId][key]({ id });

const headers = { "Access-Control-Allow-Origin": "*" };

const rpc = new JsonRpcProvider(process.env.PRIVATE_RPC_ENDPOINT);

const getEventLogs = async <
  C extends BaseContract,
  E extends ReturnType<C["filters"][keyof C["filters"]]>
>(
  contract: C,
  filter: E,
  startBlock: number,
  endBlock: number
) => await contract.connect(rpc).queryFilter(filter, startBlock, endBlock);

export const getMetaEvidenceUriFromLogs = async (
  dispute: NonNullable<DisputeQuery["dispute"]>
) => {
  const arbitrable = Arbitrable__factory.connect(dispute.arbitrated, {
    provider: rpc,
  });

  const logs = await getEventLogs(
    arbitrable,
    arbitrable.filters.MetaEvidence(dispute.metaEvidenceId),
    +process.env.NEXT_PUBLIC_START_BLOCK,
    +dispute.createdAtBlock
  );

  if (!logs.length) return;

  return (logs.at(-1) as any).args._evidence as string;
};

export const handler: Handler = async (ev) => {
  try {
    if (!ev.httpMethod) throw "Wrong method";
    if (!ev.queryStringParameters) throw "No query parameters provided";

    const { chainId, disputeId } = ev.queryStringParameters;

    if (!chainId || isNaN(+chainId) || !supportedChains.includes(+chainId))
      throw "unsupported network";

    if (!disputeId || isNaN(+disputeId))
      throw "disputeID and appeal must be valid numbers";

    const data = await getSubgraphData(+chainId, "Dispute", disputeId);
    if (!data || !data.dispute) throw "invalid dispute";

    let metaEvidenceUri = data.dispute.arbitrableHistory?.metaEvidence;
    if (!metaEvidenceUri)
      metaEvidenceUri = await getMetaEvidenceUriFromLogs(data.dispute);

    return {
      headers,
      statusCode: StatusCodes.OK,
      body: JSON.stringify({ metaEvidenceUri }),
    };
  } catch (err: any) {
    return {
      headers,
      statusCode: StatusCodes.BAD_REQUEST,
      body: JSON.stringify({
        error: err.message,
      }),
    };
  }
};
