"use server";

import { Arbitrable__factory } from "@generated/contracts";
import { DisputeQuery, Sdk, getSdk } from "@generated/graphql";
import { ipfsFetcher, justificationsLink } from "@utils";
import { EvidenceData, EvidenceFile, MetaEvidenceFile } from "@utils/types";
import { BaseContract, JsonRpcProvider } from "ethers";
import { GraphQLClient } from "graphql-request";
import { cache } from "react";

const rpc = new JsonRpcProvider(process.env.PRIVATE_RPC_ENDPOINT);

const sdk = getSdk(new GraphQLClient(process.env.SUBGRAPH_ENDPOINT));

export const getSubgraphData = cache(
  async (key: keyof Sdk, id: string) => await sdk[key]({ id })
);

export const getJustifications = cache(
  async (disputeId: number, appeal: number) => {
    const res = await fetch(justificationsLink(disputeId, appeal));
    return res.ok ? (await res.json()).payload.justifications : [];
  }
);

const getEventLogs = async <
  C extends BaseContract,
  E extends ReturnType<C["filters"][keyof C["filters"]]>
>(
  contract: C,
  filter: E,
  startBlock: number,
  endBlock: number
) => await contract.connect(rpc).queryFilter(filter, startBlock, endBlock);

export const getMetaEvidenceUriFromLogs = cache(
  async (dispute: NonNullable<DisputeQuery["dispute"]>) => {
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
  }
);

export const getMetaEvidence = cache(
  async (dispute: NonNullable<DisputeQuery["dispute"]>) => {
    let metaEvidenceUri = dispute.arbitrableHistory?.metaEvidence;
    if (!metaEvidenceUri)
      metaEvidenceUri = await getMetaEvidenceUriFromLogs(dispute);

    if (!metaEvidenceUri) return null;

    return await ipfsFetcher<MetaEvidenceFile>(metaEvidenceUri);
  }
);

export const getEvidenceWithFiles = cache(async (evidence: EvidenceData[]) =>
  (
    await Promise.all(
      evidence.map((ev) =>
        ev.URI ? ipfsFetcher<EvidenceFile>(ev.URI) : undefined
      )
    )
  ).map((res, idx) => ({
    ...evidence[idx],
    file: res,
  }))
);
