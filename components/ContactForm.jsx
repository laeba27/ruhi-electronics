"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { companyInfo } from "@/data/company";
import { productCategories } from "@/data/products";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (value) => {
    setSelectedCategory(productCategories.find(cat => cat.slug === value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");
  
    const formData = new FormData(e.target);
  
    // Prepare data for Web3Forms API
    const data = {
      access_key: "173a6e9e-6404-4660-8381-88f16393fab5",
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject") || `Website Inquiry from ${formData.get("name")}`,
      message: formData.get("message"),
      category: formData.get("category"),
      product: formData.get("product"),
      from_name: "Ruhi Electricals Website",
      replyto: formData.get("email"),
    };
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
  
      if (response.ok && result.success) {
        setSuccessMsg("Message sent successfully! We'll get back to you soon.");
        e.target.reset();
        setSelectedCategory(null);
      } else {
        setErrorMsg("Failed to send message. Please try again later.");
        console.error("Web3Forms error:", result);
      }
    } catch (error) {
      setErrorMsg("An error occurred. Please try again.");
      console.error("Fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          Contact Information
       

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold mb-2 text-gray-800">
                      Your Name
                      <span className="ml-1 text-red-500 text-sm align-super">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold mb-2 text-gray-800">
                      Email Address
                      <span className="ml-1 text-red-500 text-sm align-super">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-base font-semibold mb-2 text-gray-800">
                      Phone Number
                      <span className="ml-1 text-red-500 text-sm align-super">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-base font-semibold mb-2 text-gray-800">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-base font-semibold mb-2 text-gray-800">
                      Product Category
                      <span className="ml-2 text-xs text-red-400 font-normal">(Optional)</span>
                    </label>
                    <Select
                      name="category"
                      onValueChange={handleCategoryChange}
                    >
                      <SelectTrigger className="bg-white border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-xl p-1 max-h-56 overflow-y-auto min-w-[200px]">
                        {productCategories.map((category) => (
                          <SelectItem
                            key={category.slug}
                            value={category.slug}
                            className="px-3 py-2 rounded-md cursor-pointer transition hover:bg-blue-50"
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-base font-semibold mb-2 text-gray-800">
                      Product
                      <span className="ml-2 text-xs text-red-400 font-normal">(Optional)</span>
                    </label>
                    <Select
                      name="product"
                      disabled={!selectedCategory}
                    >
                      <SelectTrigger className="bg-white border border-gray-300 rounded-lg py-2 px-3 shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition disabled:bg-gray-100">
                        <SelectValue placeholder="Select product" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg rounded-xl p-1 max-h-56 overflow-y-auto min-w-[200px]">
                        {selectedCategory?.products.map((product) => (
                          <SelectItem
                            key={product.slug}
                            value={product.title}
                            className="px-3 py-2 rounded-md cursor-pointer transition hover:bg-blue-50"
                          >
                            {product.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-base font-semibold mb-2 text-gray-800">
                    Your Message
                    <span className="ml-1 text-red-500 text-sm align-super">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800"
                  />
                </div>

                {successMsg && (
                  <p className="mb-4 text-green-600 dark:text-green-400">{successMsg}</p>
                )}
                {errorMsg && (
                  <p className="mb-4 text-red-600 dark:text-red-400">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`bg-brand-red hover:bg-brand-darkRed text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  <Send className="mr-2 h-4 w-4" />
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
