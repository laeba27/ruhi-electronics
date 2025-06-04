"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Extract form data
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    // Compose email
    const emailSubject = encodeURIComponent(subject || `Website Inquiry from ${name}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`
    );
    
    // Open email client
    window.location.href = `mailto:${companyInfo.contactInfo.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out to us for any queries or business inquiries.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg overflow-hidden">
              <div className="bg-brand-red p-6">
                <h2 className="text-2xl font-bold text-white mb-2">Get In Touch</h2>
                <p className="text-white/80">
                  Our team is ready to assist you with any questions or inquiries.
                </p>
              </div>
              
              <div className="p-6">
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
                <div className="mt-8 border-t pt-6 border-gray-200 dark:border-gray-700">
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
              </div>
            </div>
          </motion.div>
          
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
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name *
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
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address *
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
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number *
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
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
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
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800"
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="bg-brand-red hover:bg-brand-darkRed text-white font-medium py-2 px-6 rounded-md transition-colors flex items-center"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Google Map (Placeholder) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 rounded-lg overflow-hidden h-96 bg-gray-200 dark:bg-gray-800"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60277.379145260384!2d72.81562229959188!3d19.11919790058758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c839e1ca4b41%3A0x42e7fc91969e3d8c!2sAndheri%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1686779037139!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Ruhi Electricals Location"
          />
        </motion.div>
      </div>
    </div>
  );
}