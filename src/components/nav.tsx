"use client"

import { useState } from "react"
import { Download, Menu, X } from "lucide-react"

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { title: "Home", link: "#intro" },
    { title: "About", link: "#about" },
    { title: "Experience", link: "#experience" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" },
  ]

  const handleMobileClick = () => {
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="flex w-full justify-between fixed top-0 h-16 px-4 sm:px-6 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        {/* Logo */}
        <div className="my-auto">
          <a className="flex items-center gap-2.5" href="#intro">
            <img src="/img/Profile2.png" alt="AB.Kayes" className="w-9 sm:w-10 rounded-full" />
            <span className="font-bold uppercase text-base sm:text-lg tracking-tight">AB.Kayes</span>
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((navLink) => (
            <a
              key={navLink.title}
              href={navLink.link}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              {navLink.title}
            </a>
          ))}
          <div className="w-px h-5 bg-border mx-2" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-muted transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 right-0 z-50 w-64 h-[calc(100vh-4rem)] bg-background border-l border-border shadow-lg transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 gap-1">
          {navLinks.map((navLink) => (
            <a
              key={navLink.title}
              href={navLink.link}
              onClick={handleMobileClick}
              className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors"
            >
              {navLink.title}
            </a>
          ))}
          <div className="w-full h-px bg-border my-2" />
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium bg-foreground text-background rounded-md hover:bg-foreground/90 transition-colors"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16" />
    </>
  )
}
