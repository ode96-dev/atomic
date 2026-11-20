import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Atomic - Design Work, The Efficient Way",
  description:
    "Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology.",
  openGraph: {
    title: "Atomic - Design Work, The Efficient Way",
    description:
      "Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Atomic - Design Work, The Efficient Way",
    description:
      "Innovative design solutions for technology firms and emerging businesses weary of the typical aesthetic methodology.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${bricolage.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-[#070709] text-[#ededef] antialiased selection:bg-[#d4ff3a] selection:text-[#070709] font-sans min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
