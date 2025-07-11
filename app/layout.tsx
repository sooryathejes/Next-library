import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import localFonts from 'next/font/local'
import path from "path";
import { Variable } from "lucide-react";
import { Children, ReactNode } from "react";

const ibmPlexSans = localFonts({
  src: [
    { path: './fonts/IBMPlexSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: './fonts/IBMPlexSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: './fonts/IBMPlexSans-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: './fonts/IBMPlexSans-Bold.ttf', weight: '700', style: 'normal' }
  ]
}); 

const babasNeue = localFonts({
  src: [
    { path: './fonts/BebasNeue-Regular.ttf', weight: '400', style: 'normal' },
  ],
  variable: '--babas-neue',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "BookWise",
  description: "Bookwise is a book borrowing university library management solutions",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${babasNeue.variable} antialiased`} 
      >
        {children}
        
      </body>
    </html>
  );
}