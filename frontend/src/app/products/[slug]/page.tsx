'use client';

import React from 'react';
import ProductDetail from '@/components/ProductDetail';

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ProductPage({ params }: Props) {
  // For now, we'll just pass the slug to the ProductDetail component
  // Later we can add logic to fetch product data based on the slug
  return (
    <div className="flex flex-col gap-4">
      <ProductDetail slug={params.slug} />
    </div>
  );
}