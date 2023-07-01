interface MetaEvidenceFile {
  title: string;
  category: string;
  description: string;
  aliases: {};
  question: string;
  rulingOptions: {
    type: "single-select";
    titles: string[];
    descriptions: string[];
  };
  fileURI: string;
  dynamicScriptURI: string;
}
