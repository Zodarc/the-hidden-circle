"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { type Product } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  index?: number;
  animate?: boolean;
}

export default function ProductCard({
  product,
  index = 0,
  animate = true,
}: ProductCardProps) {
  const card = (
    <article className="group glass-card flex flex-col overflow-hidden relative h-full">
      {product.featured && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37] to-[#D4AF37]/40 z-10" />
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
        {product.featured && (
          <div className="absolute top-3.5 right-3.5">
            <span className="bg-[#D4AF37] text-[#0B0B0B] font-heading text-[0.58rem] tracking-[0.18em] uppercase px-2.5 py-1 leading-none">
              Featured
            </span>
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="font-heading text-xs tracking-[0.25em] text-[#F5F5F5]/60 uppercase border border-[#F5F5F5]/20 px-4 py-2">
              Out of Stock
            </span>
          </div>
        )}
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

        <div className="flex items-center justify-between pt-4 mt-auto border-t border-[#D4AF37]/10">
          <span className="font-heading text-base text-[#D4AF37] tracking-wide">
            {product.price > 0
              ? formatCurrency(product.price, product.currency)
              : "On Request"}
          </span>
          <div className="flex items-center gap-2">
            <span className="font-sans text-[0.6rem] tracking-[0.2em] text-[#D4AF37]/70 uppercase flex items-center gap-1.5">
              View <ArrowRight size={11} strokeWidth={1.5} />
            </span>
          </div>
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
        <Link href={`/products/${product.slug}`} className="block h-full">
          {card}
        </Link>
      </motion.div>
    );
  }

  return (
    <Link href={`/products/${product.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
