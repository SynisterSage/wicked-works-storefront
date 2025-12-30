import Image from 'next/image';
import React from 'react';

type Props = {
  id: string;
  title: string;
  price: string;
  image: string;
  onView?: (id: string) => void;
};

export default function ProductCard({ id, title, price, image, onView }: Props) {
  return (
    <article className="group bg-white rounded-lg shadow-sm overflow-hidden">
      <button onClick={() => onView?.(id)} className="block relative w-full h-64">
        <Image src={image} alt={title} fill className="object-cover" />
      </button>
      <div className="p-4">
        <h3 className="text-sm font-bold text-zinc-900">{title}</h3>
        <div className="mt-2 text-sm text-zinc-600">{price}</div>
        <div className="mt-4">
          <button className="inline-flex items-center justify-center rounded-full bg-black text-white px-4 py-2 text-sm font-semibold hover:opacity-90">
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
