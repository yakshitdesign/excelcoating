// src/app/components/ProductShowcase.tsx
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import SecondaryButton from "@/components/Buttons/SecondaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const updateScroll = () => {
      const totalScroll = track.scrollWidth - container.clientWidth;
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      gsap.to(track, {
        x: () => -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=${track.scrollWidth - container.clientWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    };

    updateScroll();
    window.addEventListener("resize", updateScroll);
    return () => {
      window.removeEventListener("resize", updateScroll);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-neutral-900 text-white py-12 px-6 md:px-12 rounded-2xl shadow-sm mb-12 min-h-[520px]">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-4xl font-bold font-geist">Explore Our Advanced Nano Coatings</h2>
          <p className="text-gray-400 mt-2">Choose the right solution for your surface from cool roofs to self-cleaning glass.</p>
        </div>
        <PrimaryButton href="/products" className="bg-white text-black">View All</PrimaryButton>
      </div>

      {/* Horizontal Scroll Section */}
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ height: 520 }} // height = card height + padding
      >
        <div
          ref={trackRef}
          className="flex gap-6 snap-x snap-mandatory h-full"
        >
          {productData.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Product Card Component
function ProductCard({ title, description, image }: any) {
  return (
    <div className="min-w-[600px] max-w-[600px] bg-white text-black rounded-lg shadow-md p-4 flex-shrink-0 snap-start h-[500px]">
      <div className="mb-4 flex items-center gap-2">
        <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">• High SRI Cool Roof Coating</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex gap-4 mt-auto">
        <PrimaryButton href="/products/coolcoat">Learn More</PrimaryButton>
        <SecondaryButton href="https://razorpay.com">✨ Buy Now</SecondaryButton>
      </div>
      <div className="h-32 mt-4 bg-neutral-200 rounded-lg"></div>
    </div>
  );
}

// Product Data (for demonstration)
const productData = [
  { title: "Excel CoolCoat", description: "Reflects sunlight, reduces roof temperature by up to 20°C.", image: "" },
  { title: "Excel WaterGuard", description: "Advanced waterproofing for long-lasting protection.", image: "" },
  { title: "Excel NanoSeal", description: "Nano-seal technology for superior surface protection.", image: "" },
  { title: "Excel StayCool", description: "Energy-efficient coatings for lower cooling costs.", image: "" },
  { title: "Excel CleanCoat", description: "Self-cleaning coatings for solar panels.", image: "" },
  { title: "Excel InsuX", description: "Thermal insulation for efficient energy management.", image: "" },
];
