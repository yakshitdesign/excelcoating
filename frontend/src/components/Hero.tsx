// src/components/Hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import PrimaryButton from "./Buttons/PrimaryButton";
import GhostButton from "./Buttons/GhostButton";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight03Icon } from '@hugeicons-pro/core-stroke-standard';


const Hero = () => {
  return (
    <section className="flex flex-col xl:flex-row gap-3">
      {/* Left Section */}
      <div className="bg-white rounded-2xl gap-5 md:gap-10 lg:gap-14 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20 flex-1 flex flex-col justify-center">
        <a href="/blog" className="flex items-center px-1 py-1 gap-1 rounded-sm">
          <span className="bg-black text-white text-xs px-2 py-2 rounded-sm">Blog</span>
          <div className="text-sm text-gray-600 px-3 py-2 gap-2 flex items-center gap-1 hover:text-black">
            India’s Most Exported Cool Roof Coating 
            <HugeiconsIcon icon={ArrowUpRight03Icon} className="w-4 h-4"/>
          </div>
        </a>
        <div className="flex flex-col gap-5">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium font-geist leading-tighter tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Nano-Based Cool Roof & Waterproof Coatings That Cut Heat
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Excel Coatings are ideal for homes, factories, and green buildings to reflect heat, seal surfaces, and reduce maintenance with long-lasting protection.
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <PrimaryButton size="lg" href="/products">Explore Products</PrimaryButton>
          <GhostButton size="lg" href="/contact">✨ Need Help Choosing?</GhostButton>
        </div>
      </div>

      {/* Right Section (Image Placeholder) */}
      <motion.div
        className="flex-1 bg-zinc-200 rounded-2xl h-64 md:h-auto flex items-center justify-center relative overflow-hidden min-h-[420px] md:min-h-[620px] lg:min-h-[600px] xl:min-h-[700px]"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-image.png"
          alt="Cool Roof Coatings by Excel Coatings"
          fill
          className="rounded-xl object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
