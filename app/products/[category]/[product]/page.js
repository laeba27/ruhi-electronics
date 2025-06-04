"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Mail, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { productCategories } from "@/data/products";

export default function ProductPage() {
  const params = useParams();
  const { category: categorySlug, product: productSlug } = params;
  
  // Find the category and product
  const category = productCategories.find(cat => cat.slug === categorySlug);
  const product = category ? category.products.find(prod => prod.slug === productSlug) : null;

  // State for inquiry form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "1",
    message: ""
  });
  
  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, this would send the data to a server
    // For now, we'll just open the email client
    const subject = encodeURIComponent(`Inquiry about ${product.title}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nQuantity: ${formData.quantity}\n\n${formData.message}`
    );
    window.location.href = `mailto:info@ruhielectricals.com?subject=${subject}&body=${body}`;
  };
  
  // If product doesn't exist, show error
  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-16 container mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm">
          <Link href="/" className="text-gray-500 hover:text-brand-red">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/products" className="text-gray-500 hover:text-brand-red">Products</Link>
          <span className="mx-2">/</span>
          <Link href={`/products/${categorySlug}`} className="text-gray-500 hover:text-brand-red">{category.name}</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 dark:text-gray-300">{product.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-brand-red mr-2">₹{product.price}</span>
              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm px-2 py-1 rounded">
                {category.name}
              </span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {product.description}
            </p>
            
            <Tabs defaultValue="specifications" className="mb-8">
              <TabsList>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="mt-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <ul className="space-y-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <li key={key} className="flex justify-between">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-gray-700 dark:text-gray-300">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="mt-4">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                      <span>Energy-efficient design for lower electricity consumption</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                      <span>High-quality materials for extended product life</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                      <span>Safety features to prevent electrical hazards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-red mr-2 mt-0.5" />
                      <span>1-year manufacturer warranty</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Send Inquiry Form */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Mail className="h-5 w-5 mr-2 text-brand-red" />
                Send Inquiry
              </h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-1">
                      Quantity
                    </label>
                    <select
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                    >
                      {[1, 5, 10, 25, 50, 100, "Other"].map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your specific requirements..."
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brand-red hover:bg-brand-darkRed text-white"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Inquiry
                </Button>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-start">
                  <AlertCircle className="h-4 w-4 mr-1 mt-0.5" />
                  Your inquiry will be sent directly to our sales team who will get back to you shortly.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}