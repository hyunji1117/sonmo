import { prisma } from '@/lib/prisma';
import ProductList from '@/components/ProductList';
import Image from 'next/image';
import Link from 'next/link';

async function getProducts() {
  try {
    // 임시 데이터 생성
    await prisma.product.createMany({
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

    return await prisma.product.findMany();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="min-h-screen relative">
      {/* 배경 이미지 */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/IMG_2197.PNG"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 헤더 */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/손모-removebg-preview.png"
              alt="Sonmo Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <h1 className="text-3xl font-bold text-gray-800">Sonmo Shop</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/login" className="btn-primary">
              로그인
            </Link>
            <Link href="/register" className="btn-secondary">
              회원가입
            </Link>
          </div>
        </div>
      </header>
      
      {/* 메인 컨텐츠 */}
      <div className="container py-8">
        <h2 className="text-2xl font-semibold mb-6 text-white">Featured Products</h2>
        <ProductList products={products} />
      </div>
    </main>
  );
}
