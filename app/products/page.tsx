"use client"

import { useRouter } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Star } from "lucide-react"
import BackToTop from "@/components/back-to-top"
import Breadcrumb from "@/components/breadcrumb"

const allProducts = [
  {
    id: 1,
    name: "Black Himalayan Salt",
    price: "0.00",
    image: "/black-himalayan-salt.jpg",
    rating: 5,
    category: "salt",
  },
  {
    id: 2,
    name: "Edible Himalayan Salt",
    price: "0.00",
    image: "/edible-himalayan-salt.jpg",
    rating: 5,
    category: "salt",
  },
  {
    id: 3,
    name: "Fruits & Vegetables",
    price: "0.00",
    image: "/colorful-produce.jpg",
    rating: 5,
    category: "other",
  },
  {
    id: 4,
    name: "De Icing Salt",
    price: "0.00",
    image: "/de-icing-salt.jpg",
    rating: 5,
    category: "salt",
  },
  {
    id: 5,
    name: "Animal Licking Salt",
    price: "0.00",
    image: "/animal-licking-salt.jpg",
    rating: 5,
    category: "salt",
  },
  {
    id: 6,
    name: "Salt Decoration Item",
    price: "0.00",
    image: "/salt-decoration.jpg",
    rating: 5,
    category: "other",
  },
  {
    id: 7,
    name: "Big Rocks",
    price: "0.00",
    image: "/big-rocks-salt.jpg",
    rating: 5,
    category: "salt",
  },
  {
    id: 8,
    name: "Rock Salt",
    price: "0.00",
    image: "/rock-salt.jpg",
    rating: 5,
    category: "salt",
  },
  {
    id: 9,
    name: "Salt Slabs",
    price: "0.00",
    image: "/salt-slabs.jpg",
    rating: 5,
    category: "salt",
  },
  {
    id: 10,
    name: "Salt Tiles",
    price: "0.00",
    image: "/salt-tiles.jpg",
    rating: 5,
    category: "other",
  },
  {
    id: 11,
    name: "Leather Products",
    price: "0.00",
    image: "/assorted-leather-goods.png",
    rating: 5,
    category: "other",
  },
  {
    id: 12,
    name: "Edible Items",
    price: "0.00",
    image: "/edible-items.jpg",
    rating: 5,
    category: "other",
  },
]

export default function ProductsPage() {
  const router = useRouter()

  const handleProductClick = (productId: number) => {
    router.push(`/products/${productId}`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "All Products" }]} />

            <h1 className="text-4xl font-bold text-gray-900 mb-2 animate-fadeInUp">All Products</h1>
            <p className="text-gray-600 mb-8 animate-fadeInUp" style={{ animationDelay: "100ms" }}>
              Showing 1-12 of 14 products
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {allProducts.map((product, index) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="aspect-square overflow-hidden bg-gray-200">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <div className="flex gap-1">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-12 animate-fadeInUp" style={{ animationDelay: "400ms" }}>
              <button className="px-4 py-2 bg-[#7CB342] text-white rounded hover:bg-[#6ba035] transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                1
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95">
                2
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
