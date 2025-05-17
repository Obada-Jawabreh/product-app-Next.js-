import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/lib/i18n";
import { locales } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale) => {
    localStorage.setItem("preferredLanguage", newLocale);
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-4">
      <span className="text-gray-700">{t("nav.language")}:</span>
      <select
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="bg-white border border-gray-300 rounded px-2 py-1"
        defaultValue={localStorage.getItem("preferredLanguage") || "en"}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {t(`nav.${locale === "en" ? "english" : "arabic"}`)}
          </option>
        ))}
      </select>
    </div>
  );
}
