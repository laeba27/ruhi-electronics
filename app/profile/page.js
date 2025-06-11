"use client";

import { motion } from "framer-motion";
import { Building2, Users, Calendar, IndianRupee, FileText, Banknote } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Company Profile</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Established in the year 2020, we "Ruhi Electricals" are Manufacturer of a wide range of UGC 2000W Immersion Water Heater Rod, 2000W Shock Proof Immersion Heater Rod, Immersion Rod 1000W Water Heaters, etc.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Basic Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Building2 className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Nature of Business</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Trader - Wholesaler/Distributor
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Building2 className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Additional Business</h3>
                    <ul className="text-gray-600 dark:text-gray-400 list-disc list-inside">
                      <li>Retail Business</li>
                      <li>Office / Sale Office</li>
                      <li>Wholesale Business</li>
                      <li>Factory / Manufacturing</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Company CEO</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Uchit Sahni
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Building2 className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Registered Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ground Floor, H.No 123/B, Kh No. 168/228/173, Gali No 2, Village Wazirabad, North Delhi, New Delhi, New Delhi-110084, Delhi, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Total Number of Employees</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      51 to 100 People
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">GST Registration Date</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      01-09-2021
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Legal Status of Firm</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Proprietorship
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <IndianRupee className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Annual Turnover</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      40 L - 1.5 Cr
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">GST Partner Name</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Uchit Sahni
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statutory Profile */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white dark:bg-gray-900 shadow-sm rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Statutory Profile</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">TAN No.</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      DELU0*****
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Banknote className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Banker</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      HDFC Bank
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-brand-red mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">GST No.</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      07JGEPS5371D1Z4
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}