import React from 'react';
import ProductCard from './ProductCard';
import { MOCK_PRODUCTS } from '../lib/mock-products';

export default function ProductGrid({ onView }: { onView?: (id: string) => void }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-black mb-6">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PRODUCTS.map((p) => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} onView={onView} />
          ))}
        </div>
      </div>
    </section>
  );
}
