import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./lib/i18n";

export default createMiddleware({
  defaultLocale,
  locales,
  pathnames: {
    "/": "/",
    "/product/[id]": "/product/[id]",
  },
});

export const config = {
  matcher: ["/", "/product/:path*", "/(ar|en)/:path*"],
};
