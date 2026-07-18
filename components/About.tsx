"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden"
    >
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="text-center mb-20 md:mb-28"
        >
          <p className="section-eyebrow">Who We Are</p>
          <h2 className="section-title">About The Circle</h2>
          <div className="gold-divider mx-auto mt-2" />
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — orbital emblem */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
            className="relative flex items-center justify-center order-last lg:order-first"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

              {/* Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#D4AF37]/15"
              />
              <div className="absolute inset-5 rounded-full border border-[#D4AF37]/25" />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="absolute inset-11 rounded-full border border-[#D4AF37]/20"
              />
              <div className="absolute inset-[4.5rem] rounded-full border border-[#D4AF37]/10" />

              {/* Cardinal diamonds */}
              {[
                "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
                "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
                "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
              ].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-2 h-2 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]`}
                />
              ))}

              {/* Centre monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="font-heading text-5xl md:text-6xl text-[#D4AF37] leading-none tracking-widest">T</p>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-2.5" />
                  <p className="font-heading text-[0.55rem] tracking-[0.5em] text-[#F5F5F5]/40 uppercase">
                    Hidden Circle
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <div className="flex flex-col gap-7">
            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={2}
              className="font-sans text-base md:text-lg text-[#F5F5F5]/70 leading-[1.85]"
            >
              The Hidden Circle is an invitation-only society built upon the pillars of
              excellence, discretion, and mutual elevation. Founded in the belief that
              true distinction is cultivated, not inherited, we bring together individuals
              who shape culture, commerce, and community.
            </motion.p>

            <motion.p
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3}
              className="font-sans text-sm md:text-base text-[#F5F5F5]/45 leading-[1.85]"
            >
              Our members represent the apex of their fields — architects of influence,
              guardians of legacy, and pioneers of the extraordinary. The Circle does not
              seek numbers; it seeks those who understand that the rarest things hold the
              most enduring value.
            </motion.p>

            {/* Horizontal rule */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={3.5}
              className="w-full h-px bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-transparent"
            />

            {/* Stats row */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={4}
              className="flex flex-col sm:flex-row gap-8 pt-2"
            >
              {[
                { value: "Est.", sub: "1921" },
                { value: "Private", sub: "Members Only" },
                { value: "Global", sub: "Reach" },
              ].map((stat) => (
                <div
                  key={stat.sub}
                  className="flex flex-col gap-1.5 border-l-2 border-[#D4AF37]/25 pl-5 hover:border-[#D4AF37]/60 transition-colors duration-300"
                >
                  <span className="font-heading text-2xl text-[#D4AF37] leading-none">{stat.value}</span>
                  <span className="font-sans text-[0.68rem] tracking-[0.22em] text-[#F5F5F5]/45 uppercase">{stat.sub}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={5}
              className="pt-3"
            >
              <button
                onClick={() => document.querySelector("#join")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-ghost"
              >
                Request Membership
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
    </section>
  );
}
