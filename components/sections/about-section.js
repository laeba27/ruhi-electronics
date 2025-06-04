"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, TrendingUp, Users } from "lucide-react";
import { companyInfo } from "@/data/company";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-brand-red">Ruhi Electricals</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Since {companyInfo.foundedYear}, Ruhi Electricals has been at the forefront of manufacturing high-quality electrical products that combine efficiency, durability, and innovation.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {companyInfo.mission}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {companyInfo.values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-brand-red mt-1 mr-2" />
                  <div>
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6">Our Achievements</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {companyInfo.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="bg-brand-red/10 rounded-full p-3 mr-4">
                    {index === 0 ? (
                      <Award className="h-6 w-6 text-brand-red" />
                    ) : index === 1 ? (
                      <TrendingUp className="h-6 w-6 text-brand-red" />
                    ) : index === 2 ? (
                      <Award className="h-6 w-6 text-brand-red" />
                    ) : (
                      <Users className="h-6 w-6 text-brand-red" />
                    )}
                  </div>
                  <p className="font-medium">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}