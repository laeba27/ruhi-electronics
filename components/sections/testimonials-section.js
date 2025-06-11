"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from businesses that rely on our products every day.
          </p>
        </motion.div>

        <div className="relative max-w-7xl mx-auto">
          {/* Testimonial Cards */}
          <div 
            className="overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-6">
              <AnimatePresence mode="wait">
                {[0, 1, 2].map((offset) => {
                  const index = (activeIndex + offset) % testimonials.length;
                  return (
                    <motion.div
                      key={`${activeIndex}-${offset}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex-1 min-w-[300px] bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                    >
                      {/* Rating Stars */}
                      <div className="flex mb-4">
                        {[...Array(testimonials[index].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-brand-red text-brand-red mr-1" />
                        ))}
                      </div>
                      
                      {/* Testimonial Content */}
                      <p className="text-base text-gray-700 dark:text-gray-300 mb-6 italic line-clamp-4">
                        "{testimonials[index].content}"
                      </p>
                      
                      {/* Client Information */}
                      <div className="flex items-center">
                        <div className="mr-4">
                          <img 
                            src={testimonials[index].avatar} 
                            alt={testimonials[index].name}
                            className="w-12 h-12 rounded-full object-cover" 
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">{testimonials[index].name}</h4>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {testimonials[index].role}, {testimonials[index].company}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-brand-red" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-brand-red" />
          </button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === activeIndex ? "bg-brand-red" : "bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}