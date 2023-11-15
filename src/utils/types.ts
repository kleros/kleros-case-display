export interface MetaEvidenceFile {
  title: string;
  description: string;
  question: string;
  fileURI: string;
  evidenceDisplayInterfaceURI?: string;
  arbitrableInterfaceURI?: string;
  dynamicScriptURI?: string;
  rulingOptions: {
    type: string;
    titles: string[];
    descriptions: string[];
  };
}

export interface EvidenceFile {
  title?: string;
  name?: string;
  description?: string;
  fileURI?: string;
}

export interface EvidenceData {
  creationTime: number;
  URI?: string;
  sender: any;
  file?: EvidenceFile;
}

export interface Justification {
  id: string;
  disputeIDAndAppeal: string;
  voteID: number;
  justification: string;
  created_at: string;
}
