import Link from "next/link"
import { Star } from "lucide-react"
import { productsData } from "@/lib/data/products"

export default function ProductsSection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <span className="text-[#7CB342] text-xl md:text-2xl">➤➤</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">Best Selling Products</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {productsData.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-sm md:text-base">{product.name}</h3>
                <div className="flex gap-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={14} className="md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
