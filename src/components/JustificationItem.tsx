import { Locale } from "@i18n";
import { useTranslation } from "@i18n/client";
import { Justification } from "@utils/types";

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
  return (
    <div className="w-full py-4 flex">
      <span className="w-8 pr-2 flex flex-col items-end text-slate-300">
        <span className="text-xs">{t("justifications.vote")}</span>
        <span>
          #<strong className="text-xl text-semibold">{voteID}</strong>
        </span>
      </span>
      <div className="pl-2 w-full flex flex-col border-l-2 border-slate-300 break-words">
        {justification.split("\n").map(line => <div key={line}>{line}<br /></div>)}
      </div>
    </div>
  );
};

export default JustificationItem;
