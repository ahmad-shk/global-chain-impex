"use client"

import type React from "react"
import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="bg-gradient-to-r from-[#7CB342] to-[#6ba035] py-12 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1 animate-fadeInUp">
            <h2 className="text-3xl font-bold mb-2">Subscribe to Our Newsletter</h2>
            <p className="text-green-50">Get updates on new products and special offers</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 flex gap-2 animate-fadeInUp"
            style={{ animationDelay: "100ms" }}
          >
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-3 text-gray-300" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white transition-all"
              />
            </div>
            <button
              type="submit"
              className="bg-white text-[#7CB342] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>

        {submitted && (
          <div className="mt-4 flex items-center justify-center gap-2 text-green-50 animate-fadeInUp">
            <CheckCircle size={20} />
            <span>Thank you for subscribing!</span>
          </div>
        )}
      </div>
    </section>
  )
}
