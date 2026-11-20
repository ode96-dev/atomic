"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useSpring, animated } from "@react-spring/web";
import confetti from "canvas-confetti";
import { ArrowUpRight, CheckCircle2, ArrowDown } from "lucide-react";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { scrollY } = useScroll();
  const arcY = useTransform(scrollY, [0, 600], [0, 90]);
  const arcOpacity = useTransform(scrollY, [0, 500], [1, 0.15]);

  const [pointerSpring, pointerApi] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 2, tension: 140, friction: 24 },
  }));

  const [{ scale }, btnApi] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 320, friction: 18 },
  }));

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    pointerApi.start({ xy: [x * 32, y * 18] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setErrorMessage("Enter a valid work email address.");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      confetti({
        particleCount: 64,
        spread: 55,
        origin: { y: 0.65 },
        colors: ["#d4ff3a", "#a3e635", "#ffffff"],
      });
    }, 450);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => pointerApi.start({ xy: [0, 0] })}
      className="relative min-h-[90vh] pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-6 border-b border-white/6"
    >
      <div className="absolute inset-0 architectural-grid opacity-55 pointer-events-none" />

      <motion.div
        style={{ y: arcY, opacity: arcOpacity }}
        className="absolute top-6 left-1/2 -translate-x-1/2 w-240 max-w-[140vw] h-140 pointer-events-none select-none z-0"
      >
        <animated.div
          style={{
            transform: pointerSpring.xy.to(
              (x, y) => `translate3d(${x}px, ${y}px, 0)`,
            ),
          }}
          className="w-full h-full"
        >
          <svg
            viewBox="0 0 1000 580"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4ff3a" stopOpacity="0" />
                <stop offset="22%" stopColor="#d4ff3a" stopOpacity="0.35" />
                <stop offset="50%" stopColor="#d4ff3a" stopOpacity="0.95" />
                <stop offset="78%" stopColor="#d4ff3a" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#d4ff3a" stopOpacity="0" />
              </linearGradient>
              <radialGradient id="horizonGlow" cx="50%" cy="32%" r="50%">
                <stop offset="0%" stopColor="#d4ff3a" stopOpacity="0.16" />
                <stop offset="55%" stopColor="#d4ff3a" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#070709" stopOpacity="0" />
              </radialGradient>
            </defs>

            <ellipse
              cx="500"
              cy="210"
              rx="440"
              ry="230"
              fill="url(#horizonGlow)"
            />

            <path
              d="M 110 470 A 430 315 0 0 1 890 470"
              stroke="#d4ff3a"
              strokeWidth="1"
              strokeDasharray="2 10"
              strokeOpacity="0.24"
            />
            <path
              d="M 165 455 A 375 275 0 0 1 835 455"
              stroke="#d4ff3a"
              strokeWidth="1"
              strokeDasharray="1 14"
              strokeOpacity="0.35"
            />

            <path
              d="M 215 435 A 315 240 0 0 1 785 435"
              stroke="url(#arcGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="filter drop-shadow-[0_0_18px_rgba(212,255,58,0.65)]"
            />

            <path
              d="M 270 428 A 260 198 0 0 1 730 428"
              stroke="#d4ff3a"
              strokeWidth="0.75"
              strokeOpacity="0.45"
            />

            <line
              x1="500"
              y1="176"
              x2="500"
              y2="204"
              stroke="#d4ff3a"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
            <line
              x1="486"
              y1="190"
              x2="514"
              y2="190"
              stroke="#d4ff3a"
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          </svg>
        </animated.div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.18em] text-[#d4ff3a] mb-7"
        >
          <span>Design Engineering Partner</span>
          <span aria-hidden="true" className="text-neutral-600">
            ·
          </span>
          <span className="text-neutral-400">Q4 Cohort Open</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold tracking-[-0.035em] text-white leading-[1.02] mb-7 text-balance"
          style={{ fontSize: "clamp(2.75rem, 6.2vw, 5.25rem)" }}
        >
          Design work,{" "}
          <span className="block text-transparent bg-clip-text bg-linear-to-b from-white via-white to-neutral-400">
            the efficient way.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-neutral-400 max-w-xl mb-11 leading-relaxed font-normal"
        >
          Principal-grade product design, motion systems, and frontend
          architecture for high-velocity technology teams—shipped on a
          predictable subscription.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-md"
        >
          {status === "success" ? (
            <div className="flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#121a08] border border-[#d4ff3a]/40 rounded-xl text-[#d4ff3a] text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Spot reserved. Expect your onboarding link shortly.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex items-center bg-[#0e0e12] border border-white/15 hover:border-white/25 focus-within:border-[#d4ff3a]/70 rounded-xl p-1.5 transition-colors shadow-2xl shadow-black/70">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="name@company.com"
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none min-w-0"
                  aria-label="Work email address"
                  required
                />

                <animated.button
                  style={{ transform: scale.to((s) => `scale(${s})`) }}
                  onMouseDown={() => btnApi.start({ scale: 0.96 })}
                  onMouseUp={() => btnApi.start({ scale: 1 })}
                  onMouseLeave={() => btnApi.start({ scale: 1 })}
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-[#d4ff3a] hover:bg-[#c5f525] text-[#070709] font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 cursor-pointer disabled:opacity-70"
                >
                  <span>{status === "loading" ? "Reserving..." : ""}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </animated.button>
              </div>

              {status === "error" && (
                <p className="mt-2.5 text-xs text-rose-400 font-medium">
                  {errorMessage}
                </p>
              )}
            </form>
          )}

          <div className="mt-4 flex items-center justify-center gap-3 text-xs text-neutral-500 font-mono">
            <span>2 slots remaining this month</span>
            <span aria-hidden="true">·</span>
            <span>48h average turnaround</span>
          </div>
        </motion.div>
      </div>

      <a
        href="#features"
        className="mt-16 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 hover:text-neutral-300 transition-colors"
        aria-label="Scroll to capabilities"
      >
        <span>Explore Studio</span>
        <ArrowDown className="w-3.5 h-3.5" />
      </a>
    </section>
  );
}
