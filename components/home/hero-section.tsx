import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fadeInUp">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-[#7CB342] text-xl md:text-2xl animate-float">➤➤</div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Himalayan Pink Salt
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
              Pink Himalayan salt is one of the most precious minerals. Salt that is mined from the Khewra Salt Mines in
              Pakistan. Himalayan salt is used as a culinary salt and is used in many industrial applications. Pink salt
              directly from the Khewra mines, pink salt is mined with utmost care and integrity throughout the mining
              process.
            </p>
            <Link
              href="/products"
              className="inline-block text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm md:text-base animate-gradient-shift"
            >
              Get Quote
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex justify-center animate-fadeInUp" style={{ animationDelay: "200ms" }}>
            <img
              src="/himalayan-pink-salt-crystals.jpg"
              alt="Himalayan Pink Salt"
              className="rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full max-w-sm md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
