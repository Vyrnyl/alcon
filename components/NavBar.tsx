"use client";
import { useState } from "react";
import ArchitectureIcon from '@mui/icons-material/Architecture';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Mission", href: "#mission" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-primary p-1.5 rounded">
            <ArchitectureIcon className="text-black text-2xl" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">
            AlCon
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest min-h-[44px] flex items-center px-2"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:flex bg-primary text-black px-6 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-primary/10 min-h-[44px] items-center"
          >
            Request Quote
          </a>
          <button
            className="lg:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-background-dark/95 backdrop-blur-xl border-b border-border-dark px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-lg font-bold hover:text-primary transition-colors uppercase tracking-widest py-3 border-b border-border-dark/50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full bg-primary text-black py-4 rounded-xl font-black text-center uppercase tracking-widest mt-6"
          >
            Request Quote
          </a>
        </div>
      )}
    </nav>
  );
}
