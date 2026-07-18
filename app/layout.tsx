import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Hidden Circle",
  description:
    "An exclusive society of distinction, legacy, and purpose. Welcome to The Hidden Circle.",
  keywords: ["exclusive", "luxury", "society", "elite", "circle"],
  openGraph: {
    title: "The Hidden Circle",
    description: "An exclusive society of distinction, legacy, and purpose.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable}`}
    >
      <body className="bg-[#0B0B0B] text-[#F5F5F5] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
