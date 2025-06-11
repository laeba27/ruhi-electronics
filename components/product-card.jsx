"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product, categorySlug, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card 
        className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={product.image} 
            alt={product.title} 
            className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute top-3 right-3 bg-brand-red text-white text-xs font-bold px-2 py-1 rounded">
            ₹{product.price}
          </div>
        </div>
        
        <CardHeader className="p-4">
          <CardTitle className="text-lg">{product.title}</CardTitle>
        </CardHeader>
        
        <CardContent className="p-4 pt-0">
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{product.description}</p>
        </CardContent>
        
        <CardFooter className="p-4 pt-0 flex justify-between">
          <Link 
            href={`/products/${categorySlug}/${product.slug}`}
            className="text-brand-red font-medium flex items-center hover:underline"
          >
            View Details
            <motion.span 
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight className="ml-1 h-4 w-4" />
            </motion.span>
          </Link>
          
          <Button
            size="sm"
            className="bg-brand-red hover:bg-brand-darkRed text-white"
            onClick={() => {
              const subject = encodeURIComponent(`Inquiry about ${product.title}`);
              const body = encodeURIComponent(`Hi Ruhi Electricals,\n\nI'm interested in learning more about the ${product.title}. Please provide me with more information.\n\nThank you.`);
              window.location.href = `mailto:info@ruhielectricals.com?subject=${subject}&body=${body}`;
            }}
          >
            Send Inquiry
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}