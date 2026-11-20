"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "@/lib/faqs";

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>("turnaround");

  return (
    <section
      id="faqs"
      className="py-24 md:py-32 px-6 md:px-10 border-b border-white/6 relative z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#d4ff3a] mb-3">
            06 · Specifications
          </div>
          <h2
            className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] mb-4 text-balance"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
          >
            Clarity before day one.
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
            Everything you need to know about turnaround SLAs, repository
            access, intellectual property, and pausing sprints.
          </p>
        </div>

        <div className="lg:col-span-7 border-y border-white/8 divide-y divide-white/8">
          {FAQS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full py-6 text-left flex items-center justify-between gap-6 cursor-pointer group focus-visible:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`font-display text-base sm:text-lg font-medium transition-colors ${
                      isOpen
                        ? "text-[#d4ff3a]"
                        : "text-neutral-100 group-hover:text-white"
                    }`}
                  >
                    {item.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                      isOpen
                        ? "border-[#d4ff3a]/50 text-[#d4ff3a] bg-[#141c09]"
                        : "border-white/10 text-neutral-400 group-hover:text-white group-hover:border-white/25"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-sm text-neutral-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
