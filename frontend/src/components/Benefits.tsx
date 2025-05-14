// src/app/components/Benefits.tsx
"use client";

import { useEffect, useRef } from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Badge from "@/components/Badge";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons-pro/core-stroke-standard';

type BenefitColor = 'yellow' | 'blue' | 'orange' | 'green';

export default function Benefits() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              // Handle intersection if needed
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px",
        threshold: 0,
      }
    );

    const currentRefs = [...sectionRefs.current];
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-white rounded-2xl">
      <div className="flex flex-col lg:flex-row">
        {/* Left side content */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-0 self-start h-fit flex flex-col gap-8 md:gap-10 lg:gap-14 xl:gap-20 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20 z-10">
          <div className="flex flex-col max-w-xl gap-3 md:gap-4">
            <Badge variant="yellow">
              <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> Benefits
              </Badge>
            <h3 className="text-3xl lg:text-4xl xl:text-5xl font-medium font-geist leading-tight">Why Choose Excel Coatings?</h3>
            <p className="text-lg text-gray-600">
              From heat reflection to waterproofing, Excel Coatings deliver lasting results for homes, industries, and green buildings.
            </p>
          </div>
          <div className="flex">
            <PrimaryButton href="/products" size="lg">Explore Our Coatings</PrimaryButton>
          </div>
        </div>

        {/* Right side scrolling content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-10 lg:gap-14 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
          {benefitData.map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              bg={benefit.bg}
              color={benefit.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// Reusable Benefit Card Component
function BenefitCard({
  title,
  description,
  bg,
  color,
}: {
  title: string;
  description: string;
  bg: string;
  color: BenefitColor;
}) {
  // Map color to border and badge classes
  const colorMap = {
    yellow: "bg-[#E6A100]",
    blue: "bg-[#2563EB]",
    orange: "bg-[#FF7A00]",
    green: "bg-[#22C55E]",
  };
  const badgeBg = colorMap[color] || "bg-[#E6A100]";

  return (
    <div className={`rounded-xl ${bg} overflow-hidden`}>
      <div className={`w-full h-4 ${badgeBg}`}></div>
      <div className="flex flex-col gap-4 p-5 md:p-8 lg:p-10 h-fit md:h-[320px] md:h-[400px] justify-between">
        <div className={`w-fit inline-flex items-center px-3 py-2 rounded-full text-md font-regular ${badgeBg} text-white`}>
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4 mr-1" />
          {title}
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-medium text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Benefit Data for Easy Configuration
const benefitData: {
  title: string;
  description: string;
  bg: string;
  color: BenefitColor;
}[] = [
  {
    title: "Heat Reduction",
    description: "Our advanced nano-coatings reflect sunlight, reducing roof temperature by up to 20°C, making your interiors comfortably cool even during peak summer.",
    bg: "bg-yellow-50",
    color: "yellow",
  },
  {
    title: "Absolute Waterproofing",
    description: "Create a water-repellent barrier that keeps surfaces dry, prevents moisture damage, and extends the lifespan of your building.",
    bg: "bg-blue-50",
    color: "blue",
  },
  {
    title: "Energy Efficiency",
    description: "Save on energy bills with our heat-reflective coatings, which reduce the load on air conditioning without compromising comfort.",
    bg: "bg-orange-50",
    color: "orange",
  },
  {
    title: "Eco-Friendly",
    description: "Our coatings are GRIHA-certified, eco-friendly, and non-toxic, ensuring a sustainable solution for your home or business.",
    bg: "bg-green-50",
    color: "green",
  },
];
