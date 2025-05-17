import { getRequestConfig } from "next-intl/server";
import { locales } from "@/lib/i18n";

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`@/locales/${locale}.json`)).default;

  return {
    messages,
    timeZone: "UTC",
    now: new Date(),
    defaultLocale: "en",
    locales,
  };
});
