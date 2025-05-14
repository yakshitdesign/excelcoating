// src/app/components/Testimonials.tsx
"use client";

import Badge from "@/components/Badge";
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons-pro/core-stroke-standard';
import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";

export default function Testimonials() {
  const firstRow = testimonialsData;
  return (
    <section className="bg-white rounded-2xl flex flex-col gap-5 md:gap-10 lg:gap-14 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Badge variant="yellow">
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> Testimonials
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-geist leading-tight text-center max-w-full md:max-w-2xl">
          Real stories from industries, institutions, and homeowners.
        </h2>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4 md:gap-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <figure
      className={cn(
        "relative h-full w-[280px] md:w-[320px] lg:w-[420px] h-[180px] md:h-[200px] lg:h-[260px] cursor-pointer overflow-hidden rounded-xl border p-6 mx-3",
        "border-gray-950/[.1] bg-white hover:bg-gray-50/50 transition-colors duration-200 flex flex-col justify-between"
      )}
    >
      <blockquote className="text-gray-600 text-xl">{text}</blockquote>
      <div className="flex flex-col">
        <figcaption className="text-md font-medium text-gray-900">
          {name}
        </figcaption>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </figure>
  );
}

// Testimonials Data (for demonstration)
const testimonialsData = [
  {
    text: "We applied Excel NanoSeal on our building's exterior, and it's been completely waterproof ever since.",
    name: "Neha Gupta",
    role: "Property Manager, IISER",
  },
  {
    text: "Excel StayCool is a game changer for our glass facades. Our interiors remain cooler without losing natural light.",
    name: "Vikram Mehta",
    role: "Facility Head, Embassy Tech Zone",
  },
  {
    text: "We've been using Excel CoolTile on our building's roof for two years. It's durable and keeps the building cool.",
    name: "Anita Sharma",
    role: "Home Owner",
  },
  {
    text: "The self-cleaning coating on our glass facade has reduced maintenance costs significantly.",
    name: "Rajesh Kumar",
    role: "Facility Manager, Tech Park",
  },
  {
    text: "Excel's anti-graffiti coating has saved us countless hours of cleaning and repainting.",
    name: "Priya Patel",
    role: "Municipal Corporation",
  },
  {
    text: "The thermal insulation coating has made a noticeable difference in our energy bills.",
    name: "Vikram Singh",
    role: "Commercial Building Owner",
  },
];
