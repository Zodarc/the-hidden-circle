import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found — The Hidden Circle" };
  return {
    title: `${article.title} — The Hidden Circle`,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.id !== article.id && a.category === article.category).slice(0, 3);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Article Header ────────────────────────────── */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-10" aria-label="Breadcrumb">
              <Link href="/" className="font-sans text-[0.65rem] tracking-[0.2em] text-[#F5F5F5]/35 uppercase hover:text-[#D4AF37] transition-colors">Home</Link>
              <span className="text-[#D4AF37]/40 text-xs">/</span>
              <Link href="/articles" className="font-sans text-[0.65rem] tracking-[0.2em] text-[#F5F5F5]/35 uppercase hover:text-[#D4AF37] transition-colors">Articles</Link>
              <span className="text-[#D4AF37]/40 text-xs">/</span>
              <span className="font-sans text-[0.65rem] tracking-[0.2em] text-[#D4AF37] uppercase truncate max-w-[200px]">{article.title}</span>
            </nav>

            <div className="mb-6">
              <span className="bg-[#D4AF37] text-[#0B0B0B] font-heading text-[0.6rem] tracking-[0.22em] uppercase px-3 py-1.5 leading-none">
                {article.category}
              </span>
            </div>

            <h1 className="font-heading text-[clamp(1.8rem,4.5vw,3.5rem)] tracking-[0.08em] text-[#F5F5F5] uppercase leading-[1.1] mb-8">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-[0.7rem] text-[#F5F5F5]/40 mb-10">
              <span className="flex items-center gap-1.5"><Calendar size={12} />{formatDate(article.date)}</span>
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
              <span className="font-sans">{article.author}</span>
              <div className="w-1 h-1 rounded-full bg-[#D4AF37]/40" />
              <span className="flex items-center gap-1.5"><Clock size={12} />{article.readTime} min read</span>
            </div>

            <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        </section>

        {/* ── Featured Image ────────────────────────────── */}
        {article.image && (
          <section className="relative px-6 md:px-10 bg-[#0B0B0B]">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-[16/9] overflow-hidden glass-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </section>
        )}

        {/* ── Article Body ──────────────────────────────── */}
        <section className="relative py-16 md:py-20 px-6 md:px-10 bg-[#0B0B0B]">
          <div className="max-w-3xl mx-auto">
            <div className="font-sans text-base md:text-lg text-[#F5F5F5]/65 leading-[1.95] space-y-6">
              {article.body.split("\n\n").filter(Boolean).map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-[#D4AF37]/10">
                <Tag size={12} className="text-[#D4AF37]/50 flex-shrink-0" />
                {article.tags.map((tag) => (
                  <span key={tag} className="font-sans text-[0.62rem] tracking-[0.2em] uppercase text-[#F5F5F5]/35 border border-[#D4AF37]/15 px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author card */}
            <div className="glass-card p-6 mt-10 flex items-start gap-5">
              <div className="w-12 h-12 border border-[#D4AF37]/30 flex items-center justify-center flex-shrink-0">
                <span className="font-heading text-[#D4AF37] text-lg">{article.author.charAt(article.author.lastIndexOf(" ") + 1)}</span>
              </div>
              <div>
                <p className="font-heading text-xs tracking-[0.25em] text-[#D4AF37] uppercase mb-1">{article.author}</p>
                <p className="font-sans text-xs text-[#F5F5F5]/40 leading-relaxed">
                  A senior member of The Hidden Circle. All writers publish under their Circle title, not their given name.
                </p>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-[#D4AF37]/10">
              <Link
                href="/articles"
                className="inline-flex items-center gap-2.5 font-heading text-[0.65rem] tracking-[0.28em] text-[#D4AF37] uppercase hover:text-[#e8c84a] transition-colors duration-300"
              >
                <ArrowLeft size={13} strokeWidth={1.5} />
                Back to Articles
              </Link>
            </div>
          </div>
        </section>

        {/* ── Related Articles ──────────────────────────── */}
        {related.length > 0 && (
          <section className="relative py-20 md:py-24 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#090909 100%)" }}>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div className="max-w-7xl mx-auto">
              <div className="flex items-end justify-between gap-6 mb-12">
                <div>
                  <p className="section-eyebrow">Continue Reading</p>
                  <h2 className="font-heading text-2xl tracking-[0.1em] text-[#F5F5F5] uppercase">Related Articles</h2>
                </div>
                <Link href="/articles" className="font-heading text-[0.65rem] tracking-[0.28em] text-[#D4AF37] uppercase border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-colors hidden sm:block">
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((a, i) => <ArticleCard key={a.id} article={a} index={i} />)}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
