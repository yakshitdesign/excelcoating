// src/app/components/BlogSection.tsx
"use client";

import React from "react";
import Link from "next/link";

export default function BlogSection() {
  return (
    <section className="py-12 px-6 md:px-12 bg-white rounded-2xl shadow-sm mb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">• Blog and Articles</span>
          </div>
          <h2 className="text-4xl font-bold font-geist">Insights & Innovations in Coatings</h2>
        </div>
        <Link href="/blog" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          View All
        </Link>
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
function BlogCard({ title, description, category }: any) {
  return (
    <div className="bg-gray-100 rounded-lg p-4 shadow-md">
      <div className="h-40 bg-neutral-300 rounded-lg mb-4"></div>
      <span className="bg-neutral-200 text-neutral-600 text-xs px-2 py-1 rounded-full mb-2 inline-block">
        {category}
      </span>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

// Sample Blog Data (for demonstration)
const blogData = [
  {
    title: "How Excel CoolCoat Lowers Roof Temperatures by 20°C",
    description: "Discover how our advanced nano coating can make your interiors cooler and save energy.",
    category: "Product",
  },
  {
    title: "The Science Behind Transparent Heat-Reducing Glass Coatings",
    description: "Understand how our StayCool coating blocks UV and IR rays without losing natural light.",
    category: "Innovation",
  },
  {
    title: "Top 5 Benefits of Self-Cleaning Solar Panel Coatings",
    description: "Maximize your solar panel efficiency with our self-cleaning nano coating.",
    category: "Guides",
  },
];
