import HeroSection from '@/components/sections/hero-section';
import ProductHighlights from '@/components/sections/product-highlights';
import AboutSection from '@/components/sections/about-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';
import FeaturedCategories from '@/components/sections/featured-categories';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <ProductHighlights />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}