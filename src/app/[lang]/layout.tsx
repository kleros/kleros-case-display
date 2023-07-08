import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import i18n, { Locale } from "@i18n";
import LanguagePick from "@components/LanguagePick";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: Locale };
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>
        <div className="page-border">
          <div className="content min-h-[50vh]">
            <header className="w-full grid grid-cols-3">
              <Image
                className="col-start-2 place-self-center"
                src="/kleros.svg"
                priority={true}
                alt="kleros"
                width="148"
                height="48"
              />
              <div className="justify-self-end">
                <LanguagePick current={params.lang} />
              </div>
            </header>
            <main className="my-32 flex flex-col items-center">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
