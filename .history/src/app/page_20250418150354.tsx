import { prisma } from '@/lib/prisma';
import ProductList from '@/components/ProductList';

export default async function Home() {
  // 임시 데이터 생성
  const products = await prisma.product.createMany({
    data: [
      {
        name: "Premium Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 299.99,
        image: "/images/headphones.jpg",
        category: "Electronics"
      },
      {
        name: "Smart Watch",
        description: "Latest smartwatch with health monitoring features",
        price: 199.99,
        image: "/images/smartwatch.jpg",
        category: "Electronics"
      },
      {
        name: "Wireless Earbuds",
        description: "Compact wireless earbuds with long battery life",
        price: 149.99,
        image: "/images/earbuds.jpg",
        category: "Electronics"
      }
    ],
    skipDuplicates: true
  });

  const allProducts = await prisma.product.findMany();

  return (
    <main className="min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">Sonmo Shop</h1>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <ProductList products={allProducts} />
      </div>
    </main>
  );
}
