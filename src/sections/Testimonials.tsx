'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechFlow Inc.",
      content: "SoftSell has transformed how we manage our software licenses. We've reduced procurement time by 70% and saved thousands on licensing costs.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "IT Director, Global Solutions",
      content: "The AI recommendations are spot-on. SoftSell suggested alternatives that were not only more cost-effective but also better suited to our workflow.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      position: "Operations Manager, Startup Hub",
      content: "As a growing startup, keeping track of our software expenses was becoming a nightmare. SoftSell simplified everything with their intuitive dashboard.",
      rating: 4
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
          <h2 className={`text-3xl md:text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
            What Our Customers Say
          </h2>
          <p className={`mt-4 text-lg ${isDark ? 'text-white/70' : 'text-black/70'} max-w-2xl mx-auto`}>
            Trusted by businesses of all sizes around the world
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={`p-6 rounded-xl ${
                isDark 
                  ? 'bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm' 
                  : 'bg-white/80 border border-[#D8DCFF]/50 backdrop-blur-sm shadow-sm'
              }`}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="flex mb-4"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.2
                    }
                  }
                }}
              >
                <div className={`h-12 w-12 rounded-full ${isDark ? 'bg-[#3B5EE8]' : 'bg-[#183EC2]'} flex items-center justify-center text-white font-bold text-xl`}>
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} italic`}>
                {testimonial.content}
              </p>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
