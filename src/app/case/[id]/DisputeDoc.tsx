"use client";

import EvidenceItem, { EvidenceData } from "@components/EvidenceItem";
import JustificationItem from "@components/JustificationItem";
import useNonSubgraphMetaEvidence from "@hooks/useNonSubgraphMetaEvidence";
import Steps from "@components/Steps";
import { ipfs } from "@utils";
import Link from "next/link";
import { DisputeQuery } from "@generated/graphql";
import { Justification } from "@hooks/useJustifications";
import { MetaEvidenceFile } from "@utils/types";
import Image from "next/image";
import EvidenceDisplay from "@components/EvidenceDisplay";
import ArbitrableInterface from "@components/ArbitrableInterface";

const displayedSteps = ["Evidence", "Vote", "Appeal", "Execution"];

interface Props {
  disputeId: number;
  dispute: NonNullable<DisputeQuery["dispute"]>;
  justifications: Justification[];
  subgraphMetaEvidence: MetaEvidenceFile | null;
  evidence: EvidenceData[];
}

export default function DisputeDoc({
  disputeId,
  dispute,
  evidence,
  justifications,
  subgraphMetaEvidence,
}: Props) {
  const metaEvidence =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    subgraphMetaEvidence ?? useNonSubgraphMetaEvidence(dispute);

  return (
    <div className="pb-36 mx-auto w-11/12 md:w-3/4 flex flex-col items-center">
      <h1 className="mt-12 mb-2 text-5xl">Case Details</h1>
      <span className="text-3xl font-bold text-sky-500">#{disputeId}</span>

      {metaEvidence && (
        <section>
          <div className="mt-8 mb-12 divider w-3/4" />
          <h1 className="mx-4 text-center text-3xl">{metaEvidence.title}</h1>
          <p className="mb-6">{metaEvidence.description}</p>

          <EvidenceDisplay
            disputeId={disputeId}
            uri={metaEvidence.evidenceDisplayInterfaceURI}
            arbitrated={dispute.arbitrated}
            arbitrator={process.env.NEXT_PUBLIC_ARBITRABLE_URL}
          />

          <ArbitrableInterface uri={metaEvidence.arbitrableInterfaceURI} />

          <span className="flex items-center text-sky-500 cursor-pointer">
            <Image
              src="/attachment.svg"
              alt="attachment"
              width="36"
              height="36"
            />
            <Link
              className="ml-4 text-xl"
              href={ipfs(metaEvidence.fileURI)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {metaEvidence.fileURI.split("/").slice(-1)}
            </Link>
          </span>
        </section>
      )}

      <section>
        <div className="my-12 divider w-3/4" />
        <h2 className="mb-4 text-3xl">Period</h2>
        <Steps
          list={displayedSteps}
          current={displayedSteps.findIndex(
            (step) => step.toLowerCase() === dispute.period.toLowerCase()
          )}
        />
      </section>

      {metaEvidence && (
        <section>
          <div className="my-12 divider w-3/4" />
          <h2 className="mb-4 text-3xl">Question</h2>
          <span className="text-xl font-semibold">{metaEvidence.question}</span>
          <div className="flex mt-4">
            {metaEvidence.rulingOptions.titles.map((vote, idx) => (
              <div key={idx} className="flex">
                <div className="p-4">
                  <span className="text-xl">{vote}</span>
                  <p>{metaEvidence.rulingOptions.descriptions[idx]}</p>
                </div>
                {idx !== metaEvidence.rulingOptions.titles.length - 1 && (
                  <div className="divider-v" />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {dispute.evidenceGroup && (
        <section>
          <div className="my-12 divider w-3/4" />
          <h2 className="mb-4 text-3xl">
            Evidence ({dispute.evidenceGroup.length} items)
          </h2>
          {evidence.map((evidence, idx) => (
            <EvidenceItem key={idx} evidence={evidence} index={idx} />
          ))}
        </section>
      )}

      {justifications && !!justifications.length && (
        <section>
          <div className="divider my-12 w-3/4" />
          <h2 className="mb-4 text-3xl">
            Justifications ({justifications.length} items)
          </h2>
          {justifications.reverse().map((justificationData, idx) => (
            <JustificationItem key={idx} index={idx} {...justificationData} />
          ))}
        </section>
      )}
    </div>
  );
}
