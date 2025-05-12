// src/components/LogoMarquee.tsx
"use client";

import React from "react";
import Image from "next/image";

const logos = [
  { src: "/logos/ultratech-logo.png", alt: "UltraTech" },
  { src: "/logos/bhel-logo.png", alt: "BHEL" },
  { src: "/logos/bigbasket-logo.png", alt: "BigBasket" },
  { src: "/logos/iiser-logo.png", alt: "IISER Tirupati" },
  { src: "/logos/caterpillar-logo.png", alt: "CAT" },
  { src: "/logos/ultratech-logo.png", alt: "UltraTech" },
  { src: "/logos/bhel-logo.png", alt: "BHEL" },
  { src: "/logos/bigbasket-logo.png", alt: "BigBasket" },
  { src: "/logos/iiser-logo.png", alt: "IISER Tirupati" },
  { src: "/logos/caterpillar-logo.png", alt: "CAT" },
];

export default function LogoMarquee() {
  // Duplicate the logos for seamless looping
  const marqueeLogos = [...logos, ...logos];

  return (
    <div className="w-full bg-white rounded-2xl py-4 md:py-6 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-8 px-4 md:px-8">
        <span className="text-gray-400 text-lg mr-8 max-w-[100%] md:max-w-[200px]">
          Trusted by leading industries across India
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="marquee-track flex items-center gap-16 w-max">
            {marqueeLogos.map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 flex items-center justify-center h-12"
                style={{ width: 120 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  className="object-contain grayscale hover:grayscale-0 h-full w-auto cursor-pointer transition"
                />
              </div>
            ))}
          </div>
          <style jsx>{`
            .marquee-track {
              animation: marquee 20s linear infinite;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            /* Mask effect for left and right fade */
            .relative.overflow-hidden {
              -webkit-mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 8%,
                black 92%,
                transparent 100%
              );
              mask-image: linear-gradient(
                to right,
                transparent 0%,
                black 8%,
                black 92%,
                transparent 100%
              );
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
