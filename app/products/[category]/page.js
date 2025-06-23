import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { productCategories } from "@/data/products";
import Image from "next/image";

// Required for static export
export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

export default function CategoryPage({ params }) {
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

  return (
    <div className="min-h-screen p-4">
      <div className="bg-gray-50 dark:bg-gray-800 pt-20">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {category.products.map((product, index) => (
            <div key={product.id} className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col">
              {/* Product Image */}
              <div className="relative aspect-w-16 aspect-h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                {product.images && product.images.length > 0 ? (
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    width={50}
                    height={80}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-56 bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 bg-gray-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-gray-500 text-sm">No Image</span>
                    </div>
                  </div>
                )}
                
                {/* Price Badge */}
                {product.price && (
                  <div className="absolute top-4 right-4 bg-brand-red text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    ₹{product.price}
                  </div>
                )}
                
                {/* ISI Certified Badge */}
                {product.specifications?.isiCertified && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg">
                    ISI Certified
                  </div>
                )}
              </div>
              
              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white line-clamp-2 group-hover:text-brand-red transition-colors duration-200">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Key Specifications */}
                <div className="space-y-2 mb-4">
                  {/* {product.specifications?.power && (
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-brand-red rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Power: {product.specifications.power}</span>
                    </div>
                  )} */}
                  {product.specifications?.material && (
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-brand-red rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Material: {product.specifications.material}</span>
                    </div>
                  )}
                  {product.specifications?.warranty && (
                    <div className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      <span className="text-gray-700 dark:text-gray-300">Warranty: {product.specifications.warranty}</span>
                    </div>
                  )}
                </div>
                
                {/* Minimum Order Quantity */}
                {product.minOrderQuantity && (
                  <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg mb-4">
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Min. Order: {product.minOrderQuantity} units
                    </span>
                  </div>
                )}
                
                <Link
                  href={`/products/${category.slug}/${product.slug}`}
                  className="block w-full bg-gradient-to-r from-brand-red to-red-600 text-white py-3 px-6 rounded-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 text-center font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 mt-auto"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {category.products.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No Products Available</h3>
            <p className="text-gray-600 dark:text-gray-400">Check back later for new products in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}