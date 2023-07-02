import { useMemo } from "react";
import useIPFS from "@hooks/useIPFS";
import { explorerLink, ipfs, shortenAddress } from "@utils";
import Link from "next/link";
import Image from "next/image";

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

  const fileNameDisplay = useMemo(() => {
    if (evidenceFile?.fileURI) {
      const lastQuerySubstring = evidenceFile.fileURI.split("/").at(-1);
      if (
        lastQuerySubstring &&
        (lastQuerySubstring.includes(".") || lastQuerySubstring.length !== 46)
      )
        return lastQuerySubstring;
    }

    return "FILE";
  }, [evidenceFile?.fileURI]);

  if (!evidenceFile) return null;

  return (
    <div className="w-full py-4 flex">
      <span className="w-12 pr-2 flex flex-col items-end text-slate-300 text-3xl text-semibold">
        {index + 1}.
      </span>
      <div className="flex flex-col">
        {evidenceFile.title ? (
          <h2 className="text-3xl">{evidenceFile.title}</h2>
        ) : (
          <h2 className="text-3xl text-slate-300">Untitled</h2>
        )}
        {evidenceFile.description && <p>{evidenceFile.description}</p>}
        {evidenceFile.fileURI && (
          <span className="flex items-center text-sky-500 cursor-pointer text-lg font-semibold">
            <Image
              src="/attachment.svg"
              alt="attachment"
              width="18"
              height="18"
            />
            <Link
              className="ml-1"
              href={ipfs(evidenceFile.fileURI)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {fileNameDisplay}
            </Link>
          </span>
        )}
        <div className="flex flex-col">
          <span>
            Submitted by{" "}
            <Link
              className="text-blue-500 underline underline-offset-2"
              href={explorerLink(evidence.sender)}
              rel="noopener noreferrer"
              target="_blank"
            >
              {shortenAddress(evidence.sender)}
            </Link>
            {" on "}
            <span>
              {new Date(evidence.creationTime * 1000).toLocaleString()}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default EvidenceItem;
