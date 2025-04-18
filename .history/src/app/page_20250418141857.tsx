import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <div>
                <Link href="/" className="flex items-center py-4">
                  <span className="font-semibold text-gray-500 text-lg">Sonmo</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/products" className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900">Products</Link>
                <Link href="/cart" className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900">Cart</Link>
                <Link href="/wishlist" className="py-4 px-2 text-gray-500 font-semibold hover:text-gray-900">Wishlist</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-3">
              {session ? (
                <>
                  <span className="py-2 px-2 text-gray-500 font-semibold">{session.user?.name}</span>
                  <Link href="/api/auth/signout" className="py-2 px-2 text-gray-500 font-semibold hover:text-gray-900">Sign Out</Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="py-2 px-2 text-gray-500 font-semibold hover:text-gray-900">Login</Link>
                  <Link href="/register" className="py-2 px-2 text-gray-500 font-semibold hover:text-gray-900">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Sonmo</h1>
          <p className="text-xl text-gray-600 mb-8">Your one-stop shop for cute plushies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">개굴이 인형</h2>
              <p className="text-gray-600 mb-4">Cute frog plushies for everyone</p>
              <Link href="/products?category=frog" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                Shop Now
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">오리 인형</h2>
              <p className="text-gray-600 mb-4">Adorable duck plushies for everyone</p>
              <Link href="/products?category=duck" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 