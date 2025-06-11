"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProductDetails({ product, categorySlug }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        href={`/products/${categorySlug}`}
        className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to {categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.images?.[currentImageIndex] || product.image}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
                    index === currentImageIndex ? "border-brand-red" : "border-transparent"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${product.title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 25vw, 12vw"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-2xl font-semibold text-brand-red mt-2">₹{product.price}</p>
          </div>

          <Separator />

          <div>
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>

          {product.specifications && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Specifications</h2>
              <Card>
                <CardContent className="p-4">
                  <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      value && (
                        <div key={key} className="flex flex-col">
                          <dt className="text-sm font-medium text-gray-500">
                            {key.split(/(?=[A-Z])/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </dt>
                          <dd className="text-sm text-gray-900">{value}</dd>
                        </div>
                      )
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </div>
          )}

          {product.minOrderQuantity && (
            <div>
              <h2 className="text-xl font-semibold mb-2">Order Information</h2>
              <p className="text-gray-600">Minimum Order Quantity: {product.minOrderQuantity} units</p>
            </div>
          )}

          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-brand-red hover:bg-brand-darkRed text-white"
              onClick={() => {
                const subject = encodeURIComponent(`Inquiry about ${product.title}`);
                const body = encodeURIComponent(`Hi Ruhi Electricals,\n\nI'm interested in learning more about the ${product.title}. Please provide me with more information.\n\nThank you.`);
                window.location.href = `mailto:info@ruhielectricals.com?subject=${subject}&body=${body}`;
              }}
            >
              Send Inquiry
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 