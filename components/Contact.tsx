"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

type FormState = "idle" | "submitting" | "success";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setFormState("submitting");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const res = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    }),
  });

  if (!res.ok) {
    alert("Unable to send message.");
    setFormState("idle");
    return;
  }

  form.reset();
  setFormState("success");
};

  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@thehiddencircle.com",
      href: "mailto:contact@thehiddencircle.com",
    },
    { icon: MapPin, label: "Location", value: "Undisclosed", href: null },
    { icon: Phone, label: "Enquiries", value: "By appointment only", href: null },
  ];

  const inputClass = "input-field";

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0d0d 0%, #0B0B0B 100%)" }}
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
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title">Contact</h2>
          <div className="gold-divider mx-auto mt-2" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">

          {/* Left — contact details */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-9"
          >
            <p className="font-sans text-[#F5F5F5]/55 leading-[1.85] text-base">
              For general enquiries, partnerships, or press — reach out through
              the appropriate channel. All correspondence is handled with the
              discretion befitting The Circle.
            </p>

            <div className="flex flex-col gap-6">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;
                return (
                  <div key={detail.label} className="flex items-center gap-5">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors duration-300 relative">
                      <Icon size={15} className="text-[#D4AF37]" strokeWidth={1.5} />
                      {/* Corner accents */}
                      <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 border-t border-l border-[#D4AF37]/50" />
                      <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 border-b border-r border-[#D4AF37]/50" />
                    </div>
                    <div>
                      <p className="font-sans text-[0.62rem] tracking-[0.25em] text-[#F5F5F5]/35 uppercase mb-1">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          className="font-sans text-sm text-[#F5F5F5]/80 hover:text-[#D4AF37] transition-colors duration-300"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-sans text-sm text-[#F5F5F5]/80">{detail.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ornament */}
            <div className="flex items-center gap-5 pt-2">
              <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
              <div className="w-2 h-2 rotate-45 border border-[#D4AF37]/40" />
            </div>

            {/* Aside quote */}
            <blockquote className="border-l-2 border-[#D4AF37]/30 pl-5">
              <p className="font-heading text-sm tracking-[0.06em] text-[#F5F5F5]/35 italic leading-relaxed">
                &ldquo;Secrecy is the price of distinction.&rdquo;
              </p>
            </blockquote>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {formState === "success" ? (
              <div className="glass-card flex flex-col items-center gap-5 py-16 px-8 text-center h-full justify-center">
                <div className="w-14 h-14 border border-[#D4AF37]/40 flex items-center justify-center">
                  <Send size={22} className="text-[#D4AF37]" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading text-lg tracking-[0.18em] text-[#F5F5F5] uppercase">
                  Message Sent
                </h3>
                <div className="w-8 h-px bg-[#D4AF37]/40" />
                <p className="font-sans text-sm text-[#F5F5F5]/45 max-w-xs leading-relaxed">
                  Your message has been received. We will respond in due course.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card flex flex-col gap-5 p-7 md:p-9"
                noValidate
              >
                <div className="flex flex-col gap-2.5">
                  <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Nature of enquiry"
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-2.5">
                  <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Your message…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-[#D4AF37]/10" />

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="btn-ghost w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? (
                    <span className="animate-pulse tracking-[0.3em]">Sending…</span>
                  ) : (
                    <>
                      Send Message <Send size={13} strokeWidth={1.5} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
    </section>
  );
}
