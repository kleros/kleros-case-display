"use client";

import { useEffect, useState } from "react";
import { Arbitrable__factory } from "@generated/contracts";
import { JsonRpcProvider } from "ethers";
import { DisputeQuery } from "@generated/graphql";
import { MetaEvidenceFile } from "@utils/types";
import { ipfsFetcher } from "@utils";

const rpcProvider = new JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_ENDPOINT);

const useNonSubgraphMetaEvidence = (dispute: DisputeQuery["dispute"]) => {
  const [metaEvidence, setMetaEvidence] = useState<MetaEvidenceFile>();

  useEffect(() => {
    if (!dispute) return;

    console.log("hmm");

    const storageKey = `metaevidence-${dispute.arbitrated}#${dispute.metaEvidenceId}`;

    (async () => {
      let metaEvidenceUri;
      try {
        metaEvidenceUri = window.localStorage.getItem(storageKey);
        if (!metaEvidenceUri || typeof metaEvidenceUri != "string")
          throw Error("not stored in local storage");
      } catch (err) {
        const arbitrable = Arbitrable__factory.connect(dispute.arbitrated, {
          provider: rpcProvider,
        });

        const logs = await arbitrable.queryFilter(
          arbitrable.getEvent("MetaEvidence"),
          +process.env.NEXT_PUBLIC_START_BLOCK!,
          +dispute.createdAtBlock
        );

        if (!logs.length) return;

        metaEvidenceUri = logs.at(-1)!.args._evidence;

        localStorage.setItem(storageKey, metaEvidenceUri);
      }

      setMetaEvidence(await ipfsFetcher(metaEvidenceUri));
    })();
  }, [dispute]);

  return metaEvidence;
};

export default useNonSubgraphMetaEvidence;
