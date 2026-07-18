"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, type GalleryItem } from "@/data/gallery";

const placeholderItems: GalleryItem[] = Array.from({ length: 6 }, (_, i) => ({
  id: `placeholder-${i}`,
  title: `Gallery Item ${i + 1}`,
  description: "Placeholder — add your image and description.",
  image: "",
  category: "Uncategorised",
  year: "2024",
}));

export default function Gallery() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const items = galleryItems.length > 0 ? galleryItems : placeholderItems;

  return (
    <section
      id="gallery"
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
          <p className="section-eyebrow">Visual Archive</p>
          <h2 className="section-title">Gallery</h2>
          <div className="gold-divider mx-auto mt-2" />
        </motion.div>

        {/* Grid — 1 col → 2 col → 3 col with masonry-feel via varied heights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden cursor-pointer glass-card ${
                i === 0 ? "sm:col-span-2 lg:col-span-1 aspect-[4/3]" : "aspect-square"
              }`}
              onClick={() => setSelected(item)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => e.key === "Enter" && setSelected(item)}
            >
              {item.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
                    backgroundSize: "12px 12px",
                    opacity: 0.12,
                  }}
                />
              )}

              {/* Hover scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3 p-6">
                <div className="p-3 border border-[#D4AF37]/60 bg-black/40 backdrop-blur-sm">
                  <ZoomIn size={18} className="text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <p className="font-heading text-sm tracking-[0.2em] text-[#F5F5F5] uppercase text-center leading-snug">
                  {item.title}
                </p>
                <p className="font-sans text-xs text-[#D4AF37]/80 tracking-wider">{item.year}</p>
              </div>

              {/* Category tag */}
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans text-[0.6rem] tracking-[0.25em] uppercase text-[#D4AF37] bg-black/60 backdrop-blur-sm border border-[#D4AF37]/30 px-2.5 py-1">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/96 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-3xl w-full glass-card p-1"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 flex items-center justify-center bg-[#0B0B0B] border border-[#D4AF37]/30 text-[#F5F5F5]/60 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all duration-200"
                aria-label="Close"
              >
                <X size={16} strokeWidth={1.5} />
              </button>

              {/* Image */}
              {selected.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full aspect-[16/9] object-cover"
                />
              ) : (
                <div
                  className="w-full aspect-[16/9]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)",
                    backgroundSize: "10px 10px",
                    opacity: 0.1,
                  }}
                />
              )}

              {/* Caption */}
              <div className="p-5 md:p-7">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-heading text-base md:text-lg tracking-[0.14em] text-[#F5F5F5] uppercase leading-snug">
                    {selected.title}
                  </h3>
                  <span className="font-sans text-xs text-[#D4AF37] flex-shrink-0 mt-0.5">{selected.year}</span>
                </div>
                <div className="w-8 h-px bg-[#D4AF37]/40 mb-3" />
                <p className="font-sans text-sm text-[#F5F5F5]/45 leading-relaxed">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
    </section>
  );
}
