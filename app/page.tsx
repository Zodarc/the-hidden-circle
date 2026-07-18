import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ArticleCard from "@/components/ArticleCard";
import ProductCard from "@/components/ProductCard";
import Achievements from "@/components/Achievements";

import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "The Hidden Circle — An Exclusive Society of Distinction",
  description:
    "An invitation-only society of distinction, legacy, and purpose. Forged in secrecy since 1921.",
};

const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);
const featuredProducts = products.filter((p) => p.featured).slice(0, 4);
const featuredGallery = galleryItems.filter((g) => g.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ─────────────────────────────────────── */}
        <HeroCarousel />

        {/* ── About Preview ────────────────────────────── */}
        <section className="relative py-28 md:py-36 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Orbital emblem */}
            <div className="relative flex items-center justify-center order-last lg:order-first">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]" />
                <div className="absolute inset-0 rounded-full border border-[#D4AF37]/15 animate-[spin_48s_linear_infinite]" />
                <div className="absolute inset-5 rounded-full border border-[#D4AF37]/25" />
                <div className="absolute inset-11 rounded-full border border-[#D4AF37]/20 animate-[spin_34s_linear_infinite_reverse]" />
                {["top-0 left-1/2 -translate-x-1/2 -translate-y-1/2","bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2","left-0 top-1/2 -translate-y-1/2 -translate-x-1/2","right-0 top-1/2 -translate-y-1/2 translate-x-1/2"].map((p, i) => (
                  <div key={i} className={`absolute ${p} w-2 h-2 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.6)]`} />
                ))}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-heading text-5xl text-[#D4AF37] leading-none tracking-widest">T</p>
                    <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto my-2.5" />
                    <p className="font-heading text-[0.55rem] tracking-[0.5em] text-[#F5F5F5]/40 uppercase">Hidden Circle</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col gap-6">
              <p className="section-eyebrow">Who We Are</p>
              <h2 className="section-title">About The Circle</h2>
              <div className="gold-divider" />
              <p className="font-sans text-base md:text-lg text-[#F5F5F5]/70 leading-[1.85] mt-2">
                The Hidden Circle is an invitation-only society built upon the pillars of excellence,
                discretion, and mutual elevation. Founded in 1921, we bring together individuals who
                shape culture, commerce, and community.
              </p>
              <p className="font-sans text-sm text-[#F5F5F5]/45 leading-[1.85]">
                Our members represent the apex of their fields — architects of influence, guardians
                of legacy, and pioneers of the extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 pt-2 border-t border-[#D4AF37]/10">
                {[{ value: "Est.", sub: "1921" }, { value: "Private", sub: "Members Only" }, { value: "Global", sub: "Reach" }].map((s) => (
                  <div key={s.sub} className="flex flex-col gap-1.5 border-l-2 border-[#D4AF37]/25 pl-5">
                    <span className="font-heading text-2xl text-[#D4AF37] leading-none">{s.value}</span>
                    <span className="font-sans text-[0.68rem] tracking-[0.22em] text-[#F5F5F5]/45 uppercase">{s.sub}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <Link href="/about" className="btn-ghost">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── History Preview ───────────────────────────── */}
        <section className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#090909 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Our Heritage" title="A Century of Legacy" viewAllHref="/history" viewAllLabel="Full Timeline" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { year: "1921", title: "The Founding", desc: "Six figures gathered outside London and drafted the three principles that still govern The Circle today." },
                { year: "1968", title: "The Reformation", desc: "Internal restructuring opened membership globally and established the mentorship obligation still in place." },
                { year: "2021", title: "The Centenary", desc: "One hundred years after the first assembly, members gathered once more — a moment of reckoning and renewal." },
              ].map((ev, i) => (
                <div key={ev.year} className="glass-card p-7 flex flex-col gap-4 group hover:border-[#D4AF37]/40 transition-colors duration-300">
                  <span className="font-heading text-3xl text-[#D4AF37] leading-none tracking-wider">{ev.year}</span>
                  <div className="w-8 h-px bg-[#D4AF37]/40" />
                  <h3 className="font-heading text-sm tracking-[0.14em] text-[#F5F5F5] uppercase leading-snug">{ev.title}</h3>
                  <p className="font-sans text-sm text-[#F5F5F5]/45 leading-[1.8]">{ev.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Gallery Preview ───────────────────────────── */}
        <section className="relative py-28 md:py-36 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="Visual Archive" title="Gallery" viewAllHref="/gallery" viewAllLabel="View Gallery" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {featuredGallery.map((item, i) => (
                <Link key={item.id} href="/gallery" className="group relative overflow-hidden glass-card aspect-square block">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 50%)", backgroundSize: "12px 12px", opacity: 0.1 }} />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
                    <div>
                      <p className="font-heading text-sm tracking-[0.18em] text-[#F5F5F5] uppercase">{item.title}</p>
                      <p className="font-sans text-xs text-[#D4AF37] mt-1">{item.year}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Achievements ─────────────────────────────── */}
        <Achievements />

        {/* ── Featured Articles ─────────────────────────── */}
        <section className="relative py-28 md:py-36 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="The Archive" title="Featured Articles" viewAllHref="/articles" viewAllLabel="All Articles" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {featuredArticles.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Featured Products ─────────────────────────── */}
        <section className="relative py-28 md:py-36 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#090909 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <SectionHeader eyebrow="The Collection" title="Featured Products" viewAllHref="/products" viewAllLabel="All Products" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {featuredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Join CTA ──────────────────────────────────── */}
        <section className="relative py-28 md:py-36 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
            <div className="w-[640px] h-[640px] rotate-45 border border-[#D4AF37]" />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">Membership</p>
            <h2 className="section-title">The Circle Is Selective</h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-sans text-base md:text-lg text-[#F5F5F5]/55 leading-[1.85] mb-10">
              Membership is by invitation and review only. Entry is earned. Legacy is built.
              If you believe you are worthy of consideration, make your request.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join" className="btn-primary min-w-[200px]">
                Request Entry
              </Link>
              <Link href="/about" className="btn-ghost min-w-[200px]">
                Learn About Us
              </Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Contact CTA ───────────────────────────────── */}
        <section className="relative py-20 md:py-24 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#070707 100%)" }}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-heading text-xs tracking-[0.4em] text-[#D4AF37] uppercase mb-3">Questions?</p>
              <h2 className="font-heading text-2xl md:text-3xl tracking-[0.1em] text-[#F5F5F5] uppercase leading-tight">
                We Respond With Discretion
              </h2>
            </div>
            <Link href="/contact" className="btn-ghost flex-shrink-0">
              Contact The Circle
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
