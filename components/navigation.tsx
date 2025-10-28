"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "All Categories", href: "/products" },
    { label: "Salt Items", href: "/products?category=salt" },
    { label: "Other Products", href: "/products?category=other" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-md animate-slideInDown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 md:w-10 h-9 md:h-10 bg-[#7CB342] rounded-full flex items-center justify-center text-white font-bold group-hover:animate-pulse-glow transition-all duration-300 text-xs md:text-sm">
              GCI
            </div>
            <span className="text-xs md:text-sm font-semibold text-gray-800 hidden sm:inline group-hover:text-[#7CB342] transition-colors">
              Global Chain Impex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs lg:text-sm font-medium text-gray-700 hover:text-[#7CB342] transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7CB342] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <a
            href="https://wa.me/923457860574"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-[#7CB342] text-white px-3 md:px-4 py-2 rounded-lg hover:bg-[#6ba035] transition-all duration-300 text-xs md:text-sm font-medium hover:shadow-lg hover:scale-105 flex-shrink-0"
          >
            <span className="hidden lg:inline">+923457860574</span>
            <span className="lg:hidden">Contact</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#7CB342] transition-colors flex-shrink-0"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fadeInUp">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-[#7CB342] hover:text-white rounded transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
