'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // For now, we'll just pass the slug to the ProductDetail component
  // Later we can add logic to fetch product data based on the slug
  return (
    <div className="flex flex-col gap-4">
      <ProductDetail slug={params.slug} />
    </div>
  );
}