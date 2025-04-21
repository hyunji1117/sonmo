import { Product } from '@prisma/client';
import Image from 'next/image';

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  // 90개의 동일한 상품 배열 생성 (3열 x 30행)
  const repeatedProducts = Array(30).fill({
    id: 1,
    name: "프리미엄 무선 이어폰",
    description: "고품질 무선 이어폰 with 노이즈 캔슬링",
    price: 299.99,
    image: "https://image6.coupangcdn.com/image/vendor_inventory/bcdc/7afebd3e18102e7cbc7736ec2407adbf2c7c45f85cfd2c7f045e91ea5fcc.jpg",
    category: "Electronics",
    createdAt: new Date(),
    updatedAt: new Date()
  });

  return (
    <div className="grid grid-cols-3 gap-6">
      {repeatedProducts.map((product, index) => (
        <div key={index} className="card p-4 flex flex-col">
          <div className="relative h-48 w-full mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
              priority={index < 6} // 첫 두 행의 이미지만 priority 적용
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#121212]">{product.name}</h3>
          <p className="text-gray-600 flex-grow">{product.description}</p>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xl font-bold text-[#121212]">${product.price.toFixed(2)}</span>
            <button className="btn-primary">
              장바구니 담기
            </button>
          </div>
        </div>
      ))}
    </div>
  );
} 