// src/app/layout.tsx
import './globals.css';
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Excel Coatings - Advanced Nano Coatings',
  description:
    'Protect your surfaces with advanced nano coatings from Excel Coatings. Reflect heat, seal surfaces, and ensure long-lasting protection.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
        <div className="bg-zinc-200 min-h-screen flex flex-col px-3 py-3 gap-3">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}