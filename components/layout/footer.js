import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { companyInfo } from '@/data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ruhi Electricals</h3>
            <p className="text-gray-300 mb-4">
              Manufacturer of high-quality electrical products since {companyInfo.foundedYear}.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href={companyInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href={companyInfo.socialMedia.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href={companyInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href={companyInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/testimonial" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products/immersion-water-heater" className="text-gray-300 hover:text-white transition-colors">Immersion Water Heater</Link></li>
              <li><Link href="/products/water-immersion-rod" className="text-gray-300 hover:text-white transition-colors">Water Immersion Rod</Link></li>
              <li><Link href="/products/room-heater" className="text-gray-300 hover:text-white transition-colors">Room Heater</Link></li>
              <li><Link href="/products/ceiling-fan" className="text-gray-300 hover:text-white transition-colors">Ceiling Fan</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">View All Products</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                <span className="text-gray-300">{companyInfo.contactInfo.address}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-red mr-2" />
                <a href={`tel:${companyInfo.contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {companyInfo.contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-red mr-2" />
                <a href={`mailto:${companyInfo.contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {companyInfo.contactInfo.email}
                </a>
              </div>
            </div>
            
            {/* IndiaMART Trust Seal */}
            {/* <div className="mt-6">
              <a 
                href="https://www.indiamart.com/ruhielectricals/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://utils.imimg.com/imsrchui/imgs/tbs.png" 
                  alt="IndiaMART Trust Seal" 
                  width="120" 
                  height="36" 
                  className="border border-gray-700 rounded"
                />
              </a>
            </div> */}
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Ruhi Electricals. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}