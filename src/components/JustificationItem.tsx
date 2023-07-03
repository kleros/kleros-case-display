import { Justification } from "@utils/types";

interface JustificationItemInterface extends Justification {
  index: number;
}

const JustificationItem: React.FC<JustificationItemInterface> = ({
  voteID,
  justification,
}) => (
  <div className="w-full py-4 flex">
    <span className="w-8 pr-2 flex flex-col items-end text-slate-300">
      <span className="text-xs">Vote</span>
      <span>
        #<strong className="text-xl text-semibold">{voteID}</strong>
      </span>
    </span>
    <div className="pl-2 w-full flex flex-col border-l-2 border-slate-300">
      {justification}
    </div>
  </div>
);

export default JustificationItem;
