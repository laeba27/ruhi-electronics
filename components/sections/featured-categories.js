"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { productCategories } from "@/data/products";

export default function FeaturedCategories() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Product Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality electrical products designed for efficiency and durability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/products/${category.slug}`}>
        <div 
          className="group relative h-60 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={category.image} 
              alt={category.name} 
              className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-bold text-white mb-1">{category.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-white/80 text-sm">{category.count} Products</p>
              <motion.div 
                className="bg-brand-red text-white text-xs rounded-full px-2 py-1 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Explore
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}