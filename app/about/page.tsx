import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import Breadcrumb from "@/components/breadcrumb"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />

            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">About Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fadeInUp">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Global Chain Impex</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Global Chain Impex (Pvt) Limited is a leading supplier of premium Himalayan Pink Salt and organic
                  products. We are committed to delivering the highest quality products with exceptional customer
                  service.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our salt is mined from the Khewra Salt Mines in Pakistan, one of the most precious mineral sources in
                  the world. We ensure that every product meets the highest standards of purity and quality.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With offices in Islamabad and Lahore, we serve customers across Pakistan and internationally,
                  providing reliable supply chain solutions and premium quality products.
                </p>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "100ms" }}>
                <img
                  src="/himalayan-salt-mines.jpg"
                  alt="About Global Chain Impex"
                  className="rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md animate-fadeInUp" style={{ animationDelay: "200ms" }}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Certified Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Edible Himalayan Salt",
                  "Animal Licking Salt",
                  "De Icing Salt",
                  "Salt Decoration Items",
                  "Big Rocks",
                  "Rock Salt",
                  "Salt Slabs",
                  "Fruits & Vegetables",
                  "Leather Products",
                ].map((product, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 hover:translate-x-1 transition-transform duration-300"
                  >
                    <span className="text-[#7CB342] font-bold">✓</span>
                    <span className="text-gray-700">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
