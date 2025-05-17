import Image from "next/image";
import { Link } from "@/lib/i18n";
import { useTranslations } from "next-intl";

export default function ProductCard({ product, locale }) {
  const t = useTranslations();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">
          {t("common.price")}: ${product.price}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          {t("common.viewDetails")}
        </Link>
      </div>
    </div>
  );
}
