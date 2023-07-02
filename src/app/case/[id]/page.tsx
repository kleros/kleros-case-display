import DisputeDoc from "./DisputeDoc";
import {
  getSubgraphData,
  getJustifications,
  getMetaEvidence,
  getEvidenceWithFiles,
} from "./data";

export default async function Page({ params }: { params: { id: string } }) {
  const disputeId = params.id;

  if (isNaN(+disputeId)) return <div>Invalid Dispute ID...</div>;

  const [justifications, data] = await Promise.all([
    getJustifications(+disputeId, 0),
    getSubgraphData("Dispute", disputeId),
  ]);

  const dispute = data?.dispute;
  if (!data || !dispute) return <div>Subgraph Error...</div>;

  const [metaEvidence = null, evidence = []] = await Promise.all([
    dispute.arbitrableHistory?.metaEvidence
      ? await getMetaEvidence(dispute.arbitrableHistory.metaEvidence)
      : undefined,
    dispute.evidenceGroup?.evidence
      ? await getEvidenceWithFiles(dispute.evidenceGroup.evidence.reverse())
      : undefined,
  ]);

  return (
    <DisputeDoc
      disputeId={+disputeId}
      dispute={dispute}
      evidence={evidence}
      justifications={justifications}
      subgraphMetaEvidence={metaEvidence}
    />
  );
}
