"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
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
      { name: 'Testimonial', href: '/testimonial' },
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerClasses = cn(
    'fixed w-full z-50 transition-all duration-300',
    {
      'bg-white/95 dark:bg-black/95 shadow-md py-2': scrolled,
      'bg-white dark:bg-black py-4': !scrolled,
    }
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-2xl font-bold text-brand-red dark:text-white"
            >
              <span className="text-brand-red">Ruhi</span>
              <span className="text-gray-800 dark:text-white">Electricals</span>
            </motion.div>
          </Link>

          {/* Center: Nav */}
          <nav className="hidden md:flex items-center space-x-6 mx-auto">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <Button
                      variant="ghost"
                      className={cn(
                        "text-base font-medium px-3 py-2",
                        pathname.startsWith(item.href)
                          ? "text-brand-red"
                          : "text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-white"
                      )}
                      onClick={() =>
                        setOpenDropdown(openDropdown === item.name ? null : item.name)
                      }
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-0 mt-1 w-64 rounded-md bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              target={subItem.newTab ? "_blank" : undefined}
                              rel={subItem.newTab ? "noopener noreferrer" : undefined}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "inline-flex items-center text-base font-medium px-3 py-2 rounded-md transition-colors",
                      pathname === item.href
                        ? "text-brand-red"
                        : "text-gray-700 dark:text-gray-300 hover:text-brand-red dark:hover:text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button size="sm" className="bg-brand-red px-4 py-2 text-white hover:bg-brand-red/10 border border-brand-red hover:border-brand-red/10 hover:text-brand-red">
              Call Request
            </Button>
            <Button variant="outline" size="sm" className="border border-brand-red px-4 py-2 text-brand-red hover:bg-brand-red/10">
              Send Email
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 py-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-base font-medium rounded-md",
                      pathname === item.href
                        ? "text-brand-red"
                        : "text-gray-700 dark:text-gray-300"
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && item.items && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
                          target={subItem.newTab ? "_blank" : undefined}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
}
