import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "ar"];
export const defaultLocale = "en";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });

export function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}
