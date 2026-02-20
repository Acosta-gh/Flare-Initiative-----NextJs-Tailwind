"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setIsOpen(false);

    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(id);
    if (element) {
      const offset = 100;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const navLinks = [
    ["#about", "About Us"],
    ["#mission", "Our Mission"],
    ["#help", "How to Help"],
    ["#contact", "Contact Us"],
  ];

  return (
    <header className="fixed top-[40px] w-full z-[100] bg-brand-dark text-brand-white font-brand isolate">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="/tree_white.svg" alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-10 font-medium">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="hover:text-brand-orange transition-colors cursor-pointer"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="md:hidden z-[110] relative isolate">
          <Hamburger
            toggled={isOpen}
            toggle={() => setIsOpen((o) => !o)}
            size={24}
            color="var(--color-brand-white)"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[105] md:hidden transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] bg-brand-orange ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        style={{ clipPath: isOpen ? "circle(150% at 100% 0%)" : "circle(0% at 100% 0%)" }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white font-light">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => scrollToSection(e, href)}
              className="cursor-pointer hover:text-white/80 transition-colors"
            >
              {label}
            </a>
          ))}
          <div className="w-12 h-[1px] bg-white/30 my-4" />
          <p className="text-sm font-bold uppercase tracking-widest">Call 9-8-8 for help</p>
        </nav>
      </div>
    </header>
  );
}