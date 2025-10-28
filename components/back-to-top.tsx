"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#7CB342] text-white p-3 rounded-full shadow-lg hover:bg-[#6ba035] transition-all duration-300 hover:scale-110 animate-fadeInUp z-40"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}
