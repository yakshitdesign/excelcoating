// src/app/layout.tsx
import './globals.css';
// import { Metadata } from 'next';
import { Geist } from "next/font/google";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata = {
  title: "Excel Coatings - Advanced Nano Coatings",
  description: "Protect your home or business with our advanced heat-reflective and waterproof coatings.",
  openGraph: {
    title: "Excel Coatings - Advanced Nano Coatings",
    description: "Protect your home or business with our advanced heat-reflective and waterproof coatings.",
    url: "https://www.xlcoatings.com",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Excel Coatings - Advanced Nano Coatings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CoatingsExcel",
    creator: "@CoatingsExcel",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable}`}>
          <div className="bg-zinc-200 min-h-screen flex flex-col px-2 py-2 gap-2 sm:px-3 sm:py-3 sm:gap-3">
            <Header />
          <main className="flex-grow">{children}</main>
            <Footer />
          </div>
      </body>
    </html>
  );
}