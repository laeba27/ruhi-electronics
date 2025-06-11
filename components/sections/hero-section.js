"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";
import { companyInfo } from "@/data/company";
import Image from "next/image";

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full flex items-center justify-center">
    <Image
      src="https://www.crompton.co.in/cdn/shop/collections/Water-Haeter-Top-Banner_371e9bda-4736-4d87-a97b-ae60436021de.webp?v=1710148005"
      // src="/hero.jpg"
      alt="Electrical Products"
      width={1400}
      height={500}
      className="w-full h-auto pt-16 object-contain"
      priority
    />
    {/* Any overlay or text here, as absolute inside this section */}
  </section>
  );
}