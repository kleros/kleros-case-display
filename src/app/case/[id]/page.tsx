"use client";

import { useEffect, useState } from "react";
import EvidenceItem from "@components/EvidenceItem";
import JustificationItem from "@components/JustificationItem";
import { Arbitrable__factory } from "@generated/contracts";
import useJustifications from "@hooks/useJustifications";
import useSubgraph from "@hooks/useSubgraph";
import { JsonRpcProvider } from "ethers";
import useIPFS from "@hooks/useIPFS";

export default function Page({ params }: { params: { id: string } }) {
  const disputeId = params.id;

  const data = useSubgraph("Dispute", disputeId);
  const dispute = data?.dispute;
  const [justifications] = useJustifications(+disputeId, 0);

  const [metaEvidenceUri, setMetaEvidenceUri] = useState<string>();
  const [metaEvidence] = useIPFS<MetaEvidenceFile>(metaEvidenceUri);

  console.log({ metaEvidence });

  useEffect(() => {
    if (!dispute) return;
    if (!!dispute.arbitrableHistory) {
      setMetaEvidenceUri(dispute.arbitrableHistory.metaEvidence);
      return;
    }

    const arbitrable = Arbitrable__factory.connect(dispute.arbitrated, {
      provider: new JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_ENDPOINT),
    });

    (async () => {
      const logs = await arbitrable.queryFilter(
        arbitrable.getEvent("MetaEvidence"),
        +process.env.NEXT_PUBLIC_START_BLOCK!,
        +dispute.createdAtBlock
      );

      console.log({ eventLogs: logs });
      if (!logs.length) return;

      setMetaEvidenceUri(logs.at(-1)?.args._evidence);
    })();
  }, [dispute]);

  if (isNaN(+disputeId)) return <div>Invalid disputeId...</div>;
  if (!data) return <div>Loading...</div>;
  if (!dispute) return <div>Subgraph error</div>;

  return (
    <div className="flex flex-col">
      <h1>Detalles del Caso</h1>
      <span>Caso #{disputeId}</span>

      <span>{dispute.period}</span>

      {metaEvidence && <span>{metaEvidence.fileURI}</span>}

      {justifications &&
        justifications.map((justificationData, idx) => (
          <JustificationItem key={idx} index={idx} {...justificationData} />
        ))}

      {dispute.evidenceGroup &&
        dispute.evidenceGroup.evidence.map((evidence, idx) => (
          <EvidenceItem key={idx} evidence={evidence} index={idx} />
        ))}
    </div>
  );
}
