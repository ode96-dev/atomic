"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useSpring, animated } from "@react-spring/web";
import { ArrowUpRight } from "lucide-react";
import { INTEGRATIONS } from "@/lib/integration";
import { VELOCITY_POINTS } from "@/lib/velocity-points";
import { CRAFT_SPECS } from "@/lib/craft-specs";
import { GROWTH_BARS } from "@/lib/growth-bars";

export function FeatureBento() {
  const [activeBar, setActiveBar] = useState<number>(7);
  const [activeNode, setActiveNode] = useState<number>(3);
  const [activeIntegration, setActiveIntegration] = useState<string>("figma");
  const [activeSpec, setActiveSpec] = useState<string>("systems");

  const [tiltSpring, setTilt] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 2, tension: 320, friction: 28 },
  }));

  const [cursorCoords, setCursorCoords] = useState({ x: 64, y: 48 });
  const [cursorSpring, setCursorSpring] = useSpring(() => ({
    xy: [185, 76],
    config: { mass: 1, tension: 220, friction: 22 },
  }));

  const currentIntegration =
    INTEGRATIONS.find((i) => i.id === activeIntegration) || INTEGRATIONS[0];
  const currentSpec =
    CRAFT_SPECS.find((s) => s.id === activeSpec) || CRAFT_SPECS[0];
  const currentVelocity = VELOCITY_POINTS[activeNode];

  return (
    <section
      id="features"
      className="py-24 md:py-32 px-6 md:px-10 border-b border-white/6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#d4ff3a] mb-3">
              02 · Capabilities
            </div>
            <h2
              className="font-display font-bold text-white tracking-[-0.03em] leading-[1.08] max-w-2xl text-balance"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3.25rem)" }}
            >
              Built for shipping velocity, engineered for craft.
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
            Every engagement replaces fragmented freelance sourcing with a
            single senior studio embedded in your stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          <div className="lg:col-span-4 bg-[#0d0d10] border border-white/8 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between transition-colors">
            <div className="bg-[#070709] border border-white/6 rounded-xl p-5 mb-6 h-56 flex flex-col justify-between">
              <div className="flex items-baseline justify-between">
                <div>
                  <span className="font-display text-lg font-semibold text-white tabular-nums">
                    {GROWTH_BARS[activeBar].output}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#d4ff3a] tabular-nums">
                  {GROWTH_BARS[activeBar].label}
                </span>
              </div>

              <div className="flex items-end justify-between gap-2 h-28 pt-2">
                {GROWTH_BARS.map((bar, i) => {
                  const isActive = activeBar === i;
                  return (
                    <button
                      key={bar.label}
                      type="button"
                      onMouseEnter={() => setActiveBar(i)}
                      onFocus={() => setActiveBar(i)}
                      onClick={() => setActiveBar(i)}
                      aria-label={`${bar.label}: ${bar.output}`}
                      className="flex-1 h-full flex items-end justify-center cursor-pointer focus-visible:outline-none"
                    >
                      <div
                        style={{ height: `${bar.height}%` }}
                        className={`w-full rounded-sm transition-all duration-200 ${
                          isActive
                            ? "bg-[#d4ff3a] shadow-[0_0_16px_rgba(212,255,58,0.45)]"
                            : "bg-white/15 hover:bg-white/30"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between text-[11px] font-mono text-neutral-500 pt-2 border-t border-white/6">
                <span className="text-neutral-300 tabular-nums">
                  $142k/yr saved
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-1.5">
                Predictable unit economics
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Senior principal output at a fraction of full-time hiring,
                benefits, and recruiter retainers.
              </p>
            </div>
          </div>

          <animated.div
            style={{
              transform: tiltSpring.xys.to(
                (x, y, s) =>
                  `perspective(900px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`,
              ),
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = (e.clientY - rect.top) / rect.height - 0.5;
              const y = (e.clientX - rect.left) / rect.width - 0.5;
              setTilt.start({ xys: [-x * 8, y * 8, 1.01] });
            }}
            onMouseLeave={() => setTilt.start({ xys: [0, 0, 1] })}
            className="lg:col-span-5 bg-[#0d0d10] border border-white/8 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between transition-colors"
          >
            <div className="relative h-56 rounded-xl overflow-hidden border border-white/6 mb-6 bg-[#070709] group">
              <Image
                src="/assets/images/futuristic_tech_headset_1791720590679.jpg"
                alt="Bespoke spatial computing industrial interface"
                fill
                className="object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 42vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent" />
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-1.5">
                Tailor-made architecture
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Zero recycled templates. Every visual system, motion curve, and
                interface is authored from first principles.
              </p>
            </div>
          </animated.div>

          <div className="lg:col-span-3 bg-[#0d0d10] border border-white/8 hover:border-white/20 rounded-2xl p-6 flex flex-col justify-between transition-colors">
            <div className="bg-[#070709] border border-white/6 rounded-xl p-4 mb-6 h-56 flex flex-col justify-between">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-mono text-[#d4ff3a] tabular-nums">
                  {currentVelocity.turnaround} SLA
                </span>
              </div>

              <svg
                viewBox="0 0 300 140"
                className="w-full h-32 overflow-visible"
                fill="none"
              >
                {[30, 65, 100].map((y) => (
                  <line
                    key={y}
                    x1="12"
                    y1={y}
                    x2="288"
                    y2={y}
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="2 5"
                  />
                ))}

                <path
                  d="M 25 122 C 75 118, 110 96, 150 78 S 225 32, 272 18"
                  stroke="#d4ff3a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="filter drop-shadow-[0_0_8px_rgba(212,255,58,0.55)]"
                />

                {VELOCITY_POINTS.map((pt, idx) => {
                  const selected = activeNode === idx;
                  return (
                    <g
                      key={pt.sprint}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveNode(idx)}
                      onClick={() => setActiveNode(idx)}
                    >
                      <circle cx={pt.x} cy={pt.y} r="14" fill="transparent" />
                      {selected && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="10"
                          fill="#d4ff3a"
                          fillOpacity="0.2"
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={selected ? 5 : 3.5}
                        fill={selected ? "#d4ff3a" : "#71717a"}
                      />
                    </g>
                  );
                })}
              </svg>

              <div className="text-[11px] font-mono text-neutral-400 flex items-center justify-between pt-2 border-t border-white/6">
                <span className="text-white tabular-nums">
                  {currentVelocity.throughput}
                </span>
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-1.5">
                Scalable cadence
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Dial capacity up during launches or pause with zero penalty.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-10">
          <div className="lg:col-span-5 bg-[#0d0d10] border border-white/8 hover:border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 transition-colors">
            <div>
              <h3 className="font-display text-lg font-semibold text-white mb-1.5">
                Native stack integration
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Zero external portals required. Select a tool below to inspect
                how we plug into your workflow.
              </p>
            </div>

            <div className="bg-[#070709] border border-white/6 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                {INTEGRATIONS.map((tool) => {
                  const active = activeIntegration === tool.id;
                  return (
                    <button
                      key={tool.id}
                      type="button"
                      onClick={() => setActiveIntegration(tool.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                        active
                          ? "bg-[#d4ff3a] text-[#070709] font-semibold"
                          : "bg-[#121216] text-neutral-400 hover:text-white border border-white/6"
                      }`}
                    >
                      {tool.name}
                    </button>
                  );
                })}
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed min-h-10">
                {currentIntegration.sync}
              </p>
            </div>
          </div>

          <div
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = Math.round(e.clientX - rect.left);
              const y = Math.round(e.clientY - rect.top);
              setCursorCoords({ x, y });
              setCursorSpring.start({
                xy: [
                  Math.min(Math.max(x, 24), rect.width - 110),
                  Math.min(Math.max(y, 24), rect.height - 36),
                ],
              });
            }}
            className="lg:col-span-7 bg-[#0d0d10] border border-white/8 hover:border-white/20 rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 relative overflow-hidden transition-colors cursor-crosshair"
          >
            <div className="architectural-grid absolute inset-0 opacity-40 pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="max-w-sm">
                <h3 className="font-display text-lg font-semibold text-white mb-1.5">
                  Multiplayer critique & handoff
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  Comment directly on live frames alongside our art directors.
                  Move your pointer across this canvas to preview live
                  co-presence.
                </p>
              </div>

              <div className="text-xs font-mono text-neutral-500 tabular-nums shrink-0">
                X:{cursorCoords.x} · Y:{cursorCoords.y}
              </div>
            </div>

            <div className="relative z-10 h-28 bg-[#070709]/90 border border-white/6 rounded-xl p-4 flex items-center justify-between overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {[
                    { initials: "EC", bg: "bg-zinc-800 text-neutral-200" },
                    { initials: "MK", bg: "bg-zinc-700 text-neutral-100" },
                    {
                      initials: "SO",
                      bg: "bg-[#1b250d] text-[#d4ff3a] border-[#d4ff3a]/50",
                    },
                  ].map((m) => (
                    <div
                      key={m.initials}
                      className={`w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[11px] font-mono font-medium ${m.bg}`}
                    >
                      {m.initials}
                    </div>
                  ))}
                </div>
                <div className="text-xs text-neutral-400">
                  <span className="text-neutral-200 font-medium">3 active</span>
                  <span className="mx-1.5 text-neutral-600">·</span>
                  <span>Hero_Spec_v4.fig</span>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-[#d4ff3a]">
                <span>Synced</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>

              <animated.div
                style={{
                  transform: cursorSpring.xy.to(
                    (x, y) =>
                      `translate3d(${Math.min(x, 340)}px, ${Math.min(y, 68)}px, 0)`,
                  ),
                }}
                className="absolute top-0 left-0 pointer-events-none flex items-start gap-1"
              >
                <svg
                  className="w-3.5 h-3.5 fill-[#d4ff3a]"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M3 3l7 18 3-7 7-3L3 3z" />
                </svg>
                <span className="bg-[#d4ff3a] text-[#070709] text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                  Elijah · Art Dir
                </span>
              </animated.div>
            </div>
          </div>
        </div>

        <div className="bg-[#0d0d10] border border-white/8 rounded-2xl p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-1.5 pb-5 border-b border-white/6">
            {CRAFT_SPECS.map((spec) => {
              const active = activeSpec === spec.id;
              return (
                <button
                  key={spec.id}
                  type="button"
                  onClick={() => setActiveSpec(spec.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? "text-[#070709] font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeSpecBg"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 bg-[#d4ff3a] rounded-lg"
                    />
                  )}
                  <span className="relative z-10">{spec.label}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSpec.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <p className="text-sm text-neutral-200 leading-relaxed max-w-2xl">
                {currentSpec.deliverable}
              </p>
              <div className="text-xs font-mono text-[#d4ff3a] whitespace-nowrap shrink-0">
                {currentSpec.turnaround}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
