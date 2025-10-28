import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#7CB342] rounded-full flex items-center justify-center text-white font-bold">
                GCI
              </div>
              <span className="font-semibold">Global Chain Impex</span>
            </div>
            <p className="text-gray-400 text-sm">
              We are proud to have a keen focus on exceptional customer service and premium quality supply chain
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#7CB342] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-[#7CB342] font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/products?category=salt" className="hover:text-white transition-colors">
                  Salt Items
                </Link>
              </li>
              <li>
                <Link href="/products?category=other" className="hover:text-white transition-colors">
                  Other Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#7CB342] font-semibold mb-4">Contact US</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-[#7CB342]">📞</span>
                <a
                  href="https://wa.me/923457860574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:text-[#7CB342] transition-colors"
                >
                  +923457860574
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7CB342]">✉️</span>
                <a
                  href="mailto:globalchainimpex@gmail.com"
                  className="hover:text-white hover:text-[#7CB342] transition-colors"
                >
                  globalchainimpex@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#7CB342]">📍</span>
                <a
                  href="https://maps.google.com/?q=Office+9,+Street+14,+Sector+C,+Bahria+Enclave,+Islamabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:text-[#7CB342] transition-colors"
                >
                  Office 9, Street 14, Sector C, Bahria Enclave, Islamabad
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 Global Chain Impex. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-[#7CB342] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#7CB342] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
