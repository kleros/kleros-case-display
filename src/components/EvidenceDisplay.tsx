import { ipfs } from "@utils";
import React from "react";

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

  const injectedArgs = {
    disputeID: disputeId,
    chainID: process.env.NEXT_PUBLIC_CHAIN_ID,
    arbitratorContractAddress: arbitrator,
    arbitratorJsonRpcUrl: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
    arbitratorChainID: process.env.NEXT_PUBLIC_CHAIN_ID,
    arbitrableContractAddress: arbitrated,
    arbitrableChainID: process.env.NEXT_PUBLIC_CHAIN_ID,
    arbitrableJsonRpcUrl: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
    jsonRpcUrl: process.env.NEXT_PUBLIC_RPC_ENDPOINT,
  };

  const searchParams = encodeURIComponent(JSON.stringify(injectedArgs));
  const fullLink = (uri.includes("://") ? uri : ipfs(uri)) + `?${searchParams}`;

  return (
    <iframe
      className="w-full max-h-80 border-0"
      title="evidence-display"
      src={fullLink}
    />
  );
};

export default EvidenceDisplay;
