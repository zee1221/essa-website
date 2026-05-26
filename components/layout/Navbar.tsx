"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { EssaLogo } from "@/components/ui/EssaLogo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-essa-dark/95 backdrop-blur-xl border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <EssaLogo size={40} />
          <div className="flex flex-col leading-none">
            <span
              className="font-display text-2xl tracking-widest text-white"
              style={{ fontFamily: "Bebas Neue, serif" }}
            >
              ESSA
            </span>
            <span className="text-[9px] tracking-[0.2em] text-essa-yellow/80 uppercase font-mono hidden sm:block">
              Ethiopian Street Sports
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg transition-all duration-200 hover:bg-white/5 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/donate"
            className="px-5 py-2.5 bg-essa-green hover:bg-essa-green/90 text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-essa-green/25 hover:-translate-y-0.5"
          >
            Donate Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-essa-dark-2/98 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-white/5">
            <Link
              href="/donate"
              className="block w-full text-center px-5 py-3 bg-essa-green text-white font-semibold rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
