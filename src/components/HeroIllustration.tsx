import React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useMotionTemplate, useMotionValue } from 'framer-motion';

const HeroIllustration = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  // Motion values for hover effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Floating animation variants
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    },
  };

  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={handleMouseMove}
      whileHover="hover"
    >
      {/* Background Elements with enhanced animations */}
      <motion.circle
        cx="300"
        cy="200"
        r="150"
        fill={isDark ? '#2A4494' : '#D8DCFF'}
        opacity="0.5"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.5,
          x: mouseX.get() * -10,
          y: mouseY.get() * -10,
        }}
        transition={{
          duration: 1.2,
          x: { duration: 0.2, ease: 'easeOut' },
          y: { duration: 0.2, ease: 'easeOut' },
        }}
      />
      <motion.circle
        cx="400"
        cy="100"
        r="50"
        fill={isDark ? '#3B5EE8' : '#A3C9FF'}
        opacity="0.3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.3,
          x: mouseX.get() * 15,
          y: mouseY.get() * 15,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          x: { duration: 0.1, ease: 'easeOut' },
          y: { duration: 0.1, ease: 'easeOut' },
        }}
      />
      <motion.circle
        cx="150"
        cy="300"
        r="70"
        fill={isDark ? '#183EC2' : '#6B4CF5'}
        opacity="0.2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 0.2,
          x: mouseX.get() * 20,
          y: mouseY.get() * 20,
        }}
        transition={{
          duration: 1.2,
          delay: 0.4,
          x: { duration: 0.1, ease: 'easeOut' },
          y: { duration: 0.1, ease: 'easeOut' },
        }}
      />

      {/* Decorative elements */}
      <motion.path
        d="M50,50 Q100,25 150,50 T250,50"
        stroke={isDark ? '#4B6FFF' : '#8BA3FF'}
        strokeWidth="2"
        fill="transparent"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5 }}
      />

      <motion.path
        d="M450,350 Q500,325 550,350"
        stroke={isDark ? '#4B6FFF' : '#8BA3FF'}
        strokeWidth="2"
        fill="transparent"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      {/* Main Device - Laptop with enhanced animations */}
      <motion.g
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        whileHover={{ y: -5 }}
        variants={{
          hover: {
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              repeatType: 'mirror',
            },
          },
        }}
      >
        <rect
          x="200"
          y="150"
          width="200"
          height="130"
          rx="8"
          fill={isDark ? '#1E293B' : '#F8FAFC'}
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="2"
        />
        <rect
          x="210"
          y="160"
          width="180"
          height="110"
          rx="4"
          fill={isDark ? '#0F172A' : '#FFFFFF'}
        />

        {/* Screen Content with typing animation */}
        <motion.rect
          x="220"
          y="170"
          width="160"
          height="15"
          rx="2"
          fill={isDark ? '#334155' : '#E2E8F0'}
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.rect
          x="220"
          y="195"
          width="100"
          height="10"
          rx="2"
          fill={isDark ? '#475569' : '#CBD5E1'}
          initial={{ width: 0 }}
          animate={{ width: 100 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        />
        <motion.rect
          x="220"
          y="215"
          width="140"
          height="10"
          rx="2"
          fill={isDark ? '#475569' : '#CBD5E1'}
          initial={{ width: 0 }}
          animate={{ width: 140 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        />
        <motion.rect
          x="220"
          y="235"
          width="80"
          height="10"
          rx="2"
          fill={isDark ? '#475569' : '#CBD5E1'}
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        />

        {/* Laptop Base */}
        <path
          d="M180 280H420L400 310H200L180 280Z"
          fill={isDark ? '#334155' : '#E2E8F0'}
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="2"
        />
      </motion.g>

      {/* Mobile Device with enhanced animations */}
      <motion.g
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        whileHover={{ rotate: 5, scale: 1.05 }}
        variants={{
          hover: {
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              repeatType: 'mirror',
            },
          },
        }}
      >
        <rect
          x="450"
          y="180"
          width="70"
          height="120"
          rx="10"
          fill={isDark ? '#1E293B' : '#F8FAFC'}
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="2"
        />
        <rect
          x="455"
          y="190"
          width="60"
          height="90"
          rx="4"
          fill={isDark ? '#0F172A' : '#FFFFFF'}
        />
        <circle cx="485" cy="290" r="5" fill={isDark ? '#475569' : '#CBD5E1'} />

        {/* Mobile Screen Content with typing animation */}
        <motion.rect
          x="465"
          y="200"
          width="40"
          height="8"
          rx="2"
          fill={isDark ? '#334155' : '#E2E8F0'}
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />
        <motion.rect
          x="465"
          y="215"
          width="30"
          height="6"
          rx="2"
          fill={isDark ? '#475569' : '#CBD5E1'}
          initial={{ width: 0 }}
          animate={{ width: 30 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        />
        <motion.rect
          x="465"
          y="230"
          width="35"
          height="6"
          rx="2"
          fill={isDark ? '#475569' : '#CBD5E1'}
          initial={{ width: 0 }}
          animate={{ width: 35 }}
          transition={{ duration: 0.6, delay: 1.9 }}
        />
      </motion.g>

      {/* Tablet Device with enhanced animations */}
      <motion.g
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        whileHover={{ rotate: -5, scale: 1.05 }}
        variants={{
          hover: {
            ...floatingAnimation,
            transition: {
              ...floatingAnimation.transition,
              repeatType: 'mirror',
            },
          },
        }}
      >
        <rect
          x="100"
          y="160"
          width="90"
          height="140"
          rx="10"
          fill={isDark ? '#1E293B' : '#F8FAFC'}
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="2"
        />
        <rect
          x="105"
          y="170"
          width="80"
          height="120"
          rx="4"
          fill={isDark ? '#0F172A' : '#FFFFFF'}
        />
        <circle cx="145" cy="300" r="5" fill={isDark ? '#475569' : '#CBD5E1'} />

        {/* Tablet Screen Content with typing animation */}
        <motion.rect
          x="115"
          y="180"
          width="60"
          height="10"
          rx="2"
          fill={isDark ? '#334155' : '#E2E8F0'}
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        />
        <motion.rect
          x="115"
          y="200"
          width="40"
          height="8"
          rx="2"
          fill={isDark ? '#475569' : '#CBD5E1'}
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ duration: 0.7, delay: 1.6 }}
        />
        <motion.rect
          x="115"
          y="220"
          width="50"
          height="8"
          rx="2"
          fill={isDark ? '#475569' : '#CBD5E1'}
          initial={{ width: 0 }}
          animate={{ width: 50 }}
          transition={{ duration: 0.7, delay: 1.8 }}
        />
      </motion.g>

      {/* Connection Lines with enhanced animations */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.path
          d="M200 220L190 220"
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
        <motion.path
          d="M190 220L145 220"
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        />
        <motion.path
          d="M400 220L410 220"
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
        <motion.path
          d="M410 220L465 220"
          stroke={isDark ? '#64748B' : '#94A3B8'}
          strokeWidth="1"
          strokeDasharray="2 2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 2.1 }}
        />
      </motion.g>

      {/* Data Flow Circles with enhanced animations */}
      <motion.circle
        cx="190"
        cy="220"
        r="3"
        fill={isDark ? '#3B82F6' : '#2563EB'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          x: [-5, 0, 5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 2.2,
          repeatDelay: 0.5,
        }}
      />
      <motion.circle
        cx="410"
        cy="220"
        r="3"
        fill={isDark ? '#3B82F6' : '#2563EB'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          x: [5, 0, -5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 2.4,
          repeatDelay: 0.5,
        }}
      />

      {/* Additional decorative elements */}
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill={isDark ? '#4B6FFF' : '#8BA3FF'}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.7, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <motion.circle
        cx="550"
        cy="350"
        r="6"
        fill={isDark ? '#4B6FFF' : '#8BA3FF'}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.7, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1.5,
          delay: 0.5,
        }}
      />
    </motion.svg>
  );
};

export default HeroIllustration;
