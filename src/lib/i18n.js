import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ar"];
export const defaultLocale = "en";

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames: {
      "/": "/",
      "/product/[id]": "/product/[id]",
    },
  });

export function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
