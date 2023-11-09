import React from "react";
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
  const justificationLines = justification.split(/\\r\\n|\\n|\\r|\n|\r|\r\n/);

  return (
    <div className="w-full py-4 flex">
      <span className="w-8 pr-2 flex flex-col items-end text-slate-300">
        <span className="text-xs">{t("justifications.vote")}</span>
        <span>
          #<strong className="text-xl text-semibold">{voteID}</strong>
        </span>
      </span>
      <div className="pl-2 w-full flex flex-col border-l-2 border-slate-300 break-words text-justify">
        {justificationLines.map((line, i) =>
          <React.Fragment key={line + i}>
            {line}
            {i < justificationLines.length - 1 ? <br /> : null}
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default JustificationItem;
