"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import BackToTop from "@/components/back-to-top"
import Breadcrumb from "@/components/breadcrumb"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />

            <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fadeInUp">Get In Touch</h1>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-8 animate-fadeInUp">
                {/* Phone Section */}
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex gap-4 items-start">
                    <Phone className="w-8 h-8 text-[#7CB342] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">Phone</h3>
                      <div className="space-y-3">
                        <a
                          href="https://wa.me/923003002944"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 hover:border-green-400 transition-all duration-300 text-gray-700 font-medium hover:text-green-700"
                        >
                          Syed Naqvi: +923003002944 (WhatsApp)
                        </a>
                        <a
                          href="https://wa.me/923457860574"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-green-50 border-2 border-green-200 rounded-lg hover:bg-green-100 hover:border-green-400 transition-all duration-300 text-gray-700 font-medium hover:text-green-700"
                        >
                          M Jamil: +923457860574 (WhatsApp)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Section */}
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex gap-4 items-start">
                    <Mail className="w-8 h-8 text-[#7CB342] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">Email</h3>
                      <a
                        href="mailto:globalchainimpex@gmail.com"
                        className="block p-3 bg-blue-50 border-2 border-blue-200 rounded-lg hover:bg-blue-100 hover:border-blue-400 transition-all duration-300 text-gray-700 font-medium hover:text-blue-700"
                      >
                        globalchainimpex@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Address Section */}
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex gap-4 items-start">
                    <MapPin className="w-8 h-8 text-[#7CB342] flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-4 text-lg">Address</h3>
                      <div className="space-y-3">
                        <a
                          href="https://maps.google.com/?q=Office+9,+Street+14,+Sector+C,+Bahria+Enclave,+Islamabad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-red-50 border-2 border-red-200 rounded-lg hover:bg-red-100 hover:border-red-400 transition-all duration-300 text-gray-700 font-medium hover:text-red-700"
                        >
                          Address 1 - Office 9, Street 14, Sector C, Bahria Enclave, Islamabad
                        </a>
                        <a
                          href="https://maps.google.com/?q=Office+7,+Faisal+Market+Near+Bhatta+chowk,+Cantt+Lahore"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 bg-red-50 border-2 border-red-200 rounded-lg hover:bg-red-100 hover:border-red-400 transition-all duration-300 text-gray-700 font-medium hover:text-red-700"
                        >
                          Address 2 - Office # 7, Faisal Market Near Bhatta chowk, Cantt Lahore
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
