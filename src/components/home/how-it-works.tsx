"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { STEPS } from "@/lib/steps";

export function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeStep = STEPS[activeIndex];

  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 px-6 md:px-10 border-b border-white/6 relative z-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <div
          aria-hidden="true"
          className="pointer-events-none select-none font-mono font-bold tabular-nums text-white/[0.035] leading-none tracking-tighter absolute -right-4 top-20 lg:top-8 z-0 overflow-hidden"
          style={{ fontSize: "clamp(7rem, 18vw, 15rem)" }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={activeStep.index}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="block"
            >
              {activeStep.index}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="mb-14 relative z-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.16em] text-[#d4ff3a] mb-3">
            <span className="px-1.5 py-0.5 rounded bg-white/6 text-neutral-400 tabular-nums">
              03
            </span>
            <span>Methodology</span>
          </div>
          <h2
            className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] max-w-2xl text-balance"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Top-tier craft, shipped without meetings.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10">
          <div className="lg:col-span-6 divide-y divide-white/8 border-y border-white/8">
            {STEPS.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="w-full py-7 text-left flex items-start gap-5 group cursor-pointer focus-visible:outline-none"
                >
                  <span
                    className={`font-mono text-sm tabular-nums px-2 py-0.5 rounded transition-colors ${
                      isActive
                        ? "bg-white/8 text-[#d4ff3a]"
                        : "bg-white/4 text-neutral-500 group-hover:bg-white/[0.07] group-hover:text-neutral-300"
                    }`}
                  >
                    {step.index}.
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3
                        className={`font-display text-xl font-semibold transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-neutral-400 group-hover:text-neutral-200"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <span className="text-xs font-mono text-neutral-500 shrink-0">
                        {step.sla}
                      </span>
                    </div>

                    <p
                      className={`text-sm leading-relaxed transition-colors ${
                        isActive ? "text-neutral-300" : "text-neutral-500"
                      }`}
                    >
                      {step.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#0d0d10]/90 backdrop-blur-xs border border-white/8 rounded-sm p-6 sm:p-8 min-h-85 flex flex-col justify-between overflow-hidden">
              <div
                aria-hidden="true"
                className="pointer-events-none select-none font-mono font-bold tabular-nums text-white/4 leading-none tracking-tighter absolute right-6 bottom-12 z-0"
                style={{ fontSize: "clamp(5.5rem, 11vw, 9rem)" }}
              >
                {activeStep.index}
              </div>

              <div className="relative z-10 flex items-center justify-between pb-5 border-b border-white/6">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-display text-base font-semibold text-white">
                      {activeStep.previewTitle}
                    </div>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 py-6 space-y-3"
                >
                  {activeStep.queueItems.map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center justify-between gap-4 px-4 py-3.5 rounded-xl bg-[#070709] border border-white/6"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <Check className="w-4 h-4 text-[#d4ff3a] shrink-0" />
                        <span className="text-sm text-neutral-100 font-medium truncate">
                          {row.name}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs font-mono shrink-0">
                        <span className="text-neutral-400 hidden sm:inline">
                          {row.status}
                        </span>
                        <span
                          className="text-neutral-600 hidden sm:inline"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                        <span className="text-[#d4ff3a] tabular-nums">
                          {row.eta}
                        </span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              <div className="relative z-10 pt-4 border-t border-white/6 flex items-center justify-between text-xs text-neutral-500">
                <span>Click any stage on the left to inspect deliverables</span>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) => (prev + 1) % STEPS.length)
                  }
                  className="inline-flex items-center gap-1 text-neutral-300 hover:text-[#d4ff3a] transition-colors font-medium cursor-pointer"
                >
                  <span>Next stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
