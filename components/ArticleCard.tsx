"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { type Article } from "@/data/articles";
import { formatDate } from "@/lib/utils";

interface ArticleCardProps {
  article: Article;
  index?: number;
  animate?: boolean;
}

export default function ArticleCard({
  article,
  index = 0,
  animate = true,
}: ArticleCardProps) {
  const card = (
    <article className="group glass-card flex flex-col overflow-hidden h-full">
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
        <div className="absolute top-4 left-4">
          <span className="bg-[#D4AF37] text-[#0B0B0B] font-heading text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 leading-none">
            {article.category}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 md:p-7 gap-4">
        <div className="flex items-center gap-2.5 text-[0.7rem] text-[#F5F5F5]/35">
          <span className="font-sans tracking-wider">{formatDate(article.date)}</span>
          <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
          <span className="font-sans tracking-wider">{article.author}</span>
          {article.readTime && (
            <>
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
              <span className="font-sans flex items-center gap-1">
                <Clock size={10} />
                {article.readTime} min
              </span>
            </>
          )}
        </div>

        <h3 className="font-heading text-sm md:text-base tracking-[0.08em] text-[#F5F5F5] uppercase leading-snug group-hover:text-[#D4AF37] transition-colors duration-300">
          {article.title}
        </h3>

        <p className="font-sans text-sm text-[#F5F5F5]/45 leading-[1.8] flex-1">
          {article.excerpt}
        </p>

        {article.tags && article.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="font-sans text-[0.6rem] tracking-[0.18em] uppercase text-[#F5F5F5]/30 border border-[#D4AF37]/15 px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="pt-4 mt-auto border-t border-[#D4AF37]/10">
          <span className="group/link flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.22em] text-[#D4AF37] uppercase">
            Read Article
            <ArrowRight size={13} strokeWidth={1.5} className="group-hover/link:translate-x-1 transition-transform duration-200" />
          </span>
        </div>
      </div>
    </article>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <Link href={`/articles/${article.slug}`} className="block h-full">
          {card}
        </Link>
      </motion.div>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
