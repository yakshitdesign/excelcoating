// src/components/AboutUs.tsx
"use client";

import React from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Badge from "@/components/Badge";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons-pro/core-stroke-standard';

const AboutUs = () => {
  return (
    <section className="bg-white rounded-2xl flex flex-col gap-5 md:gap-10 lg:gap-14 xl:gap-20 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-14 xl:gap-20 items-end gap-8">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-3">
          <Badge variant="yellow"> <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> About us</Badge>
          <h2 className="text-5xl font-medium font-geist leading-tight">
            India's Leading Nano Coating Innovator Since 2007 Protecting Over 4,000+ Buildings Nationwide.
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-[500px] gap-4">
          <p className="text-gray-600 text-lg">
            Excel Coatings develops innovative, eco-friendly solutions to protect roofs, walls, glass, and solar panels across homes, industries, and green buildings.
          </p>
          <PrimaryButton href="/about">Know more</PrimaryButton>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-8 md:gap-12 justify-between text-left items-center">
        <StatItem value="60+" label="Dealers & Contractors" />
        <div className="w-[1px] h-[60px] bg-gray-200"></div>
        <StatItem value="30%" label="Exported to 4+ Countries" />
        <div className="w-[1px] h-[60px] bg-gray-200"></div>
        <StatItem value="4,000+" label="Projects Completed" />
        <div className="w-[1px] h-[60px] bg-gray-200"></div>
        <StatItem value="18+ Yrs" label="Industry Experience" />
      </div>
    </section>
  );
};

// Reusable Stat Item Component
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-start gap-2">
    <span className="text-5xl font-medium text-gray-900">{value}</span>
    <span className="text-xl text-gray-500">{label}</span>
  </div>
);

export default AboutUs;
