"use server";

import logtail from "@config/logtail";
import { Arbitrable__factory } from "@generated/contracts";
import { DisputeQuery, Sdk, getSdk } from "@generated/graphql";
import { ipfsFetcher, justificationsLink } from "@utils";
import { EvidenceData, EvidenceFile, MetaEvidenceFile } from "@utils/types";
import axios from "axios";
import { BaseContract, JsonRpcProvider } from "ethers";
import { GraphQLClient } from "graphql-request";
import { cache } from "react";

const rpc = new JsonRpcProvider(process.env.PRIVATE_RPC_ENDPOINT);

const sdk = getSdk(new GraphQLClient(process.env.SUBGRAPH_ENDPOINT));

export const getSubgraphData = cache(
  async (key: keyof Sdk, id: string) => await sdk[key]({ id, disputeID: id })
);

export const getJustifications = cache(
  async (disputeId: number, appeal: number) => {
    try {
      const res = await axios.get(justificationsLink(disputeId, appeal));
      return res.data.payload.justifications;
    } catch (err: any) {
      logtail.error("Kleros Case Display getJustifications error", {
        err,
        disputeId,
        appeal,
      });
      logtail.flush();
      return [];
    }
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
    const arbitrable = Arbitrable__factory.connect(dispute.arbitrated.id, {
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
    try {
      let metaEvidenceUri = dispute.arbitrableHistory?.metaEvidence;
      if (!metaEvidenceUri)
        metaEvidenceUri = await getMetaEvidenceUriFromLogs(dispute);

      if (!metaEvidenceUri) return null;

      return await ipfsFetcher<MetaEvidenceFile>(metaEvidenceUri);
    } catch (err: any) {
      logtail.error("Kleros Case Display getMetaEvidence error", {
        err,
        arbitrable: dispute.arbitrated,
      });
      logtail.flush();
      return null;
    }
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
