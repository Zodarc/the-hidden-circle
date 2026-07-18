"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  /** Optional right-side decorative element — forces two-column layout */
  ornament?: React.ReactNode;
  /** Tighter vertical padding for inner pages */
  compact?: boolean;
  /** Centre all text (used when no ornament is present) */
  center?: boolean;
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  ornament,
  compact = false,
  center = false,
}: PageHeroProps) {
  // If no ornament, default to centred unless caller explicitly passes center={false}
  const isCentered = center || !ornament;

  return (
    <section
      className={`relative w-full overflow-hidden bg-[#0B0B0B] ${
        compact ? "pt-32 pb-16 md:pt-36 md:pb-20" : "pt-36 pb-20 md:pt-44 md:pb-28"
      }`}
    >
      {/* Architectural grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#D4AF37]" />
        <div className="absolute left-[12%] top-0 bottom-0 w-px bg-[#D4AF37]" />
        <div className="absolute right-[12%] top-0 bottom-0 w-px bg-[#D4AF37]" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <motion.nav
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className={`flex items-center gap-2 mb-8 ${isCentered ? "justify-center" : ""}`}
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="font-sans text-[0.65rem] tracking-[0.2em] text-[#F5F5F5]/35 uppercase hover:text-[#D4AF37] transition-colors duration-200"
            >
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight size={10} className="text-[#D4AF37]/40" />
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="font-sans text-[0.65rem] tracking-[0.2em] text-[#F5F5F5]/35 uppercase hover:text-[#D4AF37] transition-colors duration-200"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-sans text-[0.65rem] tracking-[0.2em] text-[#D4AF37] uppercase">
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </motion.nav>
        )}

        {/* ── Centred layout (no ornament) ──────────────── */}
        {isCentered && (
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
              className="w-12 h-px bg-[#D4AF37] mb-6"
            />

            {eyebrow && (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
                className="section-eyebrow"
              >
                {eyebrow}
              </motion.p>
            )}

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
              className="font-heading text-[clamp(2.2rem,5vw,4rem)] tracking-[0.1em] text-[#F5F5F5] uppercase leading-[1.1] mb-6"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.45}
                className="font-sans text-base md:text-lg text-[#F5F5F5]/50 leading-[1.85]"
              >
                {subtitle}
              </motion.p>
            )}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.55}
              className="flex items-center gap-3 mt-8"
            >
              <div className="w-8 h-px bg-[#D4AF37]/50" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]/60" />
              <div className="w-8 h-px bg-[#D4AF37]/50" />
            </motion.div>
          </div>
        )}

        {/* ── Two-column layout (with ornament) ─────────── */}
        {!isCentered && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
                className="w-12 h-px bg-[#D4AF37] mb-6"
              />

              {eyebrow && (
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.2}
                  className="section-eyebrow"
                >
                  {eyebrow}
                </motion.p>
              )}

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
                className="font-heading text-[clamp(2.2rem,5vw,4rem)] tracking-[0.1em] text-[#F5F5F5] uppercase leading-[1.1] mb-6"
              >
                {title}
              </motion.h1>

              {subtitle && (
                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.45}
                  className="font-sans text-base md:text-lg text-[#F5F5F5]/50 leading-[1.85] max-w-xl"
                >
                  {subtitle}
                </motion.p>
              )}

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.55}
                className="flex items-center gap-3 mt-8"
              >
                <div className="w-8 h-px bg-[#D4AF37]/50" />
                <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]/60" />
                <div className="w-8 h-px bg-[#D4AF37]/50" />
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.4}
              className="hidden lg:flex items-center justify-center"
            >
              {ornament}
            </motion.div>
          </div>
        )}
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
    </section>
  );
}
