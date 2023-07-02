import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kleros Case Display",
  description: "Kleros Case Display",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-border">
          <div className="content">
            <header className="w-full flex justify-center">
              <Image src="/kleros.svg" alt="kleros" width="148" height="48" />
            </header>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
