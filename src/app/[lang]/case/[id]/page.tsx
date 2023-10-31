import { Logtail } from "@logtail/node";
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
  const logtail = new Logtail(process.env.LOGTAIL_SOURCE_TOKEN);
  logtail.use(async (log: any) => ({ ...log, process: __filename }));

  const disputeId = +id;

  if (isNaN(disputeId)) return <div>Invalid Dispute ID...</div>;

  try {
    const [justifications, data] = await Promise.all([
      getJustifications(disputeId, 0),
      getSubgraphData("Dispute", id),
    ]);

    const dispute = data?.dispute;
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
        arbitrated={dispute.arbitrated.id}
        ruled={dispute.ruled}
        ruling={+dispute.ruling}
        period={dispute.period}
        nbChoices={+dispute.nbChoices > 10 ? undefined : +dispute.nbChoices}
        lastPeriodChange={dispute.lastPeriodChange}
        metaEvidence={metaEvidence}
        evidenceList={evidence}
        justifications={justifications}
      />
    );
  } catch (err: any) {
    logtail.error("Kleros Case Display error", err);
    logtail.flush();
    throw new Error(err);
  }
}
