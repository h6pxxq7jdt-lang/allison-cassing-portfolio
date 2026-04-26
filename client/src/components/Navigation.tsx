/**
 * Navigation — Warm Research Studio
 * Sticky top nav: transparent → navy on scroll
 * Logo: "AC" monogram + name | Links: smooth scroll anchors
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location === "/";

  const navLinks = isHome
    ? [
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Case Study", href: "#case-study-preview" },
      ]
    : [{ label: "← Back to Portfolio", href: "/" }];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#2C3A52] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-[#C4A882] flex items-center justify-center">
            <span className="font-['Cormorant_Garamond'] font-bold text-[#2C3A52] text-sm tracking-wider">
              AC
            </span>
          </div>
          <span className="font-['Source_Sans_3'] text-white text-sm font-medium tracking-wide opacity-90 group-hover:opacity-100 transition-opacity">
            Allison Cassing
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-['Source_Sans_3'] text-sm text-white/80 hover:text-[#C4A882] transition-colors tracking-wide"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-['Source_Sans_3'] text-sm text-white/80 hover:text-[#C4A882] transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1">
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#2C3A52] border-t border-white/10 px-6 pb-4">
          {navLinks.map((link) =>
            link.href.startsWith("#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left py-3 font-['Source_Sans_3'] text-sm text-white/80 hover:text-[#C4A882] transition-colors border-b border-white/10 last:border-0"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 font-['Source_Sans_3'] text-sm text-white/80 hover:text-[#C4A882] transition-colors border-b border-white/10 last:border-0"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </header>
  );
}
