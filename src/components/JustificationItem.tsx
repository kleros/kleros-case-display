import { Locale } from "@i18n";
import { useTranslation } from "@i18n/client";
import { Justification } from "@utils/types";
import { useMemo } from "react";

interface JustificationItemInterface extends Justification {
  index: number;
  lang: Locale;
}

const JustificationItem: React.FC<JustificationItemInterface> = ({
  lang,
  voteID,
  justification,
}) => {
  const t = useTranslation(lang, "case");
  const lines = useMemo(
    () => justification.split(/\\n/).map((line) => line.replaceAll("\\", "")),
    [justification]
  );

  return (
    <div className="w-full py-4 flex">
      <span className="w-8 pr-2 flex flex-col items-end text-slate-300">
        <span className="text-xs">{t("justifications.vote")}</span>
        <span>
          #<strong className="text-xl text-semibold">{voteID}</strong>
        </span>
      </span>
      <div className="pl-2 w-full flex flex-col border-l-2 border-slate-300 break-words text-justify whitespace-pre-line">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default JustificationItem;
