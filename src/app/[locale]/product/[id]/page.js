import Image from "next/image";
import { productService } from "@/services/productService";
import { Link } from "@/lib/i18n";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

export default async function ProductPage({ params: { id, locale } }) {
  try {
    const [product, t] = await Promise.all([
      productService.getProductById(id),
      getTranslations(),
    ]);

    if (!product) {
      notFound();
    }

    return (
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <div className="relative h-64 w-full md:w-96">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 text-xl mb-4">
                {t("common.price")}: ${product.price}
              </p>
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2">
                  {t("common.description")}:
                </h2>
                <p className="text-gray-700">{product.description}</p>
              </div>
              <Link
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                {t("common.back")}
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error loading product:", error);
    notFound();
  }
}
