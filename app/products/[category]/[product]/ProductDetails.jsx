"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  ShieldCheck,
  Package,
  Clock,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export default function ProductDetails({ product, categorySlug }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatKey = (key) =>
    key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());

  return (
    <div className="bg-gray-50/50 dark:bg-gray-900/50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href={`/products/${categorySlug}`}
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-red dark:hover:text-brand-red-light transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          Back to{" "}
          {categorySlug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Product Images */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border">
              <Image
                src={product.images?.[currentImageIndex] || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
            {product.images?.length > 1 && (
              <div className="grid grid-cols-5 gap-3">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-200 ring-offset-2 dark:ring-offset-gray-900 ${
                      index === currentImageIndex
                        ? "border-brand-red ring-2 ring-brand-red"
                        : "border-gray-200 dark:border-gray-700 hover:border-brand-red"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} - Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="15vw"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Details */}
          <div className="flex flex-col">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                {product.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4">
                <p className="text-3xl font-bold text-brand-red">
                  ₹{product.price}
                </p>
                {product.minOrderQuantity && (
                  <Badge variant="outline" className="text-sm py-1 px-3">
                    MOQ: {product.minOrderQuantity} units
                  </Badge>
                )}
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {product.specifications?.brand && (
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-300">
                    Brand: {product.specifications.brand}
                  </Badge>
                )}
                {product.specifications?.warranty && (
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-300">
                     <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
                    {product.specifications.warranty}
                  </Badge>
                )}
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {product.description}
              </p>

              <div className="pt-4">
                 <Button
                    size="lg"
                    className="w-full md:w-auto bg-brand-red hover:bg-brand-darkRed text-white font-bold text-lg py-6 px-8 shadow-lg hover:shadow-xl transition-shadow"
                    onClick={() => {
                        const subject = encodeURIComponent(`Inquiry about ${product.title}`);
                        const body = encodeURIComponent(
                        `Hi Ruhi Electricals,\n\nI'm interested in learning more about the ${product.title} (Item Code: ${product.Additional_Information?.itemCode || 'N/A'}). Please provide me with more information.\n\nThank you.`
                        );
                        window.location.href = `mailto:info@ruhielectricals.com?subject=${subject}&body=${body}`;
                    }}
                    >
                    Send Inquiry
                </Button>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full mt-8" defaultValue="item-1">
                 {product.keyFeatures && product.keyFeatures.length > 0 && (
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-semibold">Key Features</AccordionTrigger>
                    <AccordionContent>
                        <ul className="space-y-4 pl-4">
                        {product.keyFeatures.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <CheckCircle className="w-5 h-5 mr-3 mt-1 text-green-500 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">{feature.heading}</h4>
                                    <p className="text-gray-600 dark:text-gray-400">{feature.content}</p>
                                </div>
                            </li>
                        ))}
                        </ul>
                    </AccordionContent>
                  </AccordionItem>
                )}

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">Specifications</AccordionTrigger>
                <AccordionContent>
                  <Card className="border-none shadow-none">
                    <CardContent className="p-2">
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {Object.entries(product.specifications).map(([key, value]) =>
                          value && (
                            <div key={key} className="flex justify-between border-b pb-2">
                              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{formatKey(key)}</dt>
                              <dd className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-right">{String(value)}</dd>
                            </div>
                          )
                        )}
                      </dl>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
              
               {product.important_information && (
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-semibold">Important Information</AccordionTrigger>
                    <AccordionContent>
                    <div className="prose prose-sm max-w-none text-gray-600 dark:text-gray-300">
                        <p>{product.important_information}</p>
                    </div>
                    </AccordionContent>
                </AccordionItem>
               )}

              {product.Additional_Information && (
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold">Additional Information</AccordionTrigger>
                  <AccordionContent>
                     <Card>
                      <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div className="flex items-start">
                           <Package className="w-5 h-5 mr-3 mt-1 text-brand-red flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-500">Item Code</p>
                                <p className="font-semibold">{product.Additional_Information.itemCode}</p>
                            </div>
                         </div>
                         <div className="flex items-start">
                           <CheckCircle className="w-5 h-5 mr-3 mt-1 text-brand-red flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-500">Production Capacity</p>
                                <p className="font-semibold">{product.Additional_Information.productionCapacity}</p>
                            </div>
                         </div>
                         <div className="flex items-start">
                           <Clock className="w-5 h-5 mr-3 mt-1 text-brand-red flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-500">Delivery Time</p>
                                <p className="font-semibold">{product.Additional_Information.deliveryTime}</p>
                            </div>
                         </div>
                         <div className="flex items-start">
                           <Info className="w-5 h-5 mr-3 mt-1 text-brand-red flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-gray-500">Packaging Details</p>
                                <p className="font-semibold">{product.Additional_Information.packagingDetails}</p>
                            </div>
                         </div>
                      </CardContent>
                     </Card>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
