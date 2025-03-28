import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import { GoogleAnalytics } from "@next/third-parties/google"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "AB.Kayes – Full-Stack Developer",
  description: "Experienced full-stack developer specializing in Next.js, React.js, TypeScript, JavaScript, MongoDB, and Express.js. Building scalable and high-performance web applications.",
  generator: "Next.js"
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/Profile2.png" sizes="any" />
      </head>
      <body className={`${poppins.className} antialiased text-foreground`} suppressHydrationWarning={true}>
        <Nav />
        {children}
        <Footer />
        <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
      </body>
    </html>
  )
}



import './globals.css'