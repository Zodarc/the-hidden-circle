"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, CheckCircle, Phone } from "lucide-react";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Join() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setFormState("submitting");

  const form = e.currentTarget;
  const formData = new FormData(form);

  const { error } = await supabase
    .from("join_requests")
    .insert([
      {
        first_name: formData.get("firstName"),
        last_name: formData.get("lastName"),
        email: formData.get("email"),
        country: formData.get("country"),
        profession: formData.get("profession"),
        message: formData.get("message"),
        phone: formData.get("phone"),
      },
    ]);

  if (error) {
    console.error(error);
    setFormState("error");
    return;
  }
  await fetch("/api/join", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    country: formData.get("country"),
    profession: formData.get("profession"),
    message: formData.get("message"),
    phone: formData.get("phone"),
  }),
});

  form.reset();
  setFormState("success");
};


  const inputClass = "input-field";

  return (
    <section
      id="join"
      ref={ref}
      className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 bg-[#0B0B0B] overflow-hidden"
    >
      {/* Background diamond ornament */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.025]">
        <div className="w-[640px] h-[640px] rotate-45 border border-[#D4AF37]" />
        <div className="absolute w-[480px] h-[480px] rotate-45 border border-[#D4AF37]" />
      </div>

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="section-eyebrow">Membership</p>
          <h2 className="section-title">Request Entry</h2>
          <div className="gold-divider mx-auto mt-2 mb-7" />
          <p className="font-sans text-sm text-[#F5F5F5]/45 leading-[1.85] max-w-md mx-auto">
            Membership is by invitation and review only. Submit your request and
            a representative of The Circle will be in touch.
          </p>
        </motion.div>

        {/* Form / Success */}
        {formState === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card flex flex-col items-center gap-5 py-16 px-8 text-center"
          >
            <div className="w-16 h-16 border border-[#D4AF37]/40 flex items-center justify-center">
              <CheckCircle size={32} className="text-[#D4AF37]" strokeWidth={1} />
            </div>
            <h3 className="font-heading text-xl tracking-[0.18em] text-[#F5F5F5] uppercase">
              Request Received
            </h3>
            <div className="w-10 h-px bg-[#D4AF37]/40" />
            <p className="font-sans text-sm text-[#F5F5F5]/45 leading-relaxed max-w-xs">
              Your request has been noted. The Circle will contact you through the
              appropriate channels.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card p-7 md:p-10"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>

              {/* Name row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2.5">
                  <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Your first name"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Your last name"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                  Email Address
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
                  Profession / Field
                </label>
                <input
                  type="text"
                  name="profession"
                  required
                  placeholder="Your field of distinction"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                  Why do you seek membership?
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Share your story and intent…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <div className="flex flex-col gap-2.5">
                <label className="font-sans text-[0.65rem] tracking-[0.28em] text-[#F5F5F5]/45 uppercase">
                  phone number{" "}
                  <span className="text-[#F5F5F5]/25 normal-case tracking-normal">(if any)</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  className={inputClass}
                />
              </div>

              {/* Divider */}
              <div className="h-px bg-[#D4AF37]/10 my-1" />

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
              >
                {formState === "submitting" ? (
                  <span className="animate-pulse tracking-[0.3em]">Submitting…</span>
                ) : (
                  <>
                    Submit Request <Send size={13} strokeWidth={1.5} />
                  </>
                )}
              </button>

              <p className="font-sans text-[0.68rem] text-[#F5F5F5]/28 text-center leading-[1.7] pt-1">
                All submissions are reviewed in strict confidence. The Circle reserves
                the right to decline without explanation.
              </p>
            </form>
          </motion.div>
        )}
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/15 to-transparent" />
    </section>
  );
}
