"use client"

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { reviewsData } from "@/lib/data/reviews"

const REVIEWS_PER_PAGE_DESKTOP = 5
const REVIEWS_PER_PAGE_TABLET = 3
const REVIEWS_PER_PAGE_MOBILE = 1

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoScroll, setAutoScroll] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const reviewsPerPage = isMobile
    ? REVIEWS_PER_PAGE_MOBILE
    : isTablet
      ? REVIEWS_PER_PAGE_TABLET
      : REVIEWS_PER_PAGE_DESKTOP
  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage)

  useEffect(() => {
    if (!autoScroll) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoScroll, totalPages])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
    setAutoScroll(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
    setAutoScroll(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setAutoScroll(false)
  }

  const visibleReviews = reviewsData.slice(currentIndex * reviewsPerPage, (currentIndex + 1) * reviewsPerPage)

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex justify-center mb-4">
            <span className="text-[#7CB342] text-2xl animate-float">➤➤</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 animate-slideInDown">Customer Reviews</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Reviews Grid - Responsive display */}
          <div
            className={`grid gap-4 ${
              isMobile
                ? "grid-cols-1"
                : isTablet
                  ? "grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
            } px-4 sm:px-8 md:px-12`}
          >
            {visibleReviews.map((review) => (
              <div key={review.id} className="animate-fadeInUp">
                <div className="bg-white rounded-lg p-4 md:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm flex-1">{review.text}</p>
                  <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
          {!isMobile && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-6 bg-[#7CB342] text-white p-2 rounded-full hover:bg-[#6ba035] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 z-10"
                aria-label="Previous reviews"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-6 bg-[#7CB342] text-white p-2 rounded-full hover:bg-[#6ba035] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 z-10"
                aria-label="Next reviews"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 md:mt-8 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#7CB342] w-6 md:w-8" : "bg-gray-300 w-2 md:w-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to review page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
