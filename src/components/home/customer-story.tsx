"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Play, ArrowUpRight } from "lucide-react";
import { VideoModal } from "../video-modal/video-modal";
import { CaseStudyModal } from "@/components/case-study-modal/case-study-modal";

export function CustomerStory() {
  const [videoOpen, setVideoOpen] = useState(false);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <section
      id="case-study"
      className="py-24 md:py-32 px-6 md:px-10 border-b border-white/6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch"
        >
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#d4ff3a] mb-5">
                04 · Customer Story — Kinetix Labs
              </div>

              <blockquote
                className="font-display font-medium text-white leading-[1.2] tracking-tight mb-8 text-balance"
                style={{ fontSize: "clamp(1.65rem, 2.8vw, 2.5rem)" }}
              >
                &ldquo;Our product expansion no longer stalls on six-month
                design recruiting cycles. Atomic operates like a founding design
                team inside our repository.&rdquo;
              </blockquote>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-white/8 mb-7">
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-[#d4ff3a] tabular-nums">
                    +240%
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    Shipped velocity
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                    -62%
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    Burn vs FTE hire
                  </div>
                </div>
                <div>
                  <div className="font-display text-xl sm:text-2xl font-bold text-white tabular-nums">
                    38h
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">
                    Median drop time
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCaseStudyOpen(true)}
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#d4ff3a] transition-colors cursor-pointer group"
              >
                <span>Read the full case study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div
              onClick={() => setVideoOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setVideoOpen(true);
                }
              }}
              aria-label="Play interview with Julian Vance, Founder at Kinetix Labs"
              className="relative h-full min-h-80 sm:min-h-95 rounded-2xl overflow-hidden border border-white/8 group cursor-pointer bg-[#0d0d10]"
            >
              <Image
                src="/assets/images/customer_founder_story_1791720577789.jpg"
                alt="Julian Vance working at dual displays in Kinetix Labs studio"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-16 h-16 rounded-full bg-black/55 group-hover:bg-[#d4ff3a] text-white group-hover:text-[#070709] backdrop-blur-md border border-white/25 group-hover:border-[#d4ff3a] flex items-center justify-center transition-all duration-300 shadow-2xl">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between z-10">
                <div>
                  <div className="font-display text-base font-semibold text-white">
                    Julian Vance
                  </div>
                  <div className="text-xs text-neutral-300">
                    Founder & VP of Product · Kinetix Labs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        founderName="Julian Vance"
        role="Founder & VP of Product · Kinetix Labs"
      />

      <CaseStudyModal
        isOpen={caseStudyOpen}
        onClose={() => setCaseStudyOpen(false)}
      />
    </section>
  );
}
