import { Product } from '@prisma/client';
import Image from 'next/image';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  if (!products.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No products available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="card">
          <div className="relative h-48 w-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
              <button className="btn-primary">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 