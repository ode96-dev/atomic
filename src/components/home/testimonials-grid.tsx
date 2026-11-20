"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { TESTIMONIALS } from "@/lib/testimonials";

export function TestimonialsGrid() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "fintech" | "devtools" | "commerce"
  >("all");

  const filtered =
    activeFilter === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeFilter);

  const filters = [
    { id: "all", label: "All Partners" },
    { id: "fintech", label: "Fintech" },
    { id: "devtools", label: "DevTools & AI" },
    { id: "commerce", label: "Flagship Web" },
  ] as const;

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 px-6 md:px-10 border-b border-white/6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#d4ff3a] mb-3">
              05 · Partner Perspectives
            </div>
            <h2
              className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] text-balance"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
            >
              What product leaders say.
            </h2>
          </div>

          <div className="inline-flex items-center gap-1 p-1 bg-[#0d0d10] border border-white/8 rounded-xl self-start md:self-auto">
            {filters.map((tab) => {
              const active = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? "text-[#070709] font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="testimonialFilterBg"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 bg-[#d4ff3a] rounded-lg"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              className="bg-[#0d0d10] border border-white/8 hover:border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-full bg-[#15151a] border border-white/15 flex items-center justify-center text-xs font-mono font-semibold text-neutral-200 shrink-0">
                    {item.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-sm font-semibold text-white truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-neutral-400 truncate">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  &ldquo;{item.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/6 flex items-center justify-between text-xs font-mono">
                <span className="text-[#d4ff3a]">{item.outcome}</span>
                <span className="text-neutral-500">{item.date}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
