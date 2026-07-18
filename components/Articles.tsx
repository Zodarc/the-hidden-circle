"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { articles, type Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

const placeholderArticles: Article[] = Array.from({ length: 3 }, (_, i) => ({
  id: `placeholder-${i}`,
  title: "Article Title Placeholder",
  excerpt:
    "Placeholder excerpt — this will be replaced with real article content when you populate the data file.",
  body: "",
  date: "2024-01-01",
  author: "The Circle",
  category: "Insights",
  image: "",
  slug: `article-${i + 1}`,
  featured: false,
  readTime: 5,
  tags: [],
}));

export default function Articles() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items = articles.length > 0 ? articles : placeholderArticles;

  return (
    <section
      id="articles"
      ref={ref}
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="section-eyebrow">The Archive</p>
          <h2 className="section-title">Articles</h2>
          <div className="gold-divider mx-auto mt-2" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {items.map((article, i) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] bg-[#111] overflow-hidden flex-shrink-0">
                {article.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(-45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
                      backgroundSize: "10px 10px",
                      opacity: 0.08,
                    }}
                  />
                )}

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4AF37] text-[#0B0B0B] font-heading text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 leading-none">
                    {article.category}
                  </span>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 md:p-7 gap-4">
                {/* Meta */}
                <div className="flex items-center gap-2.5 text-[0.7rem] text-[#F5F5F5]/35">
                  <span className="font-sans tracking-wider">{formatDate(article.date)}</span>
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
                  <span className="font-sans tracking-wider">{article.author}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-sm md:text-base tracking-[0.08em] text-[#F5F5F5] uppercase leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="font-sans text-sm text-[#F5F5F5]/45 leading-[1.8] flex-1">
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div className="pt-4 mt-auto border-t border-[#D4AF37]/10">
                  <button className="group/link flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.22em] text-[#D4AF37] uppercase">
                    Read More
                    <motion.span
                      className="inline-flex"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <ArrowRight size={13} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
    </section>
  );
}
