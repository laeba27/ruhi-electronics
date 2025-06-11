"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import Image from "next/image";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "",
    product: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (value) => {
    setFormData((prev) => ({ ...prev, category: value, product: "" }));
    setSelectedCategory(productCategories.find((cat) => cat.slug === value));
  };

  const handleProductChange = (value) => {
    setFormData((prev) => ({ ...prev, product: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "173a6e9e-6404-4660-8381-88f16393fab5",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          category: formData.category,
          product: formData.product,
          subject: `🔥 New Contact Form Submission - Ruhi Electricals`,
          from_name: "Ruhi Electricals Website",
          replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          category: "",
          product: "",
        });
        setSelectedCategory(null);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have questions about our products or need a customized solution?
            Contact our team today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="text-green-600 text-2xl font-bold mb-4">
                    ✅ Thank you for your message!
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    We have received your inquiry and will contact you shortly.
                  </p>
                  <Button
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-brand-red hover:bg-brand-darkRed text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-1"
                      >
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-1"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-1"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  {/* Product Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    {/* Product Category */}
                    <div>
                      <label className="block text-base font-semibold mb-2 text-gray-800">
                        Product Category
                        <span className="ml-1 text-red-500 text-sm align-super">
                          *
                        </span>
                        <span className="ml-2 text-xs text-red-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <Select
                        value={formData.category}
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
                              className={`
              px-3 py-2 rounded-md
              cursor-pointer
              transition
              hover:bg-blue-50
              ${
                formData.category === category.slug
                  ? "bg-blue-100 font-semibold"
                  : ""
              }
            `}
                            >
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Product */}
                    <div>
                      <label className="block text-base font-semibold mb-2 text-gray-800">
                        Product
                        <span className="ml-1 text-red-500 text-sm align-super">
                          *
                        </span>
                        <span className="ml-2 text-xs text-red-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <Select
                        value={formData.product}
                        onValueChange={handleProductChange}
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
                              className={`
              px-3 py-2 rounded-md
              cursor-pointer
              transition
              hover:bg-blue-50
              ${
                formData.product === product.title
                  ? "bg-blue-100 font-semibold"
                  : ""
              }
            `}
                            >
                              {product.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-brand-red hover:bg-brand-darkRed text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-brand-red/10 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Address</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.contactInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-brand-red/10 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a
                      href={`mailto:${companyInfo.contactInfo.email}`}
                      className="text-brand-red hover:underline"
                    >
                      {companyInfo.contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-brand-red/10 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <a
                      href={`tel:${companyInfo.contactInfo.phone}`}
                      className="text-brand-red hover:underline"
                    >
                      {companyInfo.contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              {/* IndiaMART Trust Seal */}
              {/* <div className="mt-8">
                <h4 className="font-semibold mb-3">Verified Supplier</h4>
                <a 
                  href="https://www.indiamart.com/ruhielectricals/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://utils.imimg.com/imsrchui/imgs/tbs.png" 
                    alt="IndiaMART Trust Seal" 
                    width="120" 
                    height="36" 
                  />
                </a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
