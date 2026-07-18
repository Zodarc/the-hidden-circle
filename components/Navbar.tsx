"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Gallery", href: "/gallery" },
  { label: "Articles", href: "/articles" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0B0B0B]/90 backdrop-blur-xl border-b border-[#D4AF37]/15 shadow-[0_1px_0_0_rgba(212,175,55,0.08),0_20px_40px_-10px_rgba(0,0,0,0.8)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-[72px] lg:h-[80px]">

          {/* Logo */}
          <Link href="/" className="group flex flex-col leading-none select-none">
            <span className="font-heading text-lg lg:text-xl tracking-[0.32em] text-[#D4AF37] uppercase group-hover:text-[#e8c84a] transition-colors duration-300">
              The Hidden
            </span>
            <span className="font-heading text-[0.6rem] tracking-[0.65em] text-[#F5F5F5]/50 uppercase group-hover:text-[#F5F5F5]/80 transition-colors duration-300 mt-0.5">
              Circle
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9" role="navigation" aria-label="Primary">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-300 group py-1 ${
                    active
                      ? "text-[#D4AF37]"
                      : "text-[#F5F5F5]/60 hover:text-[#F5F5F5]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-[#D4AF37] transition-all duration-300 ease-out ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/join"
              className={`ml-3 px-6 py-2.5 border font-heading text-[0.65rem] tracking-[0.28em] uppercase transition-all duration-300 ${
                isActive("/join")
                  ? "bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0B]"
                  : "border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0B0B0B] hover:shadow-[0_4px_16px_-4px_rgba(212,175,55,0.35)]"
              }`}
            >
              Join
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#F5F5F5]/70 hover:text-[#D4AF37] transition-colors duration-300"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {menuOpen ? (
                  <X size={22} strokeWidth={1.5} />
                ) : (
                  <Menu size={22} strokeWidth={1.5} />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-0 lg:hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />

            <nav className="flex flex-col items-center gap-1 mb-10" aria-label="Mobile navigation">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: "easeOut" }}
                  >
                    <Link
                      href={link.href}
                      className={`block font-heading text-2xl md:text-3xl tracking-[0.25em] uppercase transition-colors duration-300 py-3 px-8 ${
                        active ? "text-[#D4AF37]" : "text-[#F5F5F5]/80 hover:text-[#D4AF37]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ delay: navLinks.length * 0.06 + 0.05, duration: 0.4 }}
            >
              <Link
                href="/join"
                className="btn-ghost px-12 py-4 text-sm tracking-[0.35em]"
              >
                Request Entry
              </Link>
            </motion.div>

            <div className="absolute bottom-10 flex items-center gap-3 opacity-30">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]" />
              <div className="w-8 h-px bg-[#D4AF37]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
