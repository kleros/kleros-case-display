"use client";

import { Locale, TFunc } from "@i18n";
import { useTranslation } from "@i18n/client";
import { useRouter } from "next/navigation";

interface NavigatorProps {
  lang: Locale;
}

const Navigator: React.FC<NavigatorProps> = ({ lang }) => {
  const router = useRouter();
  const t = useTranslation(lang);
  return (
    <>
      <h1 className="text-5xl uppercase">{t("navigate")}</h1>
      <form
        className="my-4"
        action={(formData) => {
          const disputeId = formData.get("dispute")?.toString();
          if (!disputeId) return;
          router.push(`/${lang}/case/${disputeId}`);
        }}
      >
        <label htmlFor="dispute" className="text-3xl font-bold text-sky-500">
          #
          <input
            name="dispute"
            className="w-24 ml-2 p-2 border-b-4 text-4xl font-semibold border-slate-300 focus:outline-0"
            type="number"
            step={1}
            min={0}
            max={1000000}
          />
        </label>
        <button type="submit" className="p-2 text-4xl text-sky-500">
          ➞
        </button>
      </form>
    </>
  );
};

export default Navigator;
