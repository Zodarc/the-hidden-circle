"use client";

import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "History", href: "/history" },
  { label: "Gallery", href: "/gallery" },
  { label: "Articles", href: "/articles" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#070707] border-t border-[#D4AF37]/10 overflow-hidden">

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">

          {/* Brand — 4 cols */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="group w-fit">
              <p className="font-heading text-2xl tracking-[0.32em] text-[#D4AF37] uppercase leading-none group-hover:text-[#e8c84a] transition-colors duration-300">
                The Hidden
              </p>
              <p className="font-heading text-[0.6rem] tracking-[0.65em] text-[#F5F5F5]/40 uppercase mt-1.5 group-hover:text-[#F5F5F5]/60 transition-colors duration-300">
                Circle
              </p>
            </Link>

            <div className="w-10 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent" />

            <p className="font-sans text-sm text-[#F5F5F5]/38 leading-[1.85] max-w-xs">
              An exclusive society of distinction, legacy, and purpose. Entry
              is earned. Legacy is built. Est. 1921.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-[#D4AF37]/18 text-[#F5F5F5]/35 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-all duration-300"
                >
                  <Icon size={13} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links — 2 cols */}
          <div className="md:col-span-2 md:col-start-6 flex flex-col gap-3.5">
            <p className="font-heading text-[0.6rem] tracking-[0.4em] text-[#D4AF37] uppercase mb-3">
              Navigate
            </p>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 font-sans text-sm text-[#F5F5F5]/40 hover:text-[#F5F5F5]/80 transition-colors duration-300"
              >
                <span className="w-0 h-px bg-[#D4AF37]/60 group-hover:w-3 transition-all duration-300" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* Legal links — 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-3.5">
            <p className="font-heading text-[0.6rem] tracking-[0.4em] text-[#D4AF37] uppercase mb-3">
              Legal
            </p>
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-2 font-sans text-sm text-[#F5F5F5]/40 hover:text-[#F5F5F5]/80 transition-colors duration-300"
              >
                <span className="w-0 h-px bg-[#D4AF37]/60 group-hover:w-3 transition-all duration-300" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA — 3 cols */}
          <div className="md:col-span-3 flex flex-col gap-5">
            <p className="font-heading text-[0.6rem] tracking-[0.4em] text-[#D4AF37] uppercase mb-1">
              Membership
            </p>
            <p className="font-sans text-sm text-[#F5F5F5]/38 leading-[1.85]">
              The Circle is not for everyone. If you believe you are worthy,
              make your request.
            </p>
            <Link
              href="/join"
              className="btn-ghost w-fit text-xs px-6 py-2.5 border-[#D4AF37]/45 hover:shadow-[0_4px_16px_-4px_rgba(212,175,55,0.25)]"
            >
              Request Entry
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#D4AF37]/08 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-[0.68rem] text-[#F5F5F5]/22 tracking-[0.08em]">
            © {new Date().getFullYear()} The Hidden Circle. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/30" />
            <p className="font-sans text-[0.68rem] text-[#F5F5F5]/22 tracking-[0.25em] uppercase">
              Est. 1921
            </p>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/30" />
          </div>
        </div>
      </div>
    </footer>
  );
}
