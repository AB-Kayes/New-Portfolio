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
  metadataBase: new URL("https://ab-kayes.dev"),
  title: {
    default: "AB.Kayes — Full-Stack Developer",
    template: "%s | AB.Kayes",
  },
  description:
    "Full-Stack Engineer with 5+ years of freelance and agency experience building and shipping production web platforms, SaaS products, and AI-powered systems. Specializing in React, Next.js, Spring Boot, NestJS, and FastAPI. Seeking remote full-stack roles.",
  keywords: [
    "Full-Stack Developer",
    "Full-Stack Engineer",
    "React Developer",
    "React Flow",
    "Next.js Developer",
    "TypeScript",
    "Java",
    "Spring Boot",
    "NestJS",
    "FastAPI",
    "Python",
    "AI Integration",
    "Multi-Tenant SaaS",
    "Remote Developer",
  ],
  authors: [{ name: "AB.Kayes", url: "https://ab-kayes.dev" }],
  creator: "AB.Kayes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ab-kayes.dev",
    siteName: "AB.Kayes — Full-Stack Developer",
    title: "AB.Kayes — Full-Stack Developer & SaaS Builder",
    description:
      "Full-Stack Engineer with 5+ years of freelance and agency experience building production web platforms, SaaS products, and AI integrations.",
    images: [
      {
        url: "/img/portfolio.png",
        width: 1200,
        height: 630,
        alt: "AB.Kayes — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AB.Kayes — Full-Stack Developer & SaaS Builder",
    description:
      "Full-Stack Engineer with 5+ years of freelance and agency experience building production web platforms, SaaS products, and AI integrations.",
    images: ["/img/portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ab-kayes.dev",
  },
}

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
      <body className={`${poppins.variable} font-sans antialiased text-foreground bg-background`} suppressHydrationWarning>
        <Nav />
        <main>{children}</main>
        <Footer />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
