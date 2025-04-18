
"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

type NavItem = {
  title: string
  href: string
}

const navItems: NavItem[] = [
  { title: "Accueil", href: "/" },
  { title: "À Propos", href: "/apropos" },
  { title: "Projets", href: "/projets" },
  { title: "Veille Technologique", href: "/veille" },
  { title: "Contact", href: "/contact" },
]

export function Navigation({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-portfolioPrimary/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4",
        className
      )}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className="font-montserrat font-bold text-xl text-portfolioSecondary hover:text-portfolioAccent transition-colors"
        >
          Aslan Gokhan
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="font-montserrat text-portfolioSecondary hover:text-portfolioAccent transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-portfolioSecondary hover:text-portfolioAccent transition-colors"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <nav className="md:hidden fixed inset-0 top-16 bg-portfolioPrimary/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="font-montserrat text-2xl text-portfolioSecondary hover:text-portfolioAccent transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
