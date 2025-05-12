// src/app/components/CTASection.tsx
"use client";

import React from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

export default function CTASection() {
  return (
    <section className="bg-neutral-900 text-white py-12 px-6 md:px-12 rounded-2xl shadow-sm text-center mb-12">
      <h2 className="text-4xl font-bold font-geist mb-4">Protect Your Space with Advanced Nano Coatings</h2>
      <p className="text-gray-300 text-lg mb-8">
        Stay cool, stay dry, and save energy with Excel Coatings.
      </p>

      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <PrimaryButton href="/consultation" className="bg-white text-black hover:bg-gray-200">
          Get a Free Consultation
        </PrimaryButton>
        <SecondaryButton href="/products" className="bg-transparent border-white hover:bg-white hover:text-black">
          View Product
        </SecondaryButton>
      </div>
    </section>
  );
}
