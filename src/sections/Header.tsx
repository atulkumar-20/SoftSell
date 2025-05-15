'use client';

import { ArrowRight, Menu } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/assets/logosaas.png';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 backdrop-blur-sm z-10">
      <div className="py-5 bg-gradient-to-r from-[#D8DCFF] to-[#EAEEFE] dark:bg-gradient-to-r dark:from-[#1a1a3e] dark:to-[#1a1a4e]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image src={Logo} alt="SoftSell" height={40} width={40} />
            </Link>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setTheme(isDark ? 'light' : 'dark')}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                aria-label="Toggle theme"
              >
                {mounted ? (isDark ? '☀️' : '🌙') : null}
              </button>
              <Menu className="h-5 w-5 text-black dark:text-white md:hidden" />
              <nav className="hidden md:flex gap-6 items-center">
                <a
                  href="#"
                  className="text-black dark:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white"
                >
                  Customers
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white"
                >
                  Updates
                </a>
                <a
                  href="#"
                  className="text-black dark:text-white"
                >
                  Help
                </a>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
                  Get for free
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
