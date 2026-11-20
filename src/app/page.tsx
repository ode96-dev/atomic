"use client";

import { HeroSection } from "@/components/home/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070709] text-[#ededef] relative overflow-x-hidden">
      <div
        className="studio-grain pointer-events-none fixed inset-0 z-40 opacity-70"
        aria-hidden="true"
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-135 lime-horizon-glow pointer-events-none z-0" />

      <div id="hero">
        <HeroSection />
      </div>
    </main>
  );
}
