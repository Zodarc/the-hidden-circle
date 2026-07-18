"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timelineEvents = [
  {
    year: "1921",
    title: "The Founding",
    description: "Placeholder — the founding of The Hidden Circle and its original charter.",
  },
  {
    year: "1947",
    title: "The Expansion",
    description: "Placeholder — global reach achieved and the first international chapter established.",
  },
  {
    year: "1968",
    title: "The Reformation",
    description: "Placeholder — internal restructuring that defined modern membership values.",
  },
  {
    year: "1993",
    title: "The Renaissance",
    description: "Placeholder — a new generation of members ushers in a cultural awakening.",
  },
  {
    year: "2010",
    title: "The Digital Age",
    description: "Placeholder — The Circle adapts to a new world while preserving its timeless principles.",
  },
  {
    year: "Present",
    title: "The Legacy Continues",
    description: "Placeholder — The Hidden Circle stands stronger than ever, welcoming the next generation.",
  },
];

export default function History() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="history"
      ref={ref}
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #090909 100%)" }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Vertical spine — desktop */}
      <div className="absolute left-1/2 top-52 bottom-28 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/25 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <p className="section-eyebrow">Our Heritage</p>
          <h2 className="section-title">A Century of Legacy</h2>
          <div className="gold-divider mx-auto mt-2" />
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col">
          {timelineEvents.map((event, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 mb-10 lg:mb-0 lg:pb-14 ${
                  isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:flex-row`}
              >
                {/* Card side */}
                <div className={`flex-1 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`glass-card inline-block p-7 lg:p-8 max-w-sm ${
                      isLeft ? "lg:ml-auto" : "lg:mr-auto"
                    } text-left`}
                  >
                    {/* Year badge */}
                    <div className="inline-block mb-4">
                      <span className="font-heading text-3xl text-[#D4AF37] leading-none tracking-wider">
                        {event.year}
                      </span>
                    </div>
                    <div className="w-8 h-px bg-[#D4AF37]/40 mb-4" />
                    <h3 className="font-heading text-sm tracking-[0.14em] text-[#F5F5F5] uppercase mb-3 leading-snug">
                      {event.title}
                    </h3>
                    <p className="font-sans text-sm text-[#F5F5F5]/45 leading-[1.8]">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Centre node — desktop */}
                <div className="hidden lg:flex flex-col items-center flex-shrink-0 pt-8">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: i * 0.13 + 0.3, duration: 0.4 }}
                    className="w-4 h-4 rotate-45 border-2 border-[#D4AF37] bg-[#0B0B0B] shadow-[0_0_12px_rgba(212,175,55,0.4)]"
                  />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
    </section>
  );
}
