"use client";

import { Phone, Mail, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetails({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!product) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
          company: formData.company,
          website: formData.website,
          message: formData.message,
          product: product.title,
          image: product.images?.[0] || product.image,
          specifications: product.specifications,
          description: product.description,
          subject: `🔥 New Product Inquiry: ${product.title} - Ruhi Electricals`,
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
          company: "",
          website: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnquiry = () => {
    const whatsappMessage = `🔥 *Product Inquiry*

*Product:* ${product.title}
*Description:* ${product.description}

*Specifications:*
${product.specifications ? Object.entries(product.specifications).map(([key, value]) => `• *${key}:* ${value}`).join('\n') : 'Not available'}

*Customer Details:*
• *Name:* ${formData.name || 'Not provided'}
• *Email:* ${formData.email || 'Not provided'}
• *Phone:* ${formData.phone || 'Not provided'}

I'm interested in this product. Please provide more details.`;
    
    const phoneNumber = "+919876543210";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-white rounded-xl shadow-lg w-full relative overflow-hidden">
      {!showContactForm ? (
        // Product Details Page
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Image Gallery */}
          <div className="w-full lg:w-2/4 bg-gray-50 p-4 lg:p-6 flex flex-col">
            {/* Main Image */}
            <div className="relative aspect-square lg:aspect-auto lg:flex-1 rounded-lg overflow-hidden mb-4">
              <Image
                src={product.images?.[currentImageIndex] || product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Thumbnail Row */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.slice(0, 6).map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 ${
                      idx === currentImageIndex ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 flex flex-col">
            {/* Header Section */}
            <div className="p-4 lg:p-6 border-b">
              <h1 className="text-xl lg:text-2xl font-bold mb-2">{product.title}</h1>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
              
              
              {/* Supplier Info & Price Row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="secondary" className="bg-green-100 p-2 text-green-800">
                    <Shield className="h-3 w-3 mr-1" />
                    TrustSEAL Verified
                  </Badge>
                  <Badge variant="outline" className="text-blue-600 p-2 border-blue-200">
                    <Award className="h-3 w-3 mr-1" />
                    Leading Supplier
                  </Badge>
                </div>
                <div className="flex flex-col sm:items-end gap-1">
                  <div className="text-xl lg:text-2xl font-bold text-red-600">₹{product.price}</div>
                  <div className="text-sm text-gray-500">MOQ: {product.minOrderQuantity}</div>
                </div>
              </div>
            </div>
             {/* Action Buttons */}
             <div className="p-4 lg:p-6 border-t bg-gray-50">
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => setShowContactForm(true)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Supplier
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50"
                  onClick={handleEnquiry}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Quick Enquiry
                </Button>
              </div>
            </div>

            {/* Specifications Section */}
            <div className="flex-1 p-4 lg:p-6">
              {product.specifications ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Product Specifications</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-1 max-h-[300px] lg:max-h-[400px] overflow-y-auto pr-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-gray-100 last:border-b-0">
                          <span className="font-medium text-gray-700 capitalize mb-1 sm:mb-0">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                          <span className="text-gray-900 font-medium text-right">
                            {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="h-full flex items-center justify-center">
                  <CardContent>
                    <p className="text-gray-500 text-center">No specifications available</p>
                  </CardContent>
                </Card>
              )}
            </div>

           
          </div>
        </div>
      ) : (
        // Contact Form Page
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Product Summary */}
          <div className="w-full lg:w-2/5 bg-gray-50 p-4 lg:p-6">
            <Card className="h-full flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle className="text-lg">Product Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
                    <Image
                      src={product.images?.[0] || product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-base">{product.title}</h3>
                    {product.description && (
                      <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                        {product.description}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Price:</span>
                      <span className="font-medium">₹{product.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minimum Order:</span>
                      <span className="font-medium">{product.minOrderQuantity} units</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Right Side: Contact Form */}
          <div className="flex-1 p-4 lg:p-6 overflow-y-auto bg-white">
            {submitSuccess ? (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center h-full flex flex-col justify-center">
                  <div className="text-green-600 text-2xl font-bold">
                    ✅ Thank you for your inquiry!
                  </div>
                  <p className="text-gray-600">
                    We have received your message and will contact you shortly.
                  </p>
                  <Button onClick={() => setShowContactForm(false)} className="bg-red-600 hover:bg-red-700 text-white">
                    Back to Product
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex flex-col justify-evenly">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <p className="text-sm text-gray-600">Supplier wants to know more about you</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name*</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address*</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number*</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="website">Website URL</Label>
                      <Input
                        id="website"
                        name="website"
                        type="url"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="www.yourcompany.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Any specific requirements or questions..."
                        rows={4}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowContactForm(false)}
                        className="w-full"
                      >
                        Back to Product
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                      >
                        {isSubmitting ? "Submitting..." : "Send Inquiry"}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  );
}