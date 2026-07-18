"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    heading: "Where Legacy\nBegins",
    subheading: "An exclusive society forged in secrecy, bound by honour.",
    image: "/images/hero/hero-01.jpg",
  },
  {
    id: 2,
    heading: "Distinction\nAbove All",
    subheading: "Entry is earned. Membership is a privilege, not a right.",
    image: "/images/hero/hero-02.jpg",
  },
  {
    id: 3,
    heading: "The Circle\nEndures",
    subheading: "Centuries of tradition. One unbroken line of excellence.",
    image: "/images/hero/hero-03.jpg",
  },
];

const lineVariant = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: (d: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function HeroCarousel() {
  const scrollRef = useRef<HTMLButtonElement>(null);

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full h-screen min-h-[640px] overflow-hidden"
      aria-label="Hero"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-screen min-h-[640px] bg-[#0B0B0B]">

              {/* ── Background image ───────────────────── */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              {/* ── Dark scrim so text always reads ────── */}
              {/* Base darken — brings dark images to consistent level */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Radial vignette — darkens edges, keeps centre readable */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,rgba(0,0,0,0.65)_100%)]" />

              {/* Architectural gold grid lines */}
              <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                <div className="absolute top-[22%] left-0 right-0 h-px bg-[#D4AF37]" />
                <div className="absolute bottom-[22%] left-0 right-0 h-px bg-[#D4AF37]" />
                <div className="absolute left-[18%] top-0 bottom-0 w-px bg-[#D4AF37]" />
                <div className="absolute right-[18%] top-0 bottom-0 w-px bg-[#D4AF37]" />
              </div>

              {/* Bottom gradient — blends into page bg */}
              <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/60 to-transparent" />

              {/* ── Content ────────────────────────────── */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

                {/* Pre-title ornament line */}
                <motion.div
                  variants={lineVariant}
                  initial="hidden"
                  animate="visible"
                  custom={0.15}
                  className="origin-center w-16 h-px bg-[#D4AF37] mb-7"
                />

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.3}
                  className="section-eyebrow mb-8 opacity-80"
                >
                  Est. 1921 · Invitation Only
                </motion.p>

                <motion.h1
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.45}
                  className="font-heading text-[clamp(2.8rem,8vw,6.5rem)] tracking-[0.12em] text-[#F5F5F5] uppercase whitespace-pre-line leading-[1.08] mb-7 drop-shadow-[0_2px_16px_rgba(0,0,0,0.8)]"
                >
                  {slide.heading}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.6}
                  className="font-sans text-base md:text-lg text-[#F5F5F5]/70 tracking-[0.06em] max-w-lg leading-relaxed mb-9 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
                >
                  {slide.subheading}
                </motion.p>

                {/* Ornament row */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.72}
                  className="flex items-center gap-4 mb-10"
                >
                  <div className="w-12 h-px bg-[#D4AF37]/60" />
                  <div className="w-2 h-2 rotate-45 border border-[#D4AF37]" />
                  <div className="w-12 h-px bg-[#D4AF37]/60" />
                </motion.div>

                {/* CTAs */}
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  custom={0.82}
                  className="flex flex-col sm:flex-row items-center gap-4"
                >
                  <Link href="/join" className="btn-primary min-w-[180px]">
                    Request Entry
                  </Link>
                  <Link
                    href="/about"
                    className="btn-ghost min-w-[180px] border-[#F5F5F5]/30 text-[#F5F5F5]/80 hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-transparent"
                  >
                    Discover
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll cue */}
      <button
        ref={scrollRef}
        onClick={scrollToNext}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors duration-300"
      >
        <span className="font-sans text-[0.6rem] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={16} strokeWidth={1.5} />
        </motion.div>
      </button>
    </section>
  );
}
