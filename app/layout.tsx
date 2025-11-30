import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google';
import Script from 'next/script';
import { baseMetadata } from '@/lib/seo';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} bg-base text-text antialiased`}
      >
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
        <ThemeProvider>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-surface text-text px-4 py-2 rounded-md shadow-soft"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="content" className="px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto pb-20 pt-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
