"use client";

import React, { useRef } from "react";
import { useInView } from "motion/react";
import { useSpring, animated } from "@react-spring/web";
import { metrics } from "@/lib/metrics";

function SpringCounter({
  target,
  decimals = 0,
  suffix = "",
  active,
}: {
  target: number;
  decimals?: number;
  suffix?: string;
  active: boolean;
}) {
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: active ? target : 0 },
    config: { mass: 1, tension: 75, friction: 20 },
  });

  return (
    <animated.span>
      {number.to((n) => `${n.toFixed(decimals)}${suffix}`)}
    </animated.span>
  );
}

export function MetricsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 border-b border-white/6 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x divide-white/8">
          {metrics.map((item) => (
            <div key={item.label} className="md:px-10 first:pl-0 last:pr-0">
              <div
                className="font-display font-bold tracking-[-0.03em] text-white tabular-nums mb-2"
                style={{ fontSize: "clamp(2.5rem, 4.5vw, 3.75rem)" }}
              >
                <SpringCounter
                  target={item.target}
                  decimals={item.decimals}
                  suffix={item.suffix}
                  active={isInView}
                />
              </div>
              <div className="text-sm font-medium text-neutral-200">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
