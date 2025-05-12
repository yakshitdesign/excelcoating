// src/app/components/Testimonials.tsx
"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white rounded-2xl shadow-sm mb-12">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">• Testimonials</span>
        </div>
        <h2 className="text-4xl font-bold font-geist leading-tight">
          Real stories from industries, institutions, and homeowners.
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:justify-center md:overflow-hidden">
        {testimonialsData.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
}

// Testimonial Card Component
function TestimonialCard({ text, name, role, avatar }: any) {
  return (
    <div className="min-w-[280px] max-w-[320px] bg-white rounded-lg shadow-md p-6 flex-shrink-0 snap-start">
      <p className="text-gray-800 text-base mb-4">{text}</p>
      <div className="flex items-center gap-3 mt-4">
        <Image
          src={avatar}
          alt={name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h4 className="text-sm font-semibold">{name}</h4>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
}

// Testimonials Data (for demonstration)
const testimonialsData = [
  {
    text: "We applied Excel NanoSeal on our building’s exterior, and it’s been completely waterproof ever since.",
    name: "Neha Gupta",
    role: "Property Manager, IISER",
  },
  {
    text: "Excel StayCool is a game changer for our glass facades. Our interiors remain cooler without losing natural light.",
    name: "Vikram Mehta",
    role: "Facility Head, Embassy Tech Zone",
  },
  {
    text: "We’ve been using Excel CoolTile on our building’s roof for two years. It’s durable and keeps the building cool.",
    name: "Anita Sharma",
    role: "Home Owner",
  },
];
