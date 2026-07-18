"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { products, type Product } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

const placeholderProducts: Product[] = Array.from({ length: 4 }, (_, i) => ({
  id: `placeholder-${i}`,
  slug: `product-${i + 1}`,
  name: "Product Name Placeholder",
  description: "Placeholder — replace with real product details.",
  longDescription: "",
  price: 0,
  currency: "USD",
  image: "",
  gallery: [],
  category: "Exclusive",
  featured: i === 0,
  inStock: true,
  details: [],
  tags: [],
}));

export default function Products() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const items = products.length > 0 ? products : placeholderProducts;

  return (
    <section
      id="products"
      ref={ref}
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #090909 100%)" }}
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
          <p className="section-eyebrow">The Collection</p>
          <h2 className="section-title">Products</h2>
          <div className="gold-divider mx-auto mt-2" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 44 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group glass-card flex flex-col overflow-hidden relative"
            >
              {/* Featured top bar */}
              {product.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37] to-[#D4AF37]/40" />
              )}

              {/* Image */}
              <div className="relative aspect-square bg-[#111] overflow-hidden flex-shrink-0">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700 ease-out"
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

                {/* Featured badge */}
                {product.featured && (
                  <div className="absolute top-3.5 right-3.5">
                    <span className="bg-[#D4AF37] text-[#0B0B0B] font-heading text-[0.58rem] tracking-[0.18em] uppercase px-2.5 py-1 leading-none">
                      Featured
                    </span>
                  </div>
                )}

                {/* Image hover scrim */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5 md:p-6 gap-3">
                <span className="font-sans text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase">
                  {product.category}
                </span>

                <h3 className="font-heading text-sm tracking-[0.1em] text-[#F5F5F5] uppercase leading-snug">
                  {product.name}
                </h3>

                <p className="font-sans text-xs text-[#F5F5F5]/38 leading-[1.8] flex-1">
                  {product.description}
                </p>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-4 mt-auto border-t border-[#D4AF37]/10">
                  <span className="font-heading text-base text-[#D4AF37] tracking-wide">
                    {product.price > 0
                      ? formatCurrency(product.price, product.currency)
                      : "On Request"}
                  </span>
                  <button
                    className="w-9 h-9 flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0B0B0B] hover:border-[#D4AF37] hover:shadow-[0_4px_12px_-2px_rgba(212,175,55,0.3)] transition-all duration-300"
                    aria-label={`Add ${product.name} to bag`}
                  >
                    <ShoppingBag size={13} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
    </section>
  );
}
