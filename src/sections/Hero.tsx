'use client';

import { ArrowRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import HeroIllustration from '@/components/HeroIllustration';
import { motion } from 'framer-motion';

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === 'dark';

  return (
    <section className="pt-8 pb-20 md:pt-12 md:pb-20 bg-gradient-to-b from-[#E8EAFF] via-[#D8DCFF] to-[#3B5EE8] dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:via-[#1a1a4e] dark:to-[#183EC2]">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center gap-8">
          <motion.div 
            className="md:w-[50%] lg:w-[45%]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="text-sm inline-flex border border-[#222]/10 dark:border-white/10 py-1 px-3 rounded-lg tracking-tight"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              #1 Software License Marketplace
            </motion.div>
            <motion.h1
              className={`${
                isDark ? 'text-white' : 'text-black'
              } text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Unlock{' '}
              <span className="text-[#183EC2] dark:text-[#8ba3ff]">
                Software
              </span>{' '}
              Value
            </motion.h1>
            <motion.p
              className={`text-xl ${
                isDark ? 'text-white/80' : 'text-black/80'
              } tracking-tight mt-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Buy and sell software licenses at optimal prices. Save up to 70%
              on premium software with our AI-powered marketplace.
            </motion.p>
            <motion.div 
              className="flex gap-4 items-center mt-[30px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button 
                className="bg-white text-[#183EC2] hover:bg-[#183EC2] hover:text-white transition-colors duration-300 px-6 py-3 rounded-lg font-medium shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.button>
              <motion.button
                className={`flex items-center gap-1 ${
                  isDark ? 'text-white' : 'text-black'
                } hover:opacity-80 transition-opacity duration-300`}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Sell My Licenses</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div 
            className="mt-12 md:mt-0 md:w-[50%] lg:w-[55%] relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="w-full h-[400px] md:h-[500px] relative">
              {mounted && <HeroIllustration />}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
