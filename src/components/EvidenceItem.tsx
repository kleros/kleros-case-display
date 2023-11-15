import { Suspense, useMemo } from "react";
import { explorerLink, ipfs, shortenAddress } from "@utils";
import Link from "next/link";
import Image from "next/image";
import { EvidenceData } from "@utils/types";
import { Locale } from "@i18n";
import { useTranslation } from "@i18n/client";

interface EvidenceItemInterface {
  index: number;
  evidence: EvidenceData;
  lang: Locale;
}

const EvidenceItem: React.FC<EvidenceItemInterface> = ({
  lang,
  index,
  evidence,
}) => {
  const t = useTranslation(lang, "case");

  const fileNameDisplay = useMemo(() => {
    if (evidence.file?.fileURI) {
      const lastQuerySubstring = evidence.file.fileURI.split("/").at(-1);
      if (
        lastQuerySubstring &&
        (lastQuerySubstring.includes(".") || lastQuerySubstring.length !== 46)
      )
        return lastQuerySubstring;
    }

    return "FILE";
  }, [evidence.file?.fileURI]);

  const evidenceTitle = useMemo(() => evidence.file?.title ?? evidence.file?.name, [evidence]);

  return (
    <div className="w-full py-4 flex">
      <span className="w-min-12 pr-2 flex flex-col items-end text-slate-300 text-3xl text-semibold">
        {index + 1}.
      </span>
      <div className="flex flex-col">
        {evidenceTitle ? (
          <h2 className="text-3xl">{evidenceTitle}</h2>
        ) : (
          <h2 className="text-3xl text-slate-300">{t("evidence.untitled")}</h2>
        )}
        {evidence.file?.description && (
          <p className="my-2 break-words">{evidence.file.description}</p>
        )}
        {evidence.file?.fileURI && (
          <span className="flex items-center text-sky-500 cursor-pointer text-lg font-semibold">
            <Image
              src="/attachment.svg"
              alt="attachment"
              width="18"
              height="18"
            />
            <Link
              className="ml-1"
              href={ipfs(evidence.file.fileURI)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {fileNameDisplay}
            </Link>
          </span>
        )}
        <div className="flex flex-col">
          <span className="text-slate-500">
            {`${t("evidence.submitted_by")} `}
            <Link
              className="text-blue-500 underline underline-offset-2"
              href={explorerLink(evidence.sender)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {shortenAddress(evidence.sender)}
            </Link>
            {` ${t("evidence.at")} `}
            <span>
              <Suspense fallback={null}>
                {new Date(evidence.creationTime * 1000).toLocaleString()}
              </Suspense>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EvidenceItem;
