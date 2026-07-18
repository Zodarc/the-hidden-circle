"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const categories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () => (activeCategory === "All" ? articles : articles.filter((a) => a.category === activeCategory)),
    [activeCategory]
  );

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="The Archive"
          title="Articles"
          subtitle="Published writings from members of The Circle on history, philosophy, tradition, and the nature of distinction."
          breadcrumbs={[{ label: "Articles" }]}
        />

        {/* Filter bar */}
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
              {filtered.length} {filtered.length === 1 ? "article" : "articles"}
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className="relative py-16 md:py-20 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {filtered.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-20">
                <p className="font-sans text-[#F5F5F5]/40 text-sm">No articles in this category.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
