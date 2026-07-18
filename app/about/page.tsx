import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Achievements from "@/components/Achievements";

export const metadata: Metadata = {
  title: "About — The Hidden Circle",
  description:
    "Learn about The Hidden Circle: our founding principles, our purpose, and the values that have governed a century of distinction.",
};

const values = [
  {
    title: "Excellence",
    description:
      "We do not define excellence by output alone. We define it by the quality of thought, the depth of commitment, and the willingness to hold a higher standard even when no one is watching.",
  },
  {
    title: "Discretion",
    description:
      "The most consequential work happens in quiet rooms. Discretion is not the absence of pride — it is the discipline of knowing what to share, with whom, and when.",
  },
  {
    title: "Elevation",
    description:
      "Membership in The Circle is not a reward. It is an obligation. Each member is expected to elevate those around them — to leave the network more valuable than they found it.",
  },
  {
    title: "Legacy",
    description:
      "We think in decades. We plant trees we will not sit beneath. The most important contributions are often invisible: the conversation that changed a direction, the standard maintained when it would have been easier to let it slip.",
  },
];

const leadership = [
  {
    title: "The Warden",
    description:
      "The Warden holds ultimate authority over The Circle's direction, membership decisions, and the interpretation of the founding principles. The identity of the Warden is not publicly disclosed.",
  },
  {
    title: "The Admission Council",
    description:
      "A body of seven senior members responsible for evaluating all candidacies. Council membership rotates every five years.",
  },
  {
    title: "The Steward",
    description:
      "Responsible for the organisation of gatherings, chapter coordination, and the maintenance of The Circle's physical archives.",
  },
  {
    title: "The Archivist",
    description:
      "Custodian of The Circle's historical record. Responsible for publications, the Reading Guide, and correspondence with the public.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Who We Are"
          title="About The Circle"
          subtitle="An invitation-only society built upon the pillars of excellence, discretion, and mutual elevation. Founded in 1921. Still standing."
          breadcrumbs={[{ label: "About" }]}
        />

        {/* ── Origin ───────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 50%)",
              backgroundSize: "24px 24px",
            }}
          />
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">Our Origin</p>
            <h2 className="section-title">Why The Circle Exists</h2>
            <div className="gold-divider mx-auto mb-12" />
            <div className="flex flex-col gap-6 font-sans text-base md:text-lg text-[#F5F5F5]/65 leading-[1.9] text-left">
              <p>
                In the winter of 1921, six individuals gathered beneath the vaulted ceiling of a private
                estate outside London. The world had been reshaped by war, by loss, by the collapse of
                institutions that had once seemed permanent. What they agreed upon that evening would echo
                through a century.
              </p>
              <p>
                The founding of The Hidden Circle was not an act of ambition. It was an act of necessity.
                These six individuals — each a titan in their respective field — understood that the
                highest form of legacy was not wealth, not title, but the cultivation of an enduring
                network of excellence.
              </p>
              <p>
                They drafted three principles. First: that membership would never be sought, only offered.
                Second: that the work of The Circle would remain invisible to the world at large. Third:
                that each member would be obligated not merely to benefit from the network, but to
                elevate it.
              </p>
              <p>
                Those three principles have governed every decision The Hidden Circle has made in the
                hundred years since.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Values ───────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#0B0B0B 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="section-eyebrow">What We Stand For</p>
              <h2 className="section-title">Founding Principles</h2>
              <div className="gold-divider mx-auto mb-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((v, i) => (
                <div key={v.title} className="glass-card p-8 md:p-10 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rotate-45 border border-[#D4AF37]/50 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-[#D4AF37] text-xs -rotate-45">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-heading text-lg tracking-[0.15em] text-[#F5F5F5] uppercase">{v.title}</h3>
                  </div>
                  <div className="w-full h-px bg-[#D4AF37]/10" />
                  <p className="font-sans text-sm md:text-base text-[#F5F5F5]/55 leading-[1.85]">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Achievements ─────────────────────────────── */}
        <Achievements />

        {/* ── Leadership ───────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="section-eyebrow">Governance</p>
              <h2 className="section-title">Leadership Structure</h2>
              <div className="gold-divider mx-auto mb-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((role) => (
                <div key={role.title} className="glass-card p-7 flex flex-col gap-4">
                  <div className="w-10 h-px bg-[#D4AF37]/50" />
                  <h3 className="font-heading text-sm tracking-[0.2em] text-[#D4AF37] uppercase">{role.title}</h3>
                  <p className="font-sans text-sm text-[#F5F5F5]/50 leading-[1.8]">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Join CTA ─────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#070707 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">What Comes Next</p>
            <h2 className="section-title">If You Are Worthy</h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-sans text-base text-[#F5F5F5]/50 leading-[1.85] mb-10">
              Membership is by invitation and review only. You may submit a formal expression of
              interest, which will be reviewed by the Admission Council at their discretion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/join" className="btn-primary">Request Entry</Link>
              <Link href="/history" className="btn-ghost">Our History</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
