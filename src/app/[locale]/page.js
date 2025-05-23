import { productService } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import { getTranslations } from "next-intl/server";

export default async function Home({ params: { locale } }) {
  const products = await productService.getAllProducts();
  const t = await getTranslations();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {t("products.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} locale={locale} />
        ))}
      </div>
    </main>
  );
}
