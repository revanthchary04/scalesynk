"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Projects", "Contact", "Services", "About Us", "Blogs"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wide">
          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
            <div className="w-4 h-4 bg-white rotate-45"></div>
          </div>
          Elevate
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center bg-white/10 backdrop-blur-sm rounded-full px-8 py-3 gap-8 text-sm font-medium text-white/90 border border-white/10">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
          <span className="text-white/40">|</span>
          <a href="#" className="hover:text-white transition-colors">
            Cart (0)
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-slate-100 transition-colors">
            Contact us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-white/80 text-lg py-2 border-b border-white/5"
            >
              {item}
            </a>
          ))}
          <button className="bg-white text-slate-900 px-6 py-3 rounded-full font-bold mt-4">
            Contact us
          </button>
        </div>
      )}
    </nav>
  );
}
