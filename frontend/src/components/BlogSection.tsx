// src/app/components/BlogSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight01Icon } from "@hugeicons-pro/core-stroke-standard";
import PrimaryButton from "./Buttons/PrimaryButton";
import Badge from "./Badge";
import { HugeiconsIcon } from '@hugeicons/react';

export default function BlogSection() {
  return (
    <section className="bg-white rounded-2xl flex flex-col gap-5 md:gap-10 lg:gap-14 xl:gap-20 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
      <div className="flex flex-col md:flex-row gap-5">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-3">
          <Badge variant="yellow"> <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> Blog and Articles</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-geist leading-tight w-full md:max-w-[500px]">
            Insights & Innovations in Coatings
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-[500px] gap-4">
          <p className="text-base md:text-lg text-gray-600">
            Stay updated with the latest news and innovations in the coatings industry.
          </p>
          <PrimaryButton href="/blog">Read More</PrimaryButton>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogData.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
}

// Blog Card Component
function BlogCard({ title, description, category, image }: any) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
        <Image
           src={image}
            alt={title}
            fill
            className="object-cover bg-neutral-300"
        />
        <Badge variant="yellow" className="absolute top-2 left-2">{category}</Badge>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

// Sample Blog Data (for demonstration)
const blogData = [
  {
    image: "/images/blog/blog-3.jpg",
    title: "How Excel CoolCoat Lowers Roof Temperatures by 20°C",
    description: "Discover how our advanced nano coating can make your interiors cooler and save energy.",
    category: "Product",
  },
  {
    image: "/images/blog/blog-3.jpg",
    title: "The Science Behind Transparent Heat-Reducing Glass Coatings",
    description: "Understand how our StayCool coating blocks UV and IR rays without losing natural light.",
    category: "Innovation",
  },
  {
    image: "/images/blog/blog-3.jpg",
    title: "Top 5 Benefits of Self-Cleaning Solar Panel Coatings",
    description: "Maximize your solar panel efficiency with our self-cleaning nano coating.",
    category: "Guides",
  },
];
