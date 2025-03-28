"use client"

import { useEffect, useState, useRef } from "react"

export default function SocialIcons() {
  const [isMobile, setIsMobile] = useState(false)
  const [showMobileIcons, setShowMobileIcons] = useState(true)
  const contactRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Find the contact section
    contactRef.current = document.getElementById("contact")

    // Set up intersection observer to detect when user scrolls past contact section
    if (contactRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          // If contact section is intersecting (visible), hide mobile icons
          // Otherwise, show them
          const [entry] = entries
          setShowMobileIcons(!entry.isIntersecting)
        },
        {
          // Adjust the rootMargin to trigger when the bottom of the contact section
          // is at the bottom of the viewport
          rootMargin: "0px 0px -100% 0px",
          threshold: 0,
        },
      )

      observer.observe(contactRef.current)

      return () => {
        if (contactRef.current) {
          observer.unobserve(contactRef.current)
        }
        window.removeEventListener("resize", checkMobile)
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const socialLinks = [
    {
      title: "Twitter",
      link: "https://x.com/ArifKayes67910?t=buAfAQLajtphY5qp7ZZyHQ&s=09",
      icon: (
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      ),
    },
    {
      title: "Instagram",
      link: "https://www.instagram.com/arifbenkayes?igsh=MTkyeXMycHg3Y2Z3Zw==",
      icon: (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      ),
    },
    {
      title: "Facebook",
      link: "https://www.facebook.com/arifben.kayes",
      icon: (
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      ),
    },
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/ab-kayes-5b8359232",
      icon: (
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      ),
    },
    {
      title: "Github",
      link: "https://github.com/AB-Kayes",
      icon: (<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      ),
    }
  ]

  return (
    <>
      {/* Desktop social icons */}
      <div className="social-visible fixed top-1/4 right-1 p-1.5 gap-2 z-40 backdrop-blur-sm rounded-2xl bg-foreground/5 hidden sm:grid">
        {socialLinks.map((link, index) => (
          <a href={link.link} key={index} className="social-icon-link" style={{animationDelay: `${index * 0.1}s`,}} target="_blank" rel="noreferrer">
            <svg
              className={`${link.title} overflow-visible block w-11 rounded-lg p-2 fill-foreground duration-200`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {link.icon}
            </svg>
          </a>
        ))}
      </div>

      {/* Mobile social icons - with animation */}
      {isMobile && (
        <div
          className={`fixed bottom-0 left-0 right-0 flex justify-center gap-4 p-2 z-100 backdrop-blur-sm bg-foreground/5 sm:hidden mobile-social-container ${
            showMobileIcons ? "social-visible" : "social-hidden"
          }`}
        >
          {socialLinks.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className={`social-icon-link social-icon-${index}`}
              target="_blank"
              style={{animationDelay: `${index * 0.1}s`,}}
              rel="noreferrer"
            >
              <svg
                className={`${link.title} overflow-visible block w-8 rounded-lg p-2 fill-foreground duration-200`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {link.icon}
              </svg>
            </a>
          ))}
        </div>
      )}
    </>
  )
}

