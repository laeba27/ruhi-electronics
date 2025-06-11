"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Products',
    href: '/products',
    dropdown: true,
    items: [
      { name: 'All Products', href: '/products' },
      { name: 'Immersion Water Heater', href: '/products/immersion-water-heater' },
      { name: 'Water Immersion Rod', href: '/products/water-immersion-rod' },
      { name: 'Immersion Rod', href: '/products/immersion-rod' },
      { name: 'Immersion Water Heater Rod', href: '/products/immersion-water-heater-rod' },
      { name: 'Immersion Water Rod And Heater', href: '/products/immersion-water-rod-and-heater' },
      { name: 'Room Heater', href: '/products/room-heater' },
      { name: 'Ceiling Fan', href: '/products/ceiling-fan' },
    ]
  },
  {
    name: 'Profile',
    href: '/profile',
    dropdown: true,
    items: [
      { name: 'Profile', href: '/profile'},
      { name: 'Download Brochure', href: '/ruhi-electricals.pdf', newTab: true }
    ]
  },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);

  // Handle scroll event for header class changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle dropdown toggle
  const handleDropdownToggle = (itemName, event) => {
    event.preventDefault();
    event.stopPropagation();
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  // Handle link click to close dropdown and menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  // Toggle mobile menu
  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    setOpenDropdown(null);
  };

  // Handle phone call
  const handlePhoneCall = () => {
    const phoneNumber = "9717809918";
    const message = "Hi, I want to contact you for more information about your products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle email
  const handleEmail = () => {
    const email = "info@ruhi-electricals.com";
    const subject = "Inquiry about Ruhi Electricals Products";
    const body = "Hi, I would like to know more about your products.";
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const headerClasses = cn(
    'fixed w-full z-50 transition-all duration-300',
    {
      'bg-white/95 dark:bg-black/95 shadow-md py-2': scrolled,
      'bg-white dark:bg-black py-4': !scrolled,
    }
  );

  return (
    <header className={headerClasses} ref={headerRef}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-brand-red dark:text-white"
            >
              <span className="text-brand-red">Ruhi</span>
              <span className="text-gray-800 dark:text-white">Electricals</span>
            </motion.div>
          </Link>

          {/* Center: Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 mx-auto">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-base font-medium px-2 xl:px-3 py-2",
                        pathname.startsWith(item.href)
                          ? "text-brand-red"
                          : "text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-white"
                      )}
                      onClick={(e) => handleDropdownToggle(item.name, e)}
                    >
                      {item.name}
                      <ChevronDown 
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          openDropdown === item.name ? "rotate-180" : ""
                        )} 
                      />
                    </Button>
                    
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                        >
                          <div className="py-1">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                target={subItem.newTab ? "_blank" : undefined}
                                rel={subItem.newTab ? "noopener noreferrer" : undefined}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                                onClick={handleLinkClick}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center text-base font-medium px-2 xl:px-3 py-2 rounded-md transition-colors",
                      pathname === item.href
                        ? "text-brand-red"
                        : "text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-white"
                    )}
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Desktop Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <Button 
              size="sm" 
              className="bg-brand-red px-3 xl:px-4 py-2 text-white hover:bg-brand-red/10 border border-brand-red hover:border-brand-red/10 hover:text-brand-red"
              onClick={handlePhoneCall}
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Us
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="border border-brand-red px-3 xl:px-4 py-2 text-brand-red hover:bg-brand-red/10"
              onClick={handleEmail}
            >
              <Mail className="h-4 w-4 mr-2" />
              Email Us
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex flex-col space-y-2 py-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <Button
                          variant="ghost"
                          className={cn(
                            "w-full justify-between text-left px-3 py-2 text-base font-medium rounded-md",
                            pathname.startsWith(item.href)
                              ? "text-brand-red"
                              : "text-gray-700 dark:text-gray-300"
                          )}
                          onClick={(e) => handleDropdownToggle(`mobile-${item.name}`, e)}
                        >
                          {item.name}
                          <ChevronDown 
                            className={cn(
                              "h-4 w-4 transition-transform duration-200",
                              openDropdown === `mobile-${item.name}` ? "rotate-180" : ""
                            )} 
                          />
                        </Button>
                        
                        <AnimatePresence>
                          {openDropdown === `mobile-${item.name}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="ml-4 mt-1 space-y-1 overflow-hidden"
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  target={subItem.newTab ? "_blank" : undefined}
                                  rel={subItem.newTab ? "noopener noreferrer" : undefined}
                                  className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md"
                                  onClick={handleLinkClick}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-2 text-base font-medium rounded-md",
                          pathname === item.href
                            ? "text-brand-red"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                        )}
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Buttons */}
                <div className="flex flex-col space-y-2 px-3 pt-2">
                  <Button 
                    className="w-full bg-brand-red text-white hover:bg-brand-red/10 border border-brand-red hover:border-brand-red/10 hover:text-brand-red"
                    onClick={handlePhoneCall}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                  <Button 
                    variant="outline"
                    className="w-full border border-brand-red text-brand-red hover:bg-brand-red/10"
                    onClick={handleEmail}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Email Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}