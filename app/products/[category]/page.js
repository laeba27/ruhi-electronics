import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { productCategories } from "@/data/products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/product-card";

// ✅ Required when using `output: 'export'` in next.config.js
export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export default function ProductsPage({ params }) {
  const category = productCategories.find((cat) => cat.slug === params.category);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <Link
            href="/products"
            className="inline-flex items-center text-brand-red hover:underline mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Categories
          </Link>

          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Browse our selection of high-quality {category.name.toLowerCase()} products, designed for efficiency and durability.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
