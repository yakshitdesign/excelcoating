'use client';

import React from 'react';
import Image from 'next/image';
import Badge from '@/components/Badge';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons-pro/core-stroke-standard';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

interface ProductDetailProps {
  slug: string;
}

export default function ProductDetail({ slug }: ProductDetailProps) {
  // This is a placeholder. In a real application, you would fetch product data based on the slug
  const product = {
    name: 'Excel CoolCoat',
    description: 'Advanced heat reflective coating that reduces roof temperature by up to 20°C.',
    features: [
      'Reflects up to 90% of sunlight',
      'Reduces roof temperature by up to 20°C',
      'Energy savings of up to 30%',
      'Long-lasting protection',
      'Environmentally friendly',
    ],
    image: '/images/coolcoat.jpg',
  };

  return (
    <section className="bg-white rounded-2xl flex flex-col gap-5 md:gap-10 lg:gap-14 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Badge variant="yellow">
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> Product Details
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-geist leading-tight text-center max-w-full md:max-w-2xl">
          {product.name}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Product Information */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium">Product Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          <PrimaryButton href="/contact">Request a Quote</PrimaryButton>
        </div>
      </div>
    </section>
  );
} 