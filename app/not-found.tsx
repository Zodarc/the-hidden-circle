import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-[#0B0B0B] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(212,175,55,0.04)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(45deg,#D4AF37 0,#D4AF37 1px,transparent 0,transparent 50%)", backgroundSize: "24px 24px" }}
        />

        <div className="text-center max-w-xl relative">
          <p className="font-heading text-[6rem] md:text-[8rem] text-[#D4AF37]/10 leading-none tracking-[0.1em] select-none mb-0">
            404
          </p>
          <div className="relative -mt-8">
            <div className="w-12 h-px bg-[#D4AF37] mx-auto mb-6" />
            <p className="section-eyebrow">Lost</p>
            <h1 className="font-heading text-3xl md:text-4xl tracking-[0.1em] text-[#F5F5F5] uppercase mb-6 leading-tight">
              This Page Does Not Exist
            </h1>
            <div className="gold-divider mx-auto mb-8" />
            <p className="font-sans text-base text-[#F5F5F5]/45 leading-[1.85] mb-10">
              Some things are not meant to be found. Return to where you came from,
              or start again from the beginning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="btn-primary">Return Home</Link>
              <Link href="/contact" className="btn-ghost">Contact The Circle</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
