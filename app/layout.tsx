import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Global Chain Impex - Premium Himalayan Pink Salt",
  description:
    "Premium Himalayan Pink Salt and organic products from Global Chain Impex. Quality salt products from Khewra Salt Mines Pakistan.",
  keywords: "Himalayan Pink Salt, Salt Products, Organic Products, Pakistan",
  authors: [{ name: "Global Chain Impex" }],
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
