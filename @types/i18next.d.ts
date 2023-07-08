import "i18next";

import translation from "@i18n/dictionaries/en/translation.json";
import caseTranslation from "@i18n/dictionaries/en/case.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof translation;
      case: typeof caseTranslation;
    };
  }
}
