"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Star, X, ZoomIn, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import { productsData } from "@/lib/data/products"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const productId = Number.parseInt(params.id)
  const product = productsData.find((p) => p.id === productId) || productsData[0]
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [zoomedImage, setZoomedImage] = useState<string | null>(null)
  const [expandedSection, setExpandedSection] = useState<"description" | "reviews" | null>("description")
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Ahmed Khan",
      rating: 5,
      text: "Excellent quality salt! Very satisfied with the purchase.",
      date: "2024-10-15",
    },
    {
      id: 2,
      author: "Fatima Ali",
      rating: 5,
      text: "Best product I've ever used. Highly recommended!",
      date: "2024-10-10",
    },
    {
      id: 3,
      author: "Hassan Malik",
      rating: 4,
      text: "Good quality, fast delivery. Will order again.",
      date: "2024-10-05",
    },
  ])
  const [newReview, setNewReview] = useState({ author: "", rating: 5, text: "" })
  const [showReviewForm, setShowReviewForm] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  const handleSubmitReview = () => {
    if (newReview.author && newReview.text) {
      const review = {
        id: reviews.length + 1,
        author: newReview.author,
        rating: newReview.rating,
        text: newReview.text,
        date: new Date().toISOString().split("T")[0],
      }
      setReviews([review, ...reviews])
      setNewReview({ author: "", rating: 5, text: "" })
      setShowReviewForm(false)
    }
  }

  const relatedProducts = productsData.filter((p) => p.type === product.type && p.id !== product.id).slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 animate-fadeInUp">
              {/* Product Image Gallery */}
              <div className="space-y-4">
                {/* Main Image */}
                <div className="relative bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                  <img
                    src={product.images[selectedImageIndex] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-auto rounded-lg cursor-zoom-in hover:scale-105 transition-transform duration-300"
                    onClick={() => setZoomedImage(product.images[selectedImageIndex])}
                  />
                  <button
                    onClick={() => setZoomedImage(product.images[selectedImageIndex])}
                    className="absolute top-4 right-4 bg-[#7CB342] text-white p-2 rounded-full hover:bg-[#6ba035] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <ZoomIn size={20} />
                  </button>
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImageIndex === index
                          ? "border-[#7CB342] shadow-lg scale-105"
                          : "border-gray-300 hover:border-[#7CB342]"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slideInDown">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex gap-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className="fill-yellow-400 text-yellow-400 animate-float"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">({reviews.length} customer reviews)</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

                <div className="flex flex-col gap-4 mb-8">
                  <a
                    href="https://wa.me/923457860574"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Description and Reviews Tabs */}
            <div className="mb-12 space-y-4">
              {/* Description Section */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === "description" ? null : "description")}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
                  <ChevronDown
                    size={24}
                    className={`text-[#7CB342] transition-transform duration-300 ${
                      expandedSection === "description" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === "description" && (
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed mb-4">{product.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <span className="text-[#7CB342] font-bold text-lg flex-shrink-0">✓</span>
                          <p className="text-gray-600">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Reviews Section */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedSection(expandedSection === "reviews" ? null : "reviews")}
                  className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors duration-200"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Customer Reviews ({reviews.length})</h2>
                  <ChevronDown
                    size={24}
                    className={`text-[#7CB342] transition-transform duration-300 ${
                      expandedSection === "reviews" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedSection === "reviews" && (
                  <div className="px-6 pb-6 border-t border-gray-200 space-y-6">
                    {/* Submit Review Button */}
                    <button
                      onClick={() => setShowReviewForm(!showReviewForm)}
                      className="w-full bg-[#7CB342] text-white py-3 rounded-lg font-semibold hover:bg-[#6ba035] transition-all duration-300"
                    >
                      {showReviewForm ? "Cancel" : "Submit a Review"}
                    </button>

                    {/* Review Form */}
                    {showReviewForm && (
                      <div className="bg-gray-50 p-6 rounded-lg space-y-4 border-2 border-[#7CB342]">
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                          <input
                            type="text"
                            value={newReview.author}
                            onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7CB342]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Rating</label>
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                className="transition-transform duration-200 hover:scale-110"
                              >
                                <Star
                                  size={28}
                                  className={`${
                                    star <= newReview.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-900 mb-2">Your Review</label>
                          <textarea
                            value={newReview.text}
                            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                            placeholder="Share your experience with this product..."
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#7CB342]"
                          />
                        </div>
                        <button
                          onClick={handleSubmitReview}
                          className="w-full bg-[#7CB342] text-white py-2 rounded-lg font-semibold hover:bg-[#6ba035] transition-all duration-300"
                        >
                          Post Review
                        </button>
                      </div>
                    )}

                    {/* Reviews List */}
                    <div className="space-y-4">
                      {reviews.map((review) => (
                        <div key={review.id} className="border-l-4 border-[#7CB342] pl-4 py-2">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900">{review.author}</h3>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                          <div className="flex gap-1 mb-2">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <p className="text-gray-600">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Benefits Section */}
            <div
              className="bg-white rounded-lg p-8 shadow-md mb-12 animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300"
                  >
                    <span className="text-[#7CB342] font-bold text-lg">✓</span>
                    <p className="text-gray-600">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Products */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <a
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.id}`}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="aspect-square overflow-hidden bg-gray-200">
                      <img
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900">{relatedProduct.name}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Zoom Modal */}
      {zoomedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <img
              src={zoomedImage || "/placeholder.svg"}
              alt="Zoomed product"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-12 -right-12 bg-white text-black p-3 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
            >
              <X size={28} />
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
