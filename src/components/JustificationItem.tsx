import { explorerLink, shortenAddress } from "@utils";
import Link from "next/link";
import TimeAgo from "./TimeAgo";
import { Justification } from "@hooks/useJustifications";

interface JustificationItemInterface extends Justification {
  index: number;
}

const JustificationItem: React.FC<JustificationItemInterface> = ({
  voteID,
  justification,
}) => {
  return (
    <div className="mt-4 flex flex-col">
      <div className="px-4 py-2 flex items-center">
        {voteID}
        <div className="pl-2 flex flex-col">{justification}</div>
      </div>
    </div>
  );
};

export default JustificationItem;
