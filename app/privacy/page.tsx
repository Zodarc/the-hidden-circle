import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — The Hidden Circle",
  description: "The Hidden Circle privacy policy. How we collect, use, and protect your information.",
};

const sections = [
  {
    title: "1. Introduction",
    content: `The Hidden Circle ("we," "us," or "our") operates this website and the services available through it. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or submit an expression of interest for membership.

Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.`,
  },
  {
    title: "2. Information We Collect",
    content: `We may collect the following categories of information:

Personal identification information: Name, email address, and any other information you voluntarily provide when completing our contact or membership request forms.

Usage data: Information your browser sends when you visit our site, including IP address, browser type, pages viewed, time and date of your visit, and time spent on pages.

Cookies: We may use cookies and similar tracking technologies to enhance your experience. See Section 7 for more detail.`,
  },
  {
    title: "3. How We Use Your Information",
    content: `We use the information we collect to:

— Respond to enquiries submitted via our contact form.
— Review and process expressions of interest submitted via our membership request form.
— Improve the content and functionality of the website.
— Monitor usage patterns and analyse trends.
— Comply with applicable legal obligations.

We do not sell, trade, or transfer your personal information to third parties without your consent, except as described in this policy.`,
  },
  {
    title: "4. Membership Expressions of Interest",
    content: `Information submitted via the membership request form is treated with the highest degree of confidentiality. This information is reviewed only by the Admission Council and is not shared with any third party. Submissions are retained for no longer than twelve months from the date of receipt, after which they are permanently deleted unless active consideration is ongoing.`,
  },
  {
    title: "5. Data Sharing and Disclosure",
    content: `We may disclose your information in the following limited circumstances:

Legal compliance: If required to do so by law or in response to valid requests by public authorities (e.g. court order or government agency).

Business protection: To protect and defend the rights or property of The Hidden Circle, including to enforce our Terms of Service.

Safety: To protect the personal safety of users of the website or the public.

We do not disclose member or applicant information to advertisers, partners, or any other commercial third parties.`,
  },
  {
    title: "6. Data Retention",
    content: `We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Contact form submissions are retained for a maximum of twelve months. Website usage data is retained for a maximum of twenty-four months.`,
  },
  {
    title: "7. Cookies",
    content: `Our website may use cookies — small files placed on your device — to improve your browsing experience. Cookies allow us to recognise your browser on subsequent visits and to understand how you use the site.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the site may not function properly without cookies.`,
  },
  {
    title: "8. Third-Party Links",
    content: `Our website may contain links to third-party sites. We have no control over the content, privacy policies, or practices of those sites and accept no responsibility for them. We encourage you to review the privacy policy of any third-party site you visit.`,
  },
  {
    title: "9. Your Rights",
    content: `Depending on your jurisdiction, you may have the following rights with respect to your personal data:

— The right to access the personal data we hold about you.
— The right to request correction of inaccurate data.
— The right to request deletion of your data.
— The right to object to processing of your data.
— The right to data portability.

To exercise any of these rights, please contact us at privacy@thehiddencircle.com. We will respond within thirty days.`,
  },
  {
    title: "10. Children's Privacy",
    content: `Our website is not directed at individuals under the age of 18. We do not knowingly collect personal information from anyone under 18. If you believe we have collected information from a minor, please contact us immediately and we will take steps to delete it.`,
  },
  {
    title: "11. Changes to This Policy",
    content: `We reserve the right to update this Privacy Policy at any time. When we do, we will revise the "Last Updated" date at the top of this page. We encourage you to review this policy periodically for any changes.`,
  },
  {
    title: "12. Contact",
    content: `If you have any questions about this Privacy Policy, please contact us at:

privacy@thehiddencircle.com

The Hidden Circle — Privacy Enquiries
Mayfair, London (correspondence only)`,
  },
];

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="font-sans text-sm text-[#F5F5F5]/35">Last updated: January 2025</p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        </section>

        {/* Content */}
        <section className="relative py-16 md:py-20 px-6 md:px-10 bg-[#0B0B0B]">
          <div className="max-w-4xl mx-auto">
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
