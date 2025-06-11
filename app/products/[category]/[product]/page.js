import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { productCategories } from "@/data/products";
import ProductDetails from "@/components/ProductDetailsModal";
import Image from "next/image";

// Required for static export
export async function generateStaticParams() {
  const params = [];
  
  productCategories.forEach((category) => {
    category.products.forEach((product) => {
      params.push({
        category: category.slug,
        product: product.slug,
      });
    });
  });
  
  return params;
}

export default function ProductPage({ params }) {
  // Find the category first
  const category = productCategories.find(
    (cat) => cat.slug === params.category
  );

  if (!category) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Category not found</h1>
        <Link href="/products" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Products
        </Link>
      </div>
    );
  }

  // Find the product within the category
  const product = category.products.find(
    (p) => p.slug === params.product
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
        <Link href={`/products/${params.category}`} className="text-blue-600 hover:underline mt-4 inline-block">
          Back to {category.name}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-3 pt-10">
      <div className="container mx-auto px-4 ">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
          <Link href="/products" className="hover:text-brand-red">
            Products
          </Link>
          <span>/</span>
          <Link href={`/products/${category.slug}`} className="hover:text-brand-red">
            {category.name}
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          href={`/products/${category.slug}`}
          className="inline-flex items-center text-brand-red hover:underline mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {category.name}
        </Link>

        {/* Product Details Component */}
        <ProductDetails product={product} />

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            More from {category.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products
              .filter(p => p.slug !== product.slug)
              .slice(0, 3)
              .map((relatedProduct) => (
                <div key={relatedProduct.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700">
                    {relatedProduct.images?.[0] || relatedProduct.image ? (
                      <Image
                        src={relatedProduct.images?.[0] || relatedProduct.image}
                        alt={relatedProduct.title || relatedProduct.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">No Image</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {relatedProduct.title || relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    
                    <Link
                      href={`/products/${category.slug}/${relatedProduct.slug}`}
                      className="inline-block bg-brand-red text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200 text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}