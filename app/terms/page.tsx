import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — The Hidden Circle",
  description: "Terms of Service for The Hidden Circle website and services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing or using the website located at thehiddencircle.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.

We reserve the right to modify these Terms at any time. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.`,
  },
  {
    title: "2. Fictional Entertainment Notice",
    content: `The Hidden Circle is a fictional entertainment concept. All content on this Site — including but not limited to descriptions of membership, history, gatherings, traditions, and organisational structure — is creative fiction.

The Hidden Circle is not affiliated with, does not represent, and is not recruiting for any real organisation, secret society, fraternal order, or group of any kind. No actual membership is offered or implied by anything on this Site.

This notice is part of these Terms and is incorporated by reference into all interactions with this Site.`,
  },
  {
    title: "3. Permitted Use",
    content: `You may use this Site for lawful personal purposes only. You may not:

— Use the Site in any way that violates applicable local, national, or international law or regulation.
— Transmit unsolicited commercial communications.
— Attempt to gain unauthorised access to any part of the Site or its infrastructure.
— Use automated tools (bots, scrapers, crawlers) to access the Site without our express written consent.
— Reproduce, duplicate, copy, sell, or resell any part of the Site without our written permission.
— Post or transmit any content that is defamatory, obscene, offensive, or otherwise objectionable.`,
  },
  {
    title: "4. Intellectual Property",
    content: `All content on this Site — including text, graphics, logos, images, and software — is the property of The Hidden Circle or its content suppliers and is protected by applicable intellectual property laws.

You may not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any content from this Site without our express written permission.`,
  },
  {
    title: "5. Products and Purchases",
    content: `Where products are available for purchase via this Site, the following terms apply:

Prices are displayed in the currency shown and are subject to change without notice.

We reserve the right to refuse any order, limit quantities, or discontinue products at any time.

All sales are final except where a return is permitted under our stated return policy (within thirty days of receipt for unused, undamaged items in original packaging).

Personalised or member-exclusive items are not eligible for return.

We are not responsible for delays caused by shipping carriers, customs authorities, or events outside our reasonable control.`,
  },
  {
    title: "6. Membership Expressions of Interest",
    content: `Submission of an expression of interest via the Join form does not constitute an offer of membership, a contract of any kind, or any obligation on the part of The Hidden Circle. The Hidden Circle is under no obligation to respond to, acknowledge, or consider any submission.

No payment is required or accepted in connection with an expression of interest. Any request for payment in connection with membership consideration should be treated as fraudulent and reported to us immediately.`,
  },
  {
    title: "7. Disclaimers",
    content: `This Site and its content are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.

We do not warrant that the Site will be uninterrupted or error-free, that defects will be corrected, or that the Site or the servers that make it available are free of viruses or other harmful components.`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the fullest extent permitted by applicable law, The Hidden Circle shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Site, even if we have been advised of the possibility of such damages.

Our total liability to you for any claim arising from these Terms or your use of the Site shall not exceed the amount you paid to us in the twelve months preceding the claim, or £100, whichever is greater.`,
  },
  {
    title: "9. Third-Party Links",
    content: `The Site may contain links to third-party websites. These links are provided for convenience only. We have no control over the content of those sites and accept no liability for them. The inclusion of any link does not imply endorsement by The Hidden Circle.`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.`,
  },
  {
    title: "11. Severability",
    content: `If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms shall otherwise remain in full force and effect.`,
  },
  {
    title: "12. Contact",
    content: `Questions about these Terms should be directed to:

legal@thehiddencircle.com

The Hidden Circle — Legal Enquiries
Mayfair, London (correspondence only)`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative pt-36 pb-16 md:pt-44 md:pb-20 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
          <div className="max-w-4xl mx-auto">
            <div className="w-12 h-px bg-[#D4AF37] mb-6" />
            <p className="section-eyebrow">Legal</p>
            <h1 className="font-heading text-[clamp(2rem,5vw,4rem)] tracking-[0.1em] text-[#F5F5F5] uppercase leading-[1.1] mb-4">
              Terms of Service
            </h1>
            <p className="font-sans text-sm text-[#F5F5F5]/35">Last updated: January 2025</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-20 px-6 md:px-10 bg-[#0B0B0B]">
          <div className="max-w-4xl mx-auto">
            {/* Fictional notice callout */}
            <div className="glass-card p-6 mb-12 border-l-2 border-[#D4AF37]/60">
              <p className="font-heading text-[0.62rem] tracking-[0.28em] text-[#D4AF37] uppercase mb-2">Important Notice</p>
              <p className="font-sans text-sm text-[#F5F5F5]/55 leading-[1.85]">
                The Hidden Circle is a fictional entertainment concept. It is not affiliated with
                any real organisation, secret society, or group. See Section 2 for full details.
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {sections.map((s) => (
                <div key={s.title} className="flex flex-col gap-4">
                  <h2 className="font-heading text-base tracking-[0.12em] text-[#D4AF37] uppercase">{s.title}</h2>
                  <div className="w-8 h-px bg-[#D4AF37]/30" />
                  <div className="font-sans text-sm md:text-base text-[#F5F5F5]/55 leading-[1.9] whitespace-pre-line">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
