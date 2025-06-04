"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Electrical Products" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
  <div className="max-w-3xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
        <span className="text-brand-red">Reliable. Affordable. Powerful.</span> Your Trusted Partner for Quality Home Electricals.
      </h1>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4 text-justify sm:text-left">
        Ruhi Electricals delivers high-quality, energy-efficient electrical solutions built for reliability and performance.
        From Immersion Water Heaters to Ceiling Fans and Room Heaters, we offer durable products trusted by thousands across India since {companyInfo.foundedYear}.
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="flex flex-col sm:flex-row gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        whileFocus={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Button 
          size="lg" 
          className="bg-brand-red px-4 py-2 hover:bg-brand-darkRed text-white w-full"
          onClick={() => window.location.href = "/products"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Explore Products
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>

      <Button 
        size="lg" 
        variant="outline" 
        className="bg-white/10 px-4 py-2 backdrop-blur-sm hover:bg-white/20 text-white border-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.location.href = `mailto:${companyInfo.contactInfo.email}`}
      >
        <motion.div 
          className="flex items-center"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Mail className="mr-2 h-5 w-5" />
          Contact Us
        </motion.div>
      </Button>
    </motion.div>
  </div>
</div>

    </section>
  );
}