import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact — The Hidden Circle",
  description:
    "Reach out to The Hidden Circle for general enquiries, partnerships, or press. All correspondence handled with discretion.",
};

const businessHours = [
  { day: "Monday – Friday", hours: "09:00 – 17:00 GMT" },
  { day: "Saturday", hours: "By appointment only" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Page Header ──────────────────────────────── */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B0B0B] to-transparent" />
          <div className="max-w-7xl mx-auto">
            <div className="w-12 h-px bg-[#D4AF37] mb-6" />
            <p className="section-eyebrow">Reach Out</p>
            <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] tracking-[0.1em] text-[#F5F5F5] uppercase leading-[1.1] mb-6">Contact</h1>
            <p className="font-sans text-base md:text-lg text-[#F5F5F5]/50 leading-[1.85] max-w-xl">
              For general enquiries, partnerships, press, or product questions. All correspondence
              is handled with the discretion befitting The Circle.
            </p>
            <div className="flex items-center gap-3 mt-8">
              <div className="w-8 h-px bg-[#D4AF37]/50" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#D4AF37]/60" />
              <div className="w-8 h-px bg-[#D4AF37]/50" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        </section>

        {/* ── Info Cards ───────────────────────────────── */}
        <section className="relative py-16 md:py-20 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#0B0B0B 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hours */}
            <div className="glass-card p-7 flex flex-col gap-5">
              <p className="font-heading text-[0.6rem] tracking-[0.35em] text-[#D4AF37] uppercase">Business Hours</p>
              <div className="w-8 h-px bg-[#D4AF37]/30" />
              <div className="flex flex-col gap-3">
                {businessHours.map((h) => (
                  <div key={h.day} className="flex items-start justify-between gap-4">
                    <span className="font-sans text-xs text-[#F5F5F5]/50">{h.day}</span>
                    <span className="font-sans text-xs text-[#F5F5F5]/35 text-right">{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="font-sans text-[0.65rem] text-[#F5F5F5]/25 leading-relaxed mt-auto">
                Response times may vary. The Circle operates on its own schedule.
              </p>
            </div>

            {/* Location */}
            <div className="glass-card p-7 flex flex-col gap-5">
              <p className="font-heading text-[0.6rem] tracking-[0.35em] text-[#D4AF37] uppercase">Locations</p>
              <div className="w-8 h-px bg-[#D4AF37]/30" />
              <div className="flex flex-col gap-4">
                {[
                  { city: "London", detail: "Chapter House, Mayfair (private)" },
                  { city: "Geneva", detail: "Chapter House (private)" },
                  { city: "Global", detail: "42 countries, by appointment" },
                ].map((loc) => (
                  <div key={loc.city} className="flex flex-col gap-1">
                    <span className="font-heading text-xs tracking-[0.2em] text-[#F5F5F5]/60 uppercase">{loc.city}</span>
                    <span className="font-sans text-xs text-[#F5F5F5]/35">{loc.detail}</span>
                  </div>
                ))}
              </div>
              {/* Map placeholder */}
              <div className="mt-2 h-28 bg-[#141414] border border-[#D4AF37]/10 flex items-center justify-center">
                <span className="font-sans text-[0.65rem] tracking-[0.2em] text-[#F5F5F5]/20 uppercase">Map Placeholder</span>
              </div>
            </div>

            {/* Channels */}
            <div className="glass-card p-7 flex flex-col gap-5">
              <p className="font-heading text-[0.6rem] tracking-[0.35em] text-[#D4AF37] uppercase">Contact Channels</p>
              <div className="w-8 h-px bg-[#D4AF37]/30" />
              <div className="flex flex-col gap-4">
                {[
                  { label: "General", value: "contact@thehiddencircle.com" },
                  { label: "Press", value: "press@thehiddencircle.com" },
                  { label: "Products", value: "store@thehiddencircle.com" },
                  { label: "Phone", value: "+44 (0) 000 000 0000" },
                ].map((c) => (
                  <div key={c.label} className="flex flex-col gap-1">
                    <span className="font-sans text-[0.62rem] tracking-[0.2em] text-[#F5F5F5]/35 uppercase">{c.label}</span>
                    <span className="font-sans text-xs text-[#F5F5F5]/60">{c.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Contact Form ─────────────────────────────── */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
