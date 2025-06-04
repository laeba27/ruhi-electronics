"use client";

import { motion } from "framer-motion";
import { Award, Users, Factory, Truck } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Company Profile
            </h1>
            <p className="text-xl text-gray-300">
              Ruhi Electricals - A Leading Manufacturer of Premium Electrical Products Since {companyInfo.foundedYear}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Company Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Company Overview
              </h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Ruhi Electricals is a renowned manufacturer of high-quality electrical products with a focus on energy efficiency, reliability, and innovation. We specialize in immersion water heaters, room heaters, ceiling fans, and various other electrical solutions.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                With state-of-the-art manufacturing facilities and a team of experienced professionals, we have established ourselves as a trusted brand in the electrical industry. Our products are distributed across India and exported to several countries worldwide.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300">
                At Ruhi Electricals, we are committed to maintaining the highest standards of quality and customer satisfaction. Our ISO 9001:2015 certification is a testament to our dedication to excellence in all aspects of our business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Ruhi Electricals Factory" 
                className="w-full h-auto rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ruhi Electricals at a Glance
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Factory,
                title: "Manufacturing Units",
                value: "3",
                description: "State-of-the-art facilities"
              },
              {
                icon: Users,
                title: "Team Members",
                value: "200+",
                description: "Skilled professionals"
              },
              {
                icon: Truck,
                title: "Distribution Network",
                value: "500+",
                description: "Dealers across India"
              },
              {
                icon: Award,
                title: "Years of Excellence",
                value: `${new Date().getFullYear() - companyInfo.foundedYear}+`,
                description: "Trusted by millions"
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg p-6 text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center p-3 bg-brand-red/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-brand-red" />
                </div>
                <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
                <h4 className="text-lg font-semibold mb-2">{stat.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Manufacturing Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our state-of-the-art manufacturing facilities equipped with the latest technology and machinery.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Advanced Production Lines",
                description: "Our facilities feature modern production lines that ensure precision manufacturing and consistency in product quality.",
                image: "https://images.pexels.com/photos/3846115/pexels-photo-3846115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "Quality Testing Labs",
                description: "Every product undergoes rigorous testing in our in-house laboratories to ensure they meet our high standards before reaching the market.",
                image: "https://images.pexels.com/photos/3846118/pexels-photo-3846118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              },
              {
                title: "R&D Center",
                description: "Our research and development center is dedicated to innovation and continuous improvement of our product offerings.",
                image: "https://images.pexels.com/photos/8961195/pexels-photo-8961195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{facility.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">
              Our Certifications
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_31000.svg/1200px-ISO_31000.svg.png" 
                  alt="ISO 9001:2015 Certification" 
                  className="h-16 w-auto mx-auto"
                />
                <p className="mt-4 font-medium">ISO 9001:2015</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Bureau_of_Indian_Standards_Logo.svg/1200px-Bureau_of_Indian_Standards_Logo.svg.png" 
                  alt="BIS Certification" 
                  className="h-16 w-auto mx-auto"
                />
                <p className="mt-4 font-medium">BIS Certified</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                <img 
                  src="https://utils.imimg.com/imsrchui/imgs/tbs.png" 
                  alt="IndiaMART Trust Seal" 
                  className="h-16 w-auto mx-auto"
                />
                <p className="mt-4 font-medium">IndiaMART Trust Seal</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}