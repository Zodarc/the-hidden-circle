import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "History — The Hidden Circle",
  description:
    "A century of legacy. Explore the milestones, turning points, and defining moments of The Hidden Circle from 1921 to the present.",
};

const timelineEvents = [
  {
    year: "1921",
    era: "The Founding Era",
    title: "The First Assembly",
    description:
      "Six individuals gathered at a private estate outside London. They drafted three founding principles and affixed their seals to a document that has never been photographed or reproduced. The Hidden Circle was established.",
    details: [
      "Six founding members from business, diplomacy, philosophy, and the arts",
      "Three principles drafted and sealed on vellum",
      "First meeting place: a private estate in the English countryside",
    ],
  },
  {
    year: "1929",
    era: "The Founding Era",
    title: "The First Crisis",
    description:
      "The global financial collapse tested The Circle's first generation. Several founding members faced personal financial ruin. The Circle's network proved its value — not through financial rescue, but through the kind of counsel and solidarity that cannot be purchased.",
    details: [
      "Three founding members directly affected by the collapse",
      "First recorded instance of formal counsel between members",
      "The principle of 'elevation over extraction' first articulated",
    ],
  },
  {
    year: "1938",
    era: "The Wartime Era",
    title: "The London Chapter House",
    description:
      "The Circle established its first permanent physical presence: a chapter house in Mayfair, London. The address has never been made public. The building still stands.",
    details: [
      "First permanent chapter house established",
      "Private archive room created",
      "Membership reaches 24 individuals across nine countries",
    ],
  },
  {
    year: "1947",
    era: "The Expansion Era",
    title: "The First International Assembly",
    description:
      "Representatives from eight countries gathered for the first formally international assembly. The Circle agreed to expand its geographic scope while maintaining its stringent admission criteria. The Expansion Delegation remains one of the most studied moments in The Circle's history.",
    details: [
      "First gathering with members from outside Europe",
      "Eight countries represented",
      "Formal expansion of admission criteria to include all disciplines",
    ],
  },
  {
    year: "1955",
    era: "The Expansion Era",
    title: "The Archive Established",
    description:
      "The Circle's private archive — containing correspondence, meeting notes, and documents spanning three decades — was formally organised and placed under the custody of the first Archivist. The archive has grown continuously since.",
    details: [
      "First formal archive custodian appointed",
      "Over 2,000 documents catalogued",
      "Private library of recommended works established",
    ],
  },
  {
    year: "1968",
    era: "The Reformation Era",
    title: "The Reformation",
    description:
      "The most consequential internal debate in The Circle's history lasted eighteen months. Led by a member known only as the Advocate, the Reformation expanded the admission process, established a formal mentorship obligation, and dissolved all geographic restrictions.",
    details: [
      "Geographic restrictions on membership formally dissolved",
      "Mentorship obligation established for senior members",
      "Admission process expanded to all disciplines equally",
    ],
  },
  {
    year: "1993",
    era: "The Renaissance Era",
    title: "The Renaissance",
    description:
      "A new generation of members — drawn from emerging industries in technology, media, and global finance — brought new energy to The Circle. The Renaissance marked the first time a majority of new inductees came from outside the traditional disciplines of the founding era.",
    details: [
      "First technology and media professionals inducted",
      "Membership grows beyond 200 for the first time",
      "The Reading Guide updated for the first time in 30 years",
    ],
  },
  {
    year: "2010",
    era: "The Modern Era",
    title: "The Digital Transition",
    description:
      "The Circle adapted to a world of radical transparency while preserving its foundational commitment to privacy. Secure digital communication channels were established. The Circle's first secure digital archive was created alongside the existing physical one.",
    details: [
      "Secure digital communication protocols established",
      "Digital archive created in parallel to physical archive",
      "The Circle's website — this one — conceptualised",
    ],
  },
  {
    year: "2021",
    era: "The Modern Era",
    title: "The Centenary",
    description:
      "One hundred years after the first assembly, members gathered once more. The Centenary Gathering was the largest in The Circle's history. A special edition gold seal was produced: one hundred cast, numbered, and distributed to senior members.",
    details: [
      "Largest gathering in The Circle's history",
      "100 centenary seals produced and distributed",
      "The Centenary Edition Reading Guide published",
    ],
  },
];

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Heritage"
          title="A Century of Legacy"
          subtitle="From a private gathering in 1921 to a global network spanning four continents. One hundred years of discretion, excellence, and mutual elevation."
          breadcrumbs={[{ label: "History" }]}
        />

        {/* ── Timeline ─────────────────────────────────── */}
        <section className="relative py-24 md:py-32 px-6 md:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg,#0d0d0d 0%,#090909 100%)" }}>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

          {/* Desktop spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent hidden lg:block" />

          <div className="max-w-7xl mx-auto">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col lg:flex-row items-start gap-8 mb-12 lg:mb-0 lg:pb-16 ${isLeft ? "" : "lg:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`flex-1 ${isLeft ? "lg:pr-16" : "lg:pl-16"}`}>
                    <div className="glass-card p-7 md:p-9">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <span className="font-heading text-3xl text-[#D4AF37] leading-none tracking-wider">{event.year}</span>
                        <span className="font-sans text-[0.62rem] tracking-[0.2em] text-[#D4AF37]/60 uppercase border border-[#D4AF37]/20 px-2.5 py-1 flex-shrink-0">{event.era}</span>
                      </div>
                      <div className="w-8 h-px bg-[#D4AF37]/40 my-4" />
                      <h3 className="font-heading text-base md:text-lg tracking-[0.12em] text-[#F5F5F5] uppercase mb-4 leading-snug">{event.title}</h3>
                      <p className="font-sans text-sm md:text-base text-[#F5F5F5]/55 leading-[1.85] mb-6">{event.description}</p>
                      <ul className="flex flex-col gap-2.5">
                        {event.details.map((d) => (
                          <li key={d} className="flex items-start gap-3 font-sans text-xs text-[#F5F5F5]/38">
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37]/50 flex-shrink-0 mt-1.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Centre node */}
                  <div className="hidden lg:flex flex-col items-center flex-shrink-0 pt-9">
                    <div className="w-5 h-5 rotate-45 border-2 border-[#D4AF37] bg-[#090909] shadow-[0_0_16px_rgba(212,175,55,0.4)]" />
                  </div>

                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
        </section>

        {/* ── Articles CTA ─────────────────────────────── */}
        <section className="relative py-24 md:py-28 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-eyebrow">Deeper Reading</p>
            <h2 className="section-title">The Archive</h2>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-sans text-base text-[#F5F5F5]/50 leading-[1.85] mb-10">
              Our published articles explore the history, philosophy, and traditions of The Circle
              in greater depth. The Archive contains work by The Archivist, The Historian, and
              other members who have chosen to write.
            </p>
            <Link href="/articles" className="btn-ghost">Browse The Archive</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
