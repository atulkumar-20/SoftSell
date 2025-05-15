'use client';

import {
  CheckCircle,
  ArrowRight,
  Upload,
  Calculator,
  CreditCard,
} from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export const HowItWorks = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#E8EAFF] via-[#D8DCFF] to-[#3B5EE8] dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:via-[#1a1a4e] dark:to-[#183EC2]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Selling your unused software licenses has never been easier
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Step 1 */}
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Upload License
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Upload your license details and documentation to our secure
              platform
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div 
            className="flex flex-col items-center text-center relative"
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="hidden md:block absolute left-0 top-8 w-full h-0.5 bg-blue-200 dark:bg-blue-800 -z-10"></div>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Get Valuation
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our AI instantly calculates the optimal market value for your
              license
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div 
            className="flex flex-col items-center text-center relative"
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="hidden md:block absolute left-0 top-8 w-full h-0.5 bg-blue-200 dark:bg-blue-800 -z-10"></div>
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
              <CreditCard className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Get Paid
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Receive payment securely once your license is sold on our
              marketplace
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
