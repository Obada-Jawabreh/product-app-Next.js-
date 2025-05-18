import { Link } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{t("products.notFound")}</h1>
        <Link
          href="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          {t("common.back")}
        </Link>
      </div>
    </div>
  );
}
