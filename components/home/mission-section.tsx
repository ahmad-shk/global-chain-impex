"use client"

export default function MissionSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src="/himalayan-salt-products-in-bowls.jpg"
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full max-w-sm md:max-w-none object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = "/himalayan-salt-products.jpg"
              }}
            />
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="text-[#7CB342] text-xl md:text-2xl">➤➤</div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
              Our mission is to provide our customers the optimum quality products with higher level of services. We are
              committed to deliver the best quality products through utmost focused approach. We are determined to
              provide quality products at competitive prices that exceed customer expectations and play a dominant role
              in the global market.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We are committed to educate and train associates in the important and best industries, ensuring they have
              the knowledge and skills to deliver exceptional service. Our dedication to excellence and customer
              satisfaction drives everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
