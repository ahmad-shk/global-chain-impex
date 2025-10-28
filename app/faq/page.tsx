"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import BackToTop from "@/components/back-to-top"
import Breadcrumb from "@/components/breadcrumb"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What minerals are in Himalayan Pink Salt?",
      answer:
        "Himalayan Pink Salt contains 80+ minerals naturally, including Calcium, Iron, Potassium, and Magnesium. These minerals contribute to its unique pink color and health benefits.",
    },
    {
      question: "Is Himalayan Pink Salt healthier than regular table salt?",
      answer:
        "Yes, Himalayan Pink Salt is healthier than regular table salt. It contains more minerals and is less processed, making it a better choice for culinary and health purposes.",
    },
    {
      question: "Where is pink Himalayan salt mined or produced?",
      answer:
        "Pink Himalayan salt is mined from the Khewra Salt Mines in Pakistan, one of the largest salt mines in the world. Our salt is extracted with utmost care and integrity.",
    },
    {
      question: "How does Himalayan Pink Salt taste?",
      answer:
        "Himalayan Pink Salt has a slightly milder taste compared to regular table salt. It adds a subtle mineral flavor to dishes and is perfect for culinary applications.",
    },
    {
      question: "Can Himalayan Pink Salt help with health issues?",
      answer:
        "Himalayan Pink Salt can support various health benefits including improved hydration, better mineral balance, and respiratory health. However, consult a healthcare professional for specific health concerns.",
    },
    {
      question: "Is Himalayan Pink Salt environmentally friendly?",
      answer:
        "Yes, Himalayan Pink Salt is environmentally friendly. It is mined sustainably from ancient salt deposits and requires minimal processing, making it a sustainable choice.",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">
              Frequently Asked Questions
            </h1>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-fadeInUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                    <ChevronDown
                      size={24}
                      className={`text-[#7CB342] transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 animate-fadeInUp">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
