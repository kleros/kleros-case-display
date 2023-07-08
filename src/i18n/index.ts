import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";

const i18n = {
  defaultLocale: "en",
  locales: ["en", "es"],
} as const;

export default i18n;

export type Locale = (typeof i18n)["locales"][number];

const namespaces = ["translation", "case"] as const;
export const defaultNS = namespaces[0];

export type Namespace = (typeof namespaces)[number];

export const options = {
  supportedLngs: i18n.locales,
  fallbackLng: i18n.defaultLocale,
  fallbackNS: defaultNS,
  defaultNS,
};

export const getTranslation = async (
  lng: Locale,
  ns: Namespace = defaultNS
) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, ns: string) =>
          import(`./dictionaries/${language}/${ns}.json`)
      )
    )
    .init({ ...options, lng, ns });

  return i18nInstance.getFixedT(lng, ns);
};

export type TFunc = Awaited<ReturnType<typeof getTranslation>>;
