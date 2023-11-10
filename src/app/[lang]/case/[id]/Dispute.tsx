"use client";

import EvidenceItem from "@components/EvidenceItem";
import JustificationItem from "@components/JustificationItem";
import Steps from "@components/Steps";
import { ipfs } from "@utils";
import Link from "next/link";
import { Period } from "@generated/graphql";
import { EvidenceData, Justification, MetaEvidenceFile } from "@utils/types";
import Image from "next/image";
import EvidenceDisplay from "@components/EvidenceDisplay";
import ArbitrableInterface from "@components/ArbitrableInterface";
import cn from "classnames";
import { useTranslation } from "@i18n/client";
import { Locale } from "@i18n";

const displayedSteps = [
  Period.Evidence,
  Period.Vote,
  Period.Executed,
];

interface DisputeProps {
  lang: Locale;
  id: number;
  period: Period;
  ruling: number;
  ruled: boolean;
  arbitrated: string;
  nbChoices?: number;
  lastPeriodChange: Date;
  metaEvidence: MetaEvidenceFile | null;
  evidenceList: EvidenceData[];
  justifications: Justification[];
  nbJurors: number;
}

const DisputePage = ({
  lang,
  id,
  period,
  ruling,
  ruled,
  nbChoices,
  arbitrated,
  metaEvidence,
  evidenceList,
  justifications,
  nbJurors,
}: DisputeProps) => {
  const t = useTranslation(lang, "case");

  const rulingOptions = metaEvidence?.rulingOptions
    ? metaEvidence.rulingOptions
    : nbChoices
    ? {
        type: "single-select",
        titles: [...Array(nbChoices).keys()].map((i) => `Option ${i}`),
        descriptions: [],
      }
    : null;

  return (
    <div className="pb-36 mx-auto w-11/12 md:w-3/4 flex flex-col items-center">
      <h1 className="mb-2 text-5xl uppercase text-center">{t("details")}</h1>
      <span className="text-3xl font-bold text-sky-500">#{id}</span>

      {metaEvidence && (
        <section>
          <div className="mt-8 mb-12 divider w-3/4" />
          <h1 className="mx-4 text-center text-3xl">{metaEvidence.title}</h1>
          <p className="mb-6">{metaEvidence.description}</p>

          <EvidenceDisplay
            disputeId={id}
            uri={metaEvidence.evidenceDisplayInterfaceURI}
            arbitrated={arbitrated}
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
        <h2 className="mb-4 text-3xl text-center uppercase">
          {t("period.title")}
        </h2>
        <Steps
          list={t("period.steps", { returnObjects: true })}
          current={displayedSteps.findIndex((step) => step === period)}
        />
      </section>

      {metaEvidence && (
        <section>
          <div className="my-12 divider w-3/4" />
          <h2 className="mb-4 text-3xl uppercase text-center">
            {t("question.title")}
          </h2>
          <span className="text-xl font-semibold">{metaEvidence.question}</span>
          <div className="flex mt-8">
            {rulingOptions &&
              rulingOptions.titles.map((title, idx) => (
                <div key={idx} className="flex">
                  <div
                    className={cn("p-4 relative", {
                      "outline outline-2 outline-sky-500":
                        ruled && idx + 1 === ruling,
                    })}
                  >
                    {ruled && idx + 1 === ruling && (
                      <span className="absolute px-2 bg-white text-sky-500 font-semibold -top-1 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        {t("question.winner")}
                      </span>
                    )}
                    <span className="text-xl">{title}</span>
                    {rulingOptions.descriptions[idx] && (
                      <p>{rulingOptions.descriptions[idx]}</p>
                    )}
                  </div>
                  {idx !== rulingOptions.titles.length - 1 && (
                    <div className="divider-v" />
                  )}
                </div>
              ))}
          </div>
        </section>
      )}

      {!!evidenceList.length && (
        <section>
          <div className="my-12 divider w-3/4" />
          <h2 className="mb-4 text-3xl text-center uppercase">
            {t("evidence.title", { n: evidenceList.length })}
          </h2>
          {evidenceList.reverse().map((evidence, idx) => (
            <EvidenceItem
              key={idx}
              lang={lang}
              evidence={evidence}
              index={evidenceList.length - idx - 1}
            />
          ))}
        </section>
      )}

      <section>
        <div className="divider my-12 w-3/4" />
        <span className="text-xl mb-8 text-slate-600 font-light">
          <strong>{nbJurors}</strong> {t("jurors.number")}
        </span>
      </section>

      {!!justifications.length && (
        <section>
          <h2 className="mb-4 text-3xl text-center uppercase">
            {t("justifications.title", { n: justifications.length })}
          </h2>
          {justifications.reverse().map((justificationData, idx) => (
            <JustificationItem
              key={idx}
              lang={lang}
              index={idx}
              {...justificationData}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default DisputePage;
