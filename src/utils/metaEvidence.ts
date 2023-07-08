import { MetaEvidenceFile } from "./types";

export const sanitize = (metaEvidence: MetaEvidenceFile): MetaEvidenceFile => {
  if (metaEvidence.rulingOptions && !metaEvidence.rulingOptions.type)
    metaEvidence.rulingOptions.type = "single-select";

  //   if (metaEvidence.dynamicScriptURI) {
  //     ipfsFetcher(metaEvidence.dynamicScriptURI);
  //   }

  return metaEvidence;
};
