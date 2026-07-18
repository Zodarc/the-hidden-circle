"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { faqItems, faqCategories, type FAQCategory } from "@/data/faq";

function FAQItem({ item, index }: { item: (typeof faqItems)[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-[#D4AF37]/10 last:border-0"
    >
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="font-heading text-sm tracking-[0.08em] text-[#F5F5F5]/80 uppercase leading-snug group-hover:text-[#D4AF37] transition-colors duration-300 flex-1">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 mt-0.5"
        >
          <ChevronDown size={16} className="text-[#D4AF37]/50" strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-7 pr-8">
              <p className="font-sans text-sm md:text-base text-[#F5F5F5]/50 leading-[1.85]">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let items = activeCategory === "All" ? faqItems : faqItems.filter((f) => f.category === activeCategory);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, query]);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Questions & Answers"
          title="Frequently Asked"
          subtitle="Answers to the questions we receive most often. If yours is not here, use the contact form."
          breadcrumbs={[{ label: "FAQ" }]}
        />

        {/* Search + Filters */}
        <section className="relative py-10 md:py-12 px-6 md:px-10 bg-[#0B0B0B] border-b border-[#D4AF37]/10">
          <div className="max-w-4xl mx-auto flex flex-col gap-5">
            {/* Search */}
            <div className="relative">
              <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#D4AF37]/40" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Search questions…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-field pl-10 py-3.5"
              />
            </div>
            {/* Category pills */}
            <div className="flex flex-wrap gap-2.5">
              {faqCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-heading text-[0.6rem] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#D4AF37] border-[#D4AF37] text-[#0B0B0B]"
                      : "border-[#D4AF37]/25 text-[#F5F5F5]/50 hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto font-sans text-[0.68rem] text-[#F5F5F5]/30 self-center tracking-wider">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </span>
            </div>
          </div>
        </section>

        {/* FAQ accordion */}
        <section className="relative py-16 md:py-20 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="max-w-4xl mx-auto">
            {filtered.length > 0 ? (
              <div className="glass-card px-6 md:px-10 py-2">
                {filtered.map((item, i) => (
                  <FAQItem key={item.id} item={item} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-sans text-[#F5F5F5]/40 text-sm mb-4">No results found.</p>
                <button
                  onClick={() => { setQuery(""); setActiveCategory("All"); }}
                  className="font-heading text-[0.65rem] tracking-[0.25em] text-[#D4AF37] uppercase border-b border-[#D4AF37]/30 pb-0.5 hover:border-[#D4AF37] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* Contact CTA */}
        <section className="relative py-16 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#070707 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-sm text-[#F5F5F5]/40 leading-[1.85] mb-6">
              Didn&apos;t find your answer? Reach out directly.
            </p>
            <a href="/contact" className="btn-ghost">Contact The Circle</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
