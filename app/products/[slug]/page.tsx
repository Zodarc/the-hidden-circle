import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Check, X as XIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { formatCurrency } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return { title: "Product Not Found — The Hidden Circle" };
  return {
    title: `${product.name} — The Hidden Circle`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Product Detail ────────────────────────────── */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-12" aria-label="Breadcrumb">
              <Link href="/" className="font-sans text-[0.65rem] tracking-[0.2em] text-[#F5F5F5]/35 uppercase hover:text-[#D4AF37] transition-colors">Home</Link>
              <span className="text-[#D4AF37]/40 text-xs">/</span>
              <Link href="/products" className="font-sans text-[0.65rem] tracking-[0.2em] text-[#F5F5F5]/35 uppercase hover:text-[#D4AF37] transition-colors">Products</Link>
              <span className="text-[#D4AF37]/40 text-xs">/</span>
              <span className="font-sans text-[0.65rem] tracking-[0.2em] text-[#D4AF37] uppercase truncate max-w-[180px]">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start">
              {/* Image */}
              <div className="relative">
                {product.featured && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37] to-[#D4AF37]/40 z-10" />
                )}
                <div className="glass-card aspect-square overflow-hidden">
                  {product.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center" style={{ backgroundImage: "repeating-linear-gradient(-45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 50%)", backgroundSize: "10px 10px", opacity: 0.1 }} />
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col gap-6 lg:pt-4">
                <div className="flex items-center gap-3">
                  <span className="font-sans text-[0.62rem] tracking-[0.25em] text-[#D4AF37] uppercase">{product.category}</span>
                  {product.featured && (
                    <span className="bg-[#D4AF37] text-[#0B0B0B] font-heading text-[0.58rem] tracking-[0.18em] uppercase px-2.5 py-1 leading-none">Featured</span>
                  )}
                </div>

                <h1 className="font-heading text-[clamp(1.6rem,3.5vw,2.8rem)] tracking-[0.08em] text-[#F5F5F5] uppercase leading-[1.12]">{product.name}</h1>

                <div className="w-12 h-px bg-[#D4AF37]/40" />

                <div className="flex items-center justify-between">
                  <span className="font-heading text-3xl text-[#D4AF37] tracking-wide">
                    {product.price > 0 ? formatCurrency(product.price, product.currency) : "On Request"}
                  </span>
                  <span className={`flex items-center gap-1.5 font-sans text-xs tracking-wider ${product.inStock ? "text-[#D4AF37]/70" : "text-[#F5F5F5]/30"}`}>
                    {product.inStock ? <Check size={13} /> : <XIcon size={13} />}
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <p className="font-sans text-sm md:text-base text-[#F5F5F5]/60 leading-[1.85]">{product.description}</p>

                {/* Details */}
                {product.details && product.details.length > 0 && (
                  <div className="glass-card p-6">
                    <p className="font-heading text-[0.6rem] tracking-[0.3em] text-[#D4AF37] uppercase mb-4">Details</p>
                    <ul className="flex flex-col gap-2.5">
                      {product.details.map((d) => (
                        <li key={d} className="flex items-start gap-3 font-sans text-xs text-[#F5F5F5]/50 leading-relaxed">
                          <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/50 flex-shrink-0 mt-1.5" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                {product.inStock ? (
                  <button className="btn-primary w-full md:w-auto md:min-w-[240px]" disabled={product.price === 0}>
                    <ShoppingBag size={14} strokeWidth={1.5} />
                    {product.price > 0 ? "Add to Bag" : "Request to Purchase"}
                  </button>
                ) : (
                  <button className="btn-ghost w-full md:w-auto md:min-w-[240px] opacity-50 cursor-not-allowed" disabled>
                    Currently Unavailable
                  </button>
                )}

                {/* Back */}
                <Link href="/products" className="inline-flex items-center gap-2 font-heading text-[0.62rem] tracking-[0.25em] text-[#F5F5F5]/40 uppercase hover:text-[#D4AF37] transition-colors duration-300 mt-2">
                  <ArrowLeft size={12} strokeWidth={1.5} />
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Long description ─────────────────────────── */}
        {product.longDescription && (
          <section className="relative py-16 md:py-20 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#0B0B0B 100%)" }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="max-w-3xl mx-auto">
              <p className="section-eyebrow">About This Object</p>
              <div className="font-sans text-base text-[#F5F5F5]/60 leading-[1.95] space-y-5">
                {product.longDescription.split("\n\n").filter(Boolean).map((para, i) => (
                  <p key={i}>{para.trim()}</p>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
          </section>
        )}

        {/* ── Related ───────────────────────────────────── */}
        {related.length > 0 && (
          <section className="relative py-20 md:py-24 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between gap-6 mb-12">
                <div>
                  <p className="section-eyebrow">Also From The Collection</p>
                  <h2 className="font-heading text-2xl tracking-[0.1em] text-[#F5F5F5] uppercase">Related Products</h2>
                </div>
                <Link href="/products" className="font-heading text-[0.65rem] tracking-[0.28em] text-[#D4AF37] uppercase border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-colors hidden sm:block">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
