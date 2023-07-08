import { NextResponse, type NextRequest } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import i18n from "@i18n";

function getLocale(headers: Headers): string | undefined {
  const negHeaders: Record<string, string> = {};
  headers.forEach((value, key) => (negHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  return match(
    new Negotiator({ headers: negHeaders }).languages(locales),
    locales,
    i18n.defaultLocale
  );
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !path.startsWith(`/${locale}/`) && path !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(
        `/${getLocale(request.headers)}${
          path.startsWith("/") ? "" : "/"
        }${path}`,
        request.url
      )
    );
  }
}

export const config = {
  matcher: ["/(case/.*)", "/"],
};
