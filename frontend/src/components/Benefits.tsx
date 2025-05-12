// src/app/components/Benefits.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "lucide-react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

export default function Benefits() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveSection(index);
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

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8 lg:gap-16">
        {/* Left side content */}
        <div className="lg:w-1/2 lg:sticky lg:top-24 lg:self-start">
          <div className="mb-6">
            <span className="inline-flex items-center text-yellow-600 text-sm font-medium">
              <ChevronRight className="h-4 w-4 mr-1" />
              Benefits
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Excel Coatings?</h1>
          <p className="text-lg text-gray-600 mb-8">
            From heat reflection to waterproofing, Excel Coatings deliver lasting results for homes, industries, and green buildings.
          </p>
          <PrimaryButton href="/products">Explore Our Coatings</PrimaryButton>
        </div>

        {/* Right side scrolling content */}
        <div ref={containerRef} className="lg:w-1/2 relative">
          <div className="lg:h-[400px] lg:sticky lg:top-24 overflow-hidden">
            {benefitData.map((benefit, index) => (
              <BenefitCard
                key={index}
                index={index}
                activeSection={activeSection}
                title={benefit.title}
                description={benefit.description}
                bg={benefit.bg}
              />
            ))}
          </div>

          {/* Invisible scroll triggers */}
          <div className="space-y-[80vh]">
            {benefitData.map((_, index) => (
              <div key={index} ref={el => { sectionRefs.current[index] = el; }} className="h-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Benefit Card Component
function BenefitCard({ index, activeSection, title, description, bg }: any) {
  return (
    <div
      className={`absolute inset-0 h-[400px] rounded-xl p-8 transition-all duration-700 ease-out ${bg} ${
        activeSection >= index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
      } ${activeSection > index ? "scale-95 -translate-y-6 opacity-0" : ""}`}
    >
      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 ${bg === "bg-blue-50" ? "bg-blue-500 text-white" : bg === "bg-green-50" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"}`}>
        <ChevronRight className="h-4 w-4 mr-1" />
        {title}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

// Benefit Data for Easy Configuration
const benefitData = [
  {
    title: "Heat Reduction",
    description: "Keep your space cooler by reflecting sunlight and reducing roof temperature by up to 20°C.",
    bg: "bg-yellow-50",
  },
  {
    title: "Absolute Waterproofing",
    description: "Stop leaks before they start with advanced waterproofing solutions.",
    bg: "bg-blue-50",
  },
  {
    title: "Energy Efficiency Guaranteed",
    description: "Cut cooling costs by 30% with our energy-efficient coatings.",
    bg: "bg-orange-50",
  },
  {
    title: "Eco-Friendly and Certified",
    description: "Our coatings are GRIHA-certified, eco-friendly, and non-toxic.",
    bg: "bg-green-50",
  },
];
