"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () => (activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="The Collection"
          title="Products"
          subtitle="Objects of distinction for those who understand that the things we carry say something about who we are."
          breadcrumbs={[{ label: "Products" }]}
        />

        {/* Filter */}
        <section className="relative py-10 md:py-12 px-6 md:px-10 bg-[#0B0B0B] border-b border-[#D4AF37]/10">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-heading text-[0.62rem] tracking-[0.28em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0B]"
                    : "border-[#D4AF37]/25 text-[#F5F5F5]/50 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto font-sans text-[0.68rem] text-[#F5F5F5]/30 tracking-wider">
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className="relative py-16 md:py-20 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#090909 100%)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-sans text-[#F5F5F5]/40 text-sm">No products in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Note */}
        <section className="relative py-14 px-6 md:px-10 bg-[#0B0B0B] border-t border-[#D4AF37]/10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-sm text-[#F5F5F5]/35 leading-[1.85]">
              Selected products are available for public purchase. Certain items — including the
              Signet Ring and Member Card — are exclusively issued through the formal induction
              process and cannot be purchased directly.{" "}
              <span className="text-[#D4AF37]/60">Questions? Contact The Circle.</span>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
