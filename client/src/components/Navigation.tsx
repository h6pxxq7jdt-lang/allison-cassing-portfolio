/**
 * Navigation — Clean Editorial Minimal
 * Centered nav with thin horizontal rules on each side
 * Links: small caps, letter-spaced
 * No background until scrolled (then white with subtle shadow)
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const isHome = location === "/";
  const isCaseStudy = location === "/case-study";

  const homeLinks: NavLink[] = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/allison-cassing/", external: true },
  ];

  const subLinks: NavLink[] = [
    { label: "Work", href: "/" },
    { label: "About", href: "/#about" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/allison-cassing/", external: true },
  ];

  const navLinks = isHome ? homeLinks : subLinks;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Track scroll for background
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle hash navigation from other pages (e.g. /resume -> /#about)
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_#e5e5e5]" : "border-b border-[#e5e5e5]"
      }`}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex items-center justify-between py-5">
          {/* Left rule */}
          <div className="hidden md:block flex-1 h-px bg-[#e5e5e5]" />

          {/* Desktop Nav — centered */}
          <nav className="hidden md:flex items-center gap-10 px-10">
            {navLinks.map((link) => {
              const isActive =
                (link.href === "/" && isHome) ||
                (link.href === "/case-study" && isCaseStudy);

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] tracking-[0.15em] uppercase font-medium transition-colors text-[#1a1a1a] hover:text-[#B8956A]"
                  >
                    {link.label}
                  </a>
                );
              }
              if (link.href.startsWith("#")) {
                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-[11px] tracking-[0.15em] uppercase font-medium transition-colors ${
                      isActive
                        ? "text-[#B8956A]"
                        : "text-[#1a1a1a] hover:text-[#B8956A]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] tracking-[0.15em] uppercase font-medium transition-colors ${
                    isActive
                      ? "text-[#B8956A]"
                      : "text-[#1a1a1a] hover:text-[#B8956A]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right rule */}
          <div className="hidden md:block flex-1 h-px bg-[#e5e5e5]" />

          {/* Mobile: name + hamburger */}
          <div className="flex md:hidden items-center justify-between w-full">
            <Link href="/" className="text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a]">
              Allison Cassing
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-[#1a1a1a]"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span className={`block h-px bg-[#1a1a1a] transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-px bg-[#1a1a1a] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-px bg-[#1a1a1a] transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#e5e5e5] bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors border-b border-[#f0f0f0] last:border-0"
                >
                  {link.label}
                </a>
              ) : link.href.startsWith("#") ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors border-b border-[#f0f0f0] last:border-0"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-[11px] tracking-[0.15em] uppercase font-medium text-[#1a1a1a] hover:text-[#B8956A] transition-colors border-b border-[#f0f0f0] last:border-0"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
