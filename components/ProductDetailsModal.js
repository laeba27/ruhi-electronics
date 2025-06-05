"use client";

import { Dialog } from "@headlessui/react";
import { X, Plus, Minus, Phone, Mail, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

export default function ProductDetailsModal({ open, onClose, product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("pieces");
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

  const handleQuantityChange = (operation) => {
    if (operation === "increase") {
      setQuantity(prev => prev + 1);
    } else if (operation === "decrease" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const createProfessionalEmailBody = () => {
    const totalAmount = (product.price * quantity).toLocaleString();
    const productImage = product.images?.[0] || product.image || '';
    
//     return `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Product Inquiry - ${product.title}</title>
//     <style>
//         body { margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; }
//         .container { max-width: 700px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
//         .header { background: linear-gradient(135deg, #dc2626, #ef4444); color: white; padding: 30px; text-align: center; }
//         .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
//         .header p { margin: 10px 0 0; opacity: 0.9; font-size: 16px; }
//         .content { padding: 30px; }
//         .product-section { background: #f8fafc; border-left: 4px solid #dc2626; padding: 25px; margin: 20px 0; border-radius: 8px; }
//         .product-title { color: #1e293b; font-size: 24px; font-weight: 600; margin: 0 0 15px; }
//         .product-image { width: 100%; max-width: 400px; height: 250px; object-fit: cover; border-radius: 8px; margin: 15px 0; display: block; }
//         .specs-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
//         .spec-item { background: white; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; }
//         .spec-label { font-weight: 600; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; }
//         .spec-value { color: #1e293b; font-size: 16px; font-weight: 500; margin-top: 5px; }
//         .customer-section { margin: 30px 0; padding: 25px; background: #fefefe; border: 1px solid #e2e8f0; border-radius: 8px; }
//         .section-title { color: #1e293b; font-size: 20px; font-weight: 600; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #dc2626; }
//         .customer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
//         .customer-item { }
//         .customer-label { font-weight: 600; color: #64748b; font-size: 14px; }
//         .customer-value { color: #1e293b; font-size: 16px; margin-top: 5px; }
//         .order-summary { background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 25px; border-radius: 8px; margin: 20px 0; border: 1px solid #f59e0b; }
//         .total-amount { font-size: 24px; font-weight: 700; color: #dc2626; text-align: center; margin: 15px 0; }
//         .footer { background: #1e293b; color: white; padding: 25px; text-align: center; }
//         .footer p { margin: 5px 0; opacity: 0.8; }
//         .highlight { background: #fef2f2; padding: 3px 8px; border-radius: 4px; color: #dc2626; font-weight: 500; }
//         @media (max-width: 600px) {
//             .specs-grid, .customer-grid { grid-template-columns: 1fr; }
//             .content { padding: 20px; }
//         }
//     </style>
// </head>
// <body>
//     <div class="container">
//         <div class="header">
//             <h1>🔥 New Product Inquiry</h1>
//             <p>A customer is interested in your products</p>
//         </div>
        
//         <div class="content">
//             <div class="product-section">
//                 <h2 class="product-title">${product.title}</h2>
//                 ${productImage ? `<img src="${productImage}" alt="${product.title}" class="product-image" onerror="this.style.display='none'">` : ''}
//                 <p style="color: #64748b; line-height: 1.6; margin: 15px 0;">${product.description || 'No description available'}</p>
                
//                 <div class="specs-grid">
//                     ${product.specifications ? Object.entries(product.specifications).map(([key, value]) => `
//                         <div class="spec-item">
//                             <div class="spec-label">${key.replace(/([A-Z])/g, " $1").toUpperCase()}</div>
//                             <div class="spec-value">${typeof value === "boolean" ? (value ? "Yes" : "No") : value}</div>
//                         </div>
//                     `).join('') : '<div class="spec-item"><div class="spec-value">No specifications available</div></div>'}
//                 </div>
//             </div>

//             <div class="customer-section">
//                 <h3 class="section-title">👤 Customer Information</h3>
//                 <div class="customer-grid">
//                     <div class="customer-item">
//                         <div class="customer-label">Full Name</div>
//                         <div class="customer-value">${formData.name}</div>
//                     </div>
//                     <div class="customer-item">
//                         <div class="customer-label">Email Address</div>
//                         <div class="customer-value">${formData.email}</div>
//                     </div>
//                     <div class="customer-item">
//                         <div class="customer-label">Phone Number</div>
//                         <div class="customer-value">${formData.phone || 'Not provided'}</div>
//                     </div>
//                     <div class="customer-item">
//                         <div class="customer-label">Company</div>
//                         <div class="customer-value">${formData.company || 'Not provided'}</div>
//                     </div>
//                 </div>
//                 ${formData.website ? `
//                     <div style="margin-top: 15px;">
//                         <div class="customer-label">Website</div>
//                         <div class="customer-value"><a href="${formData.website}" style="color: #dc2626;">${formData.website}</a></div>
//                     </div>
//                 ` : ''}
//                 ${formData.message ? `
//                     <div style="margin-top: 20px;">
//                         <div class="customer-label">Message</div>
//                         <div style="background: white; padding: 15px; border-radius: 6px; border-left: 3px solid #dc2626; margin-top: 8px; font-style: italic; color: #1e293b;">
//                             "${formData.message}"
//                         </div>
//                     </div>
//                 ` : ''}
//             </div>

//             <div class="order-summary">
//                 <h3 style="margin: 0 0 15px; color: #92400e; text-align: center;">📦 Order Summary</h3>
//                 <div style="display: flex; justify-content: space-between; margin: 10px 0;">
//                     <span>Quantity Requested:</span>
//                     <span class="highlight">${quantity} ${unit}</span>
//                 </div>
//                 <div style="display: flex; justify-content: space-between; margin: 10px 0;">
//                     <span>Unit Price:</span>
//                     <span class="highlight">₹${product.price}</span>
//                 </div>
//                 <hr style="border: none; border-top: 1px dashed #f59e0b; margin: 15px 0;">
//                 <div class="total-amount">
//                     💰 Total Estimated Value: ₹${totalAmount}
//                 </div>
//             </div>
//         </div>

//         <div class="footer">
//             <p><strong>Ruhi Electricals</strong></p>
//             <p>📧 Respond to this inquiry promptly to convert this lead!</p>
//             <p style="font-size: 12px; margin-top: 15px;">Generated on ${new Date().toLocaleDateString('en-IN', { 
//                 year: 'numeric', 
//                 month: 'long', 
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//             })}</p>
//         </div>
//     </div>
// </body>
// </html>`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailBody = createProfessionalEmailBody();

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
          quantity: `${quantity} ${unit}`,
          price: `₹${product.price}`,
          total_amount: `₹${(product.price * quantity).toLocaleString()}`,
          subject: `🔥 New Product Inquiry: ${product.title} - Ruhi Electricals`,
          from_name: "Ruhi Electricals Website",
          replyto: formData.email,
          // email_body: emailBody
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

*Order Details:*
• *Quantity:* ${quantity} ${unit}
• *Unit Price:* ₹${product.price}
• *Total Value:* ₹${(product.price * quantity).toLocaleString()}

*Customer Details:*
• *Name:* ${formData.name || 'Not provided'}
• *Email:* ${formData.email || 'Not provided'}
• *Phone:* ${formData.phone || 'Not provided'}

I'm interested in this product. Please provide more details.`;
    
    const phoneNumber = "+919876543210";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  const resetModal = () => {
    setShowContactForm(false);
    setSubmitSuccess(false);
    setQuantity(1);
    setUnit("pieces");
    setCurrentImageIndex(0);
  };

  const handleClose = () => {
    resetModal();
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} className="fixed z-50 inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-6xl w-full relative overflow-hidden h-[85vh]">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10 bg-white rounded-full p-1 shadow-md"
        >
          <X className="h-5 w-5" />
        </button>

        {!showContactForm ? (
          // Product Details Page
          <div className="flex h-full">
            {/* Left Side: Image Gallery */}
            <div className="w-2/4 bg-gray-50 p-6 flex flex-col">
              {/* Main Image */}
              <div className="relative flex-1 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.images?.[currentImageIndex] || product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Thumbnail Row */}
              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto">
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
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
                
                {/* Supplier Info & Price Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-green-100 p-2 text-green-800">
                      <Shield className="h-3 w-3 mr-1" />
                      TrustSEAL Verified
                    </Badge>
                    <Badge variant="outline" className="text-blue-600 p-2 border-blue-200">
                      <Award className="h-3 w-3 mr-1" />
                      Leading Supplier
                    </Badge>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <div className="text-2xl font-bold text-red-600">₹{product.price}</div>
                    <div className="text-sm text-gray-500">MOQ: {product.minOrderQuantity}</div>
                  </div>
                </div>
              </div>

              {/* Content Area with Tabs */}
              <div className="flex-1 p-2 overflow-hidden">
                <Tabs defaultValue="order" className="h-full flex flex-col">
                  <TabsList className="grid w-full grid-cols-2 mb-1">
                    <TabsTrigger className="hover:bg-red-100 p-2 rounded-lg hover:text-red-600" value="order">Order Configuration</TabsTrigger>
                    <TabsTrigger className="hover:bg-red-100 p-2 rounded-lg hover:text-red-600" value="specs">Specifications</TabsTrigger>
                  </TabsList>

                  <TabsContent value="order" className="flex-1 space-y-4">
                    <Card>
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg">Configure Your Order</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Unit Selection */}
                        <RadioGroup
                          value={unit}
                          onValueChange={setUnit}
                          className="flex gap-3"
                        >
                          {["pieces", "box"].map((item) => (
                            <Label
                              key={item}
                              htmlFor={item}
                              className={`px-4 py-2 rounded-md border text-sm cursor-pointer transition-all ${
                                unit === item
                                  ? "bg-red-100 text-brand-red border-brand-red"
                                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                              }`}
                            >
                              <RadioGroupItem value={item} id={item} className="sr-only" />
                              {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Label>
                          ))}
                        </RadioGroup>

                        <Separator />

                        {/* Quantity Selection */}
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Quantity</Label>
                          <div className="flex items-center gap-3">
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange("decrease")}
                              disabled={quantity <= 1}
                              className="h-9 w-9"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>

                            <Input
                              type="number"
                              value={quantity}
                              onChange={(e) =>
                                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                              }
                              min="1"
                              className="w-20 text-center text-sm"
                            />

                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleQuantityChange("increase")}
                              className="h-9 w-9"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>

                            <span className="text-sm text-gray-500 ml-2">{unit}</span>
                          </div>
                        </div>

                        {/* Total Display */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="text-lg font-medium">Total Amount:</span>
                            <span className="text-2xl font-bold text-red-600">
                              ₹{(product.price * quantity).toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="specs" className="flex-1 space-y-4">
                    {product.specifications ? (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Product Specifications</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 gap-1 max-h-60 overflow-y-auto pr-8">
                            {Object.entries(product.specifications).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
                                <span className="font-medium text-gray-700 capitalize">
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
                  </TabsContent>
                </Tabs>
              </div>

              {/* Action Buttons */}
              <div className="p-6 border-t bg-gray-50">
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => setShowContactForm(true)}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Supplier
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                    onClick={handleEnquiry}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Quick Enquiry
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Contact Form Page
          <div className="flex h-full">
            {/* Left Side: Order Summary */}
            <div className="w-2/5 bg-gray-50 p-6">
              <Card className="h-full flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <CardTitle className="text-lg">Order Summary</CardTitle>
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
                        <span>Price per unit:</span>
                        <span className="font-medium">₹{product.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantity:</span>
                        <span className="font-medium">{quantity} {unit}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold text-red-600">
                        <span>Total:</span>
                        <span>₹{(product.price * quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>

            {/* Right Side: Contact Form */}
            <div className="flex-1 p-6 overflow-y-auto bg-white">
              {submitSuccess ? (
                <Card className="h-full flex items-center justify-center">
                  <CardContent className="text-center h-full flex flex-col justify-center">
                    <div className="text-green-600 text-2xl font-bold">
                      ✅ Thank you for your inquiry!
                    </div>
                    <p className="text-gray-600">
                      We have received your message and will contact you shortly.
                    </p>
                    <Button onClick={handleClose} className="bg-red-600 hover:bg-red-700 text-white">
                      Close
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
                      <div className="grid grid-cols-2 gap-4">
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

                      <div className="grid grid-cols-2 gap-4">
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

                      <div className="flex gap-3 pt-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setShowContactForm(false)}
                          className="flex-1"
                        >
                          Back to Product
                        </Button>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-red-600 hover:bg-red-700 text-white"
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
    </Dialog>
  );
}