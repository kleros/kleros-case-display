import Dispute from "./Dispute";
import {
  getSubgraphData,
  getJustifications,
  getMetaEvidence,
  getEvidenceWithFiles,
} from "./data";
import { Locale } from "@i18n";

interface DisputePageProps {
  params: {
    id: string;
    lang: Locale;
  };
}

export default async function Page({ params: { lang, id } }: DisputePageProps) {
  const disputeId = +id;

  if (isNaN(disputeId)) return <div>Invalid Dispute ID...</div>;

  const [justifications, data] = await Promise.all([
    getJustifications(disputeId, 0),
    getSubgraphData("Dispute", id),
  ]);

  const { dispute, draws } = data;
  if (!data || !dispute) return <div>Subgraph Error...</div>;

  const [metaEvidence, evidence] = await Promise.all([
    getMetaEvidence(dispute),
    dispute.evidenceGroup?.evidence
      ? getEvidenceWithFiles(dispute.evidenceGroup.evidence.reverse())
      : [],
  ]);

  return (
    <Dispute
      lang={lang}
      id={disputeId}
      arbitrated={dispute.arbitrated}
      ruled={dispute.ruled}
      ruling={+dispute.ruling}
      period={dispute.period}
      nbChoices={+dispute.nbChoices > 10 ? undefined : +dispute.nbChoices}
      lastPeriodChange={dispute.lastPeriodChangeTs}
      metaEvidence={metaEvidence ?? null}
      evidenceList={evidence}
      justifications={justifications}
      nbJurors={
        draws.reduce((acc, draw) => acc.add(draw.address), new Set<string>())
          .size
      }
    />
  );
}
