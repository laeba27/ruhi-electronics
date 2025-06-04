"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about Ruhi Electricals products.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-brand-red text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Our Quality Products</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join our satisfied customers and discover why Ruhi Electricals is a trusted name in the electrical products industry.
          </p>
          <div className="flex justify-center">
            <motion.button
              className="bg-white text-brand-red font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = "/products"}
            >
              Browse Our Products
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-8"
    >
      {/* Rating Stars */}
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-brand-red text-brand-red mr-1" />
        ))}
        {[...Array(5 - testimonial.rating)].map((_, i) => (
          <Star key={i + testimonial.rating} className="h-5 w-5 text-gray-300 mr-1" />
        ))}
      </div>
      
      {/* Testimonial Content */}
      <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
        "{testimonial.content}"
      </blockquote>
      
      {/* Client Information */}
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}