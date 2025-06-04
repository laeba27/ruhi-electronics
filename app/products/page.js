'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { productCategories } from '@/data/products';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsPage() {
  const [imageIndexes, setImageIndexes] = useState({}); // ✅ JS syntax

  const handlePrev = (categoryId, total) => {
    setImageIndexes((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] || 0) === 0 ? total - 1 : (prev[categoryId] || 0) - 1,
    }));
  };

  const handleNext = (categoryId, total) => {
    setImageIndexes((prev) => ({
      ...prev,
      [categoryId]: (prev[categoryId] || 0) === total - 1 ? 0 : (prev[categoryId] || 0) + 1,
    }));
  };
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality electrical products designed for efficiency, durability, and performance.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => {
            const currentIndex = imageIndexes[category.id] || 0;
            const images = Array.isArray(category.image) ? category.image : [category.image];

            return (
              <Link href={`/products/${category.slug}`} key={category.id}>
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48 w-full">
                    <Image
                      src={images[currentIndex]}
                      alt={category.name}
                      fill
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Navigation Buttons */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handlePrev(category.id, images.length);
                          }}
                          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-black/40 text-white rounded-full p-1"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleNext(category.id, images.length);
                          }}
                          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-black/40 text-white rounded-full p-1"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}

                    <div className="absolute top-0 right-0 bg-brand-red text-white text-sm font-bold m-2 px-2 py-1 rounded">
                      {category.count} Products
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-2">{category.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      High-quality {category.name.toLowerCase()} products engineered for efficiency and durability.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-brand-red font-medium">View Products</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
