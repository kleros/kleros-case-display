"use client";

import i18n, { Locale } from "@i18n";
import cn from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface LanguagePickProps {
  current: Locale;
}

const LanguagePick: React.FC<LanguagePickProps> = ({ current }) => {
  const router = useRouter();
  const path = usePathname();
  const [active, setActive] = useState(false);

  return (
    <div className="dropdown inline-block relative">
      <button
        className="py-2 px-4 text-slate-500 font-semibold rounded inline-flex items-center"
        onClick={() => setActive(true)}
        onMouseOutCapture={() => setActive(false)}
      >
        <span className="mr-1">{current}</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className={cn("dropdown-menu absolute", active ? "block" : "hidden")}>
        {i18n.locales
          .filter((lang) => lang !== current)
          .map((lang) => (
            <li
              key={lang}
              className="text-slate-500 hover:bg-slate-200 cursor-pointer py-2 px-4 block"
              onClick={() => router.replace(`/${lang}${path.slice(3)}`)}
            >
              {lang}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default LanguagePick;
