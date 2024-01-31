import { useMemo } from "react";
import Link from "next/link";
import { Locale } from "@i18n";
import { useTranslation } from "@i18n/client";
import { Justification } from "@utils/types";
import { regex, shortenAddress } from "@utils";

interface JustificationItemInterface extends Justification {
  index: number;
  lang: Locale;
}

const JustificationItem: React.FC<JustificationItemInterface> = ({
  id,
  lang,
  voteID,
  justification
}) => {
  const t = useTranslation(lang, "case");
  const jurorAddress = useMemo(() => shortenAddress(id.split("-")[2]), [id]);
  const paragraphs= useMemo(() =>
    justification
      .split(/\\n/)
      .map(
        (line) => line
          .replaceAll("\\", "")
          .replaceAll(regex.url, (substring) => `\\${substring}\\`)
      ),
    [justification]
  );

  return (
    <div className="w-full py-4 flex">
      <span className="w-8 pr-2 flex flex-col items-end text-slate-300">
        <span className="text-xs">{t("justifications.vote")}</span>
        <span>
          #<strong className="text-xl text-semibold">{voteID + 1}</strong>
        </span>
      </span>
      <div className="pl-2 w-full flex flex-col border-l-2 border-slate-300 break-words whitespace-pre-line">
        <strong className="text-xs text-slate-500"> {jurorAddress} </strong>
        {paragraphs.map((paragraph) =>
          <p key={paragraph}>
            {paragraph.split("\\").map((substring) => (
              substring.match(regex.url)
                ? <Link
                    className="text-blue-500 underline underline-offset-2"
                    href={substring}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={substring}
                  >
                      {substring}
                  </Link>
                : substring
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default JustificationItem;
