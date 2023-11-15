import React from "react";
import { ipfs } from "@utils";
import { arbitrableWhitelist } from "@consts/arbitrable-whitelist";

interface EvidenceDisplayProps {
  disputeId: number;
  uri?: string;
  arbitrator: string;
  arbitrated: string;
}

const EvidenceDisplay: React.FC<EvidenceDisplayProps> = ({
  uri,
  disputeId,
  arbitrator,
  arbitrated,
}) => {
  if (!uri) return null;

  const chainID: string = process.env.NEXT_PUBLIC_CHAIN_ID;

  const injectedArgs = {
    disputeID: disputeId,
    chainID,
    arbitratorContractAddress: arbitrator,
    arbitratorJsonRpcUrl: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
    arbitratorChainID: process.env.NEXT_PUBLIC_CHAIN_ID,
    arbitrableContractAddress: arbitrated,
    arbitrableChainID: chainID,
    arbitrableJsonRpcUrl: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
    jsonRpcUrl: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
  };

  const searchParams = encodeURIComponent(JSON.stringify(injectedArgs));
  const fullLink = (uri.includes("://") ? uri : ipfs(uri)) + `?${searchParams}`;

  return (
    <iframe
      sandbox={
        arbitrableWhitelist[+chainID]?.includes(arbitrated.toLowerCase())
          ? "allow-scripts allow-same-origin"
          : "allow-scripts"
      }
      className="w-full max-h-80 border-0"
      title="evidence-display"
      src={fullLink}
    />
  );
};

export default EvidenceDisplay;
