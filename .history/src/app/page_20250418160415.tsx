import ProductList from '@/components/ProductList';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
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
        <h2 className="text-2xl font-semibold mb-6 text-white">인기 상품</h2>
        <ProductList products={[]} />
      </div>
    </main>
  );
}
