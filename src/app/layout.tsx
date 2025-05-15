import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SoftSell',
  description: 'Software Licensing Solutions',
 icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/logosaas.png', sizes: 'any' }
    ],
    apple: { url: '/logosaas.png' },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
