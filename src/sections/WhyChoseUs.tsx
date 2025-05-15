'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const WhyChooseUs = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

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
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            Why Choose Us
          </h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/70' : 'text-black/70'} max-w-2xl mx-auto`}>
            We're revolutionizing how businesses buy and sell software licenses
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Reason 1 */}
          <motion.div 
            className={`p-6 rounded-xl ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm' 
                : 'bg-white/80 border border-[#D8DCFF]/50 backdrop-blur-sm shadow-sm'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`w-12 h-12 ${isDark ? 'bg-green-900/30' : 'bg-green-100'} rounded-full flex items-center justify-center mb-4`}>
              <svg
                className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Secure Transactions
            </h3>
            <p className={`${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Enterprise-grade security protocols protect your data and
              financial transactions
            </p>
          </motion.div>

          {/* Reason 2 */}
          <motion.div 
            className={`p-6 rounded-xl ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm' 
                : 'bg-white/80 border border-[#D8DCFF]/50 backdrop-blur-sm shadow-sm'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`w-12 h-12 ${isDark ? 'bg-blue-900/30' : 'bg-blue-100'} rounded-full flex items-center justify-center mb-4`}>
              <svg
                className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                ></path>
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              AI-Powered Pricing
            </h3>
            <p className={`${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Proprietary algorithms ensure optimal pricing for both buyers and
              sellers
            </p>
          </motion.div>

          {/* Reason 3 */}
          <motion.div 
            className={`p-6 rounded-xl ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm' 
                : 'bg-white/80 border border-[#D8DCFF]/50 backdrop-blur-sm shadow-sm'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`w-12 h-12 ${isDark ? 'bg-purple-900/30' : 'bg-purple-100'} rounded-full flex items-center justify-center mb-4`}>
              <svg
                className={`w-6 h-6 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Fast Processing
            </h3>
            <p className={`${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Streamlined process from listing to payment, typically completed
              within 48 hours
            </p>
          </motion.div>

          {/* Reason 4 */}
          <motion.div 
            className={`p-6 rounded-xl ${
              isDark 
                ? 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm' 
                : 'bg-white/80 border border-[#D8DCFF]/50 backdrop-blur-sm shadow-sm'
            }`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }
            }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className={`w-12 h-12 ${isDark ? 'bg-yellow-900/30' : 'bg-yellow-100'} rounded-full flex items-center justify-center mb-4`}>
              <svg
                className={`w-6 h-6 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              24/7 Support
            </h3>
            <p className={`${isDark ? 'text-white/70' : 'text-gray-600'}`}>
              Dedicated customer service team available around the clock to assist you
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
