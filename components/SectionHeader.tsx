"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  viewAllHref,
  viewAllLabel = "View All",
  center = true,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div
      ref={ref}
      className={`mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 ${
        center && !viewAllHref ? "items-center text-center" : ""
      }`}
    >
      <div className={center && !viewAllHref ? "text-center" : ""}>
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-eyebrow"
          >
            {eyebrow}
          </motion.p>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="section-title mb-3"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={inView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`gold-divider ${center && !viewAllHref ? "mx-auto" : ""}`}
        />

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans text-sm md:text-base text-[#F5F5F5]/45 leading-[1.85] max-w-2xl mt-5"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {viewAllHref && (
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0"
        >
          <Link
            href={viewAllHref}
            className="group inline-flex items-center gap-2.5 font-heading text-[0.65rem] tracking-[0.28em] text-[#D4AF37] uppercase border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-colors duration-300"
          >
            {viewAllLabel}
            <motion.span
              className="inline-flex"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ArrowRight size={13} strokeWidth={1.5} />
            </motion.span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
