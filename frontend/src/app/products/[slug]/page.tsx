import React from 'react';
import ProductDetail from '@/components/ProductDetail';

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  // For now, we'll just pass the slug to the ProductDetail component
  // Later we can add logic to fetch product data based on the slug
  return (
    <div className="flex flex-col gap-4">
      <ProductDetail slug={params.slug} />
    </div>
  );
}