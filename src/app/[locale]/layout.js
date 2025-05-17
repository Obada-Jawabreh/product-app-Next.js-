import { Noto_Sans, Noto_Sans_Arabic } from "next/font/google";
import "../globals.css";
import { getDirection } from "@/lib/i18n";
import { NextIntlClientProvider } from "next-intl";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-sans",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-sans-arabic",
});

export const metadata = {
  title: "Product App",
  description: "A simple product app with Next.js and MongoDB",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`@/locales/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`@/locales/en.json`)).default;
  }

  return (
    <div
      className={`${notoSans.variable} ${notoSansArabic.variable} font-sans min-h-screen bg-gray-100`}
      dir={getDirection(locale)}
      lang={locale}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
