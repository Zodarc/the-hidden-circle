"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Globe, Users, Star } from "lucide-react";

const achievements = [
  {
    icon: Award,
    value: "100+",
    label: "Awards & Honours",
    description: "Recognised across industries worldwide.",
  },
  {
    icon: Globe,
    value: "42",
    label: "Countries",
    description: "A truly global network of distinction.",
  },
  {
    icon: Users,
    value: "500+",
    label: "Elite Members",
    description: "Each member a paragon in their field.",
  },
  {
    icon: Star,
    value: "100",
    label: "Years of Legacy",
    description: "A century of unbroken excellence.",
  },
];

export default function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0d0d0d 0%, #0B0B0B 50%, #0d0d0d 100%)",
      }}
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      {/* Corner frame marks */}
      {[
        "top-10 left-10 border-t border-l",
        "top-10 right-10 border-t border-r",
        "bottom-10 left-10 border-b border-l",
        "bottom-10 right-10 border-b border-r",
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-14 h-14 border-[#D4AF37]/20 ${cls}`}
        />
      ))}

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="section-eyebrow">Our Record</p>
          <h2 className="section-title">Achievements</h2>
          <div className="gold-divider mx-auto mt-2" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {achievements.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 48 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="group glass-card flex flex-col items-center text-center p-8 md:p-10 cursor-default"
              >
                {/* Icon wrapper */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 flex items-center justify-center border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/55 transition-colors duration-400 relative">
                    <Icon size={26} className="text-[#D4AF37]" strokeWidth={1.25} />
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D4AF37]/60" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#D4AF37]/60" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#D4AF37]/60" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D4AF37]/60" />
                  </div>
                </div>

                <p className="font-heading text-4xl md:text-5xl text-[#D4AF37] leading-none mb-3 tracking-wide">
                  {item.value}
                </p>

                <p className="font-heading text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/80 uppercase mb-4 leading-snug">
                  {item.label}
                </p>

                <div className="w-6 h-px bg-[#D4AF37]/35 mb-4" />

                <p className="font-sans text-xs text-[#F5F5F5]/38 leading-[1.8]">
                  {item.description}
                </p>
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
