"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import ProductDetailsModal from "./ProductDetailsModal";

export default function ProductCard({ product, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const images = product.images || [product.image];

  const nextImage = () => {
    setImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleViewDetails = () => {
    console.log("View Details clicked for product:", product.title);
    setModalOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="h-full"
      >
        <Card
          className="h-full flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={images[imageIndex]}
              alt={product.title}
              fill
              className="object-cover transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 33vw"
            />

            <div className="absolute top-3 left-3 bg-white text-brand-red text-sm font-semibold px-3 py-1 rounded shadow-sm">
              ₹{product.price}
            </div>

            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow hover:bg-white"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}
          </div>

          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
              {product.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="p-4 pt-0 flex-1">
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
              {product.description}
            </p>
          </CardContent>

          <CardFooter className="p-4 pt-3 mt-auto flex justify-between items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleViewDetails}
              className="text-sm text-brand-red hover:text-brand-darkRed hover:bg-red-50"
            >
              View Details
            </Button>

            <Button
              size="sm"
              className="bg-brand-red hover:bg-brand-darkRed text-white text-xs px-4 py-2"
              onClick={() => {
                const subject = encodeURIComponent(`Inquiry about ${product.title}`);
                const body = encodeURIComponent(
                  `Hi Ruhi Electricals,\n\nI'm interested in learning more about the ${product.title}. Please provide me with more information.\n\nThank you.`
                );
                window.location.href = `mailto:info@ruhielectricals.com?subject=${subject}&body=${body}`;
              }}
            >
              Send Inquiry
            </Button>
          </CardFooter>
        </Card>
      </motion.div>

      <ProductDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        product={product}
      />
    </>
  );
}
