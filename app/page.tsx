import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import HeroSection from "@/components/home/hero-section"
import FeaturesSection from "@/components/home/features-section"
import ProductsSection from "@/components/home/products-section"
import MissionSection from "@/components/home/mission-section"
import ReviewsSection from "@/components/home/reviews-section"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <MissionSection />
        <ReviewsSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
