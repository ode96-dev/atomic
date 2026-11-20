"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { LottieAnimation } from "../animation/lottie-animation";

const STATEMENT =
  "You need category-defining design to stand out in modern software, yet traditional hiring takes six months and burns runway. Atomic embeds senior principal craft directly into your shipping cadence.";

function RevealWord({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.22, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.26em]">
      {word}
    </motion.span>
  );
}

export function IntroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "center 0.45"],
  });

  const words = STATEMENT.split(" ");

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-6 md:px-10 border-b border-white/6 relative z-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        <div className="lg:col-span-4 flex items-center gap-4">
          <div className="w-10 h-10 flex items-center justify-center shrink-0">
            <LottieAnimation type="orbital" className="w-10 h-10" />
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-[0.16em] text-[#d4ff3a]">
              01 · Introducing Bolt
            </div>
            <div className="text-xs text-neutral-500 mt-1">
              Subscription Design Engine
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-medium text-white leading-[1.28] tracking-[-0.02em] text-balance">
            {words.map((word, idx) => {
              const start = idx / words.length;
              const end = Math.min(1, start + 1 / words.length + 0.08);
              return (
                <RevealWord
                  key={`${word}-${idx}`}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}
