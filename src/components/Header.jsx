// Header.tsx
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Hamburger from "hamburger-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(36);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const measure = () => {
      const banner = document.getElementById("crisis-banner");
      if (banner) setBannerHeight(banner.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const resolveHref = (href) => {
    if (href.startsWith("#")) {
      return isHome ? href : `/${href}`;
    }
    return href;
  };

  const scrollToSection = (e, id) => {
    if (id.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      if (!isHome) {
        window.location.href = `/${id}`;
      } else {
        const element = document.querySelector(id);
        if (element) {
          const offsetPosition = element.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    } else if (id === "/") {
      e.preventDefault();
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsOpen(false);
    }
  };

  const navLinks = [
    ["/about", "About Us"],
    ["#mission", "Our Mission"],
    ["#help", "How to Help"],
    ["#contact", "Contact Us"],
  ];

  return (
    <header
      className="fixed w-full z-[100] bg-brand-dark text-brand-white font-brand isolate border-b border-white/5"
      style={{ top: bannerHeight }}
    >
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image src="/tree_white.svg" alt="Flare Initiative Logo" width={36} height={36} className="h-9 md:h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(([href, label]) => (
            <Link
              key={href}
              href={resolveHref(href)}
              onClick={(e) => scrollToSection(e, href)}
              className="text-sm font-medium text-white/60 cursor-pointer tracking-wide transition-colors duration-150 hover:text-white"
            >
              {label}
            </Link>
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

      <div
        className="fixed inset-0 z-[105] md:hidden bg-brand-dark"
        style={{
          clipPath: isOpen
            ? "circle(150% at calc(100% - 40px) 28px)"
            : "circle(0% at calc(100% - 40px) 28px)",
          transition: "clip-path 700ms cubic-bezier(0.77, 0, 0.175, 1)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl text-white font-light">
          {navLinks.map(([href, label]) => (
            <Link
              key={href}
              href={resolveHref(href)}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer font-brand-heading font-semibold text-white/80"
            >
              {label}
            </Link>
          ))}
          <div className="w-10 h-[1px] bg-white/15 my-2" />
<a href="tel:988" className="text-xs font-bold uppercase tracking-[0.25em] text-white/30 font-brand hover:text-white transition-colors">
              Call 988
            </a>
        </nav>
      </div>
    </header>
  );
}