// src/app/components/CTASection.tsx
"use client";

import React from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

export default function CTASection() {
  return (
    <section className="flex flex-col items-center bg-neutral-900 text-white rounded-2xl gap-5 md:gap-10 lg:gap-14 xl:gap-20 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
      <div className="flex flex-col gap-4 max-w-full md:max-w-[500px] lg:max-w-[750px] text-center">
        <h2 className="text-6xl font-medium font-geist leading-tight">Protect Your Space with Advanced Nano Coatings</h2>
        <p className="text-gray-400 text-lg">
          Stay cool, stay dry, and save energy with Excel Coatings.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <PrimaryButton href="/consultation" size="lg" className="bg-[#FECD6C] text-black hover:bg-gray-200">
          Get a Free Consultation
        </PrimaryButton>
        <SecondaryButton href="/products" size="lg" className="bg-transparent border-white hover:bg-white hover:text-black">
          View Product
        </SecondaryButton>
      </div>
    </section>
  );
}
