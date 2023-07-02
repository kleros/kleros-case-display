export interface MetaEvidenceFile {
  title: string;
  description: string;
  question: string;
  fileURI: string;
  evidenceDisplayInterfaceURI?: string;
  arbitrableInterfaceURI?: string;
  rulingOptions: {
    type: string;
    titles: string[];
    descriptions: string[];
  };
}

export interface Justification {
  id: string;
  disputeIDAndAppeal: string;
  voteID: number;
  justification: string;
  created_at: string;
}
