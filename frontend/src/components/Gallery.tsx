'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/Badge';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons-pro/core-stroke-standard';

export default function Gallery() {
  const galleryImages = [
    {
      src: '/images/gallery/image-1.jpg',
      alt: 'Project 1',
      title: 'Commercial Building Coating',
    },
    {
      src: '/images/gallery/image-2.jpg',
      alt: 'Project 2',
      title: 'Residential Roof Coating',
    },
    {
      src: '/images/gallery/image-3.jpg',
      alt: 'Project 3',
      title: 'Industrial Facility Coating',
    },
    {
      src: '/images/gallery/image-4.jpg',
      alt: 'Project 4',
      title: 'Solar Panel Coating',
    },
  ];

  return (
    <section className="bg-white rounded-2xl flex flex-col gap-5 md:gap-10 lg:gap-14 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Badge variant="yellow">
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> Gallery
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-geist leading-tight text-center max-w-full md:max-w-2xl">
          Our Project Gallery
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden group">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-medium">{image.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 