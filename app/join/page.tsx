import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Join from "@/components/Join";

export const metadata: Metadata = {
  title: "Request Entry — The Hidden Circle",
  description:
    "Submit a formal expression of interest for membership in The Hidden Circle. Reviewed by the Admission Council at their discretion.",
};

export default function JoinPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Disclaimer Banner ─────────────────────────── */}
        <div className="relative pt-[72px] lg:pt-[80px]">
          <div className="bg-[#0d0d0d] border-b border-[#D4AF37]/20 px-6 md:px-10 py-4">
            <div className="max-w-7xl mx-auto">
              <p className="font-sans text-[0.68rem] text-[#F5F5F5]/40 leading-relaxed text-center">
                <span className="text-[#D4AF37] font-medium">Fictional Experience Notice:</span>{" "}
                The Hidden Circle is a fictional entertainment concept inspired by historical
                secret societies, literature, and mythology. It is not affiliated with, recruiting
                for, or representative of any real organisation, society, or group. All content on
                this website is creative fiction. No actual membership is offered or implied.
              </p>
            </div>
          </div>
        </div>

        {/* ── Experience Intro ──────────────────────────── */}
        <section className="relative py-20 md:py-28 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0B0B0B 0%,#0d0d0d 100%)" }}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center">
            <p className="section-eyebrow">Membership</p>
            <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] tracking-[0.1em] text-[#F5F5F5] uppercase leading-[1.1] mb-6">
              The Circle Does Not Recruit
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-sans text-base md:text-lg text-[#F5F5F5]/55 leading-[1.9] mb-4">
              The Hidden Circle has never placed advertisements, hosted open events, or approached
              candidates through public channels. Historically, membership has been offered —
              never sought.
            </p>
            <p className="font-sans text-base text-[#F5F5F5]/40 leading-[1.9]">
              In a limited concession to the modern world, we accept formal expressions of interest.
              These are reviewed by the Admission Council at their sole discretion. Submission does
              not guarantee consideration. The Council is under no obligation to respond.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── What We Look For ──────────────────────────── */}
        <section className="relative py-20 md:py-24 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#0B0B0B 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="section-eyebrow">The Criteria</p>
              <h2 className="section-title">What We Look For</h2>
              <div className="gold-divider mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  n: "01",
                  t: "Demonstrated Excellence",
                  d: "Not potential. Not ambition. Evidence. We look for individuals who have already done something worth noting — in any field, at any scale.",
                },
                {
                  n: "02",
                  t: "Uncommon Discretion",
                  d: "The person who cannot keep their own counsel cannot be trusted with ours. Discretion is not a skill. It is a character trait, and we look for evidence of it.",
                },
                {
                  n: "03",
                  t: "The Instinct to Elevate",
                  d: "Members are not here to extract value. They are here to create it — for others as much as themselves. We look for people who leave rooms better than they found them.",
                },
              ].map((item) => (
                <div key={item.n} className="glass-card p-8 flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rotate-45 border border-[#D4AF37]/40 flex items-center justify-center flex-shrink-0">
                      <span className="font-heading text-[#D4AF37] text-xs -rotate-45">{item.n}</span>
                    </div>
                    <h3 className="font-heading text-sm tracking-[0.14em] text-[#F5F5F5] uppercase">{item.t}</h3>
                  </div>
                  <div className="w-full h-px bg-[#D4AF37]/10" />
                  <p className="font-sans text-sm text-[#F5F5F5]/50 leading-[1.85]">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Form ─────────────────────────────────────── */}
        <Join />

        {/* ── FAQ link ─────────────────────────────────── */}
        <section className="relative py-14 px-6 md:px-10 bg-[#0d0d0d] border-t border-[#D4AF37]/10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-sans text-sm text-[#F5F5F5]/35 leading-[1.85]">
              Have questions about the process?{" "}
              <a href="/faq" className="text-[#D4AF37]/70 hover:text-[#D4AF37] transition-colors underline underline-offset-4">
                Read our FAQ
              </a>
              . All submissions are reviewed in strict confidence.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
