import { Evidence } from "@generated/graphql";
import useIPFS from "@hooks/useIPFS";
import { explorerLink, ipfs, shortenAddress } from "@utils";
import Link from "next/link";
import TimeAgo from "./TimeAgo";
import Identicon from "./Identicon";

interface EvidenceFile {
  title?: string;
  description?: string;
  fileURI?: string;
}

interface EvidenceItemInterface {
  index: number;
  evidence: {
    creationTime: any;
    URI: string;
    sender: any;
  };
}

const EvidenceItem: React.FC<EvidenceItemInterface> = ({ index, evidence }) => {
  const [evidenceFile] = useIPFS<EvidenceFile>(evidence.URI);

  if (!evidenceFile) return null;

  return (
    <div className="mt-4 flex flex-col">
      <div className="relative px-8 py-4">
        <span className="absolute left-3 text-sm text-slate-500">{index}</span>
        <div className="flex justify-between text-xl font-bold">
          {evidenceFile.fileURI && (
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={ipfs(evidenceFile?.fileURI)}
            >
              FILE
            </Link>
          )}
        </div>
      </div>
      <div>
        {evidenceFile.title && <h2>{evidenceFile.title}</h2>}
        {evidenceFile.description && <p>{evidenceFile.description}</p>}
      </div>
      <div className="px-4 py-2 flex items-center">
        <Identicon diameter={32} address={evidence.sender} />
        <div className="pl-2 flex flex-col">
          <span>
            submitted by{" "}
            <Link
              className="text-blue-500 underline underline-offset-2"
              href={explorerLink(evidence.sender)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {shortenAddress(evidence.sender)}
            </Link>
          </span>
          <TimeAgo time={evidence.creationTime} />
        </div>
      </div>
    </div>
  );
};

export default EvidenceItem;
