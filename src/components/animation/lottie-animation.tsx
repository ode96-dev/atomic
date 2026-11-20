"use client";

import React, { useEffect, useState, useMemo } from "react";

export type LottieType = "pulse" | "wave" | "orbital" | "radar";

interface LottieAnimationProps {
  type: LottieType;
  className?: string;
  loop?: boolean;
}

export function LottieAnimation({
  type,
  className = "w-12 h-12",
  loop = true,
}: LottieAnimationProps) {
  const [LottieComp, setLottieComp] = useState<React.ComponentType<any> | null>(
    null,
  );

  useEffect(() => {
    let isMounted = true;
    import("lottie-react")
      .then((mod) => {
        if (isMounted) {
          const comp =
            mod.Lottie ||
            (mod as unknown as { default?: React.ComponentType<any> }).default;
          if (comp) {
            setLottieComp(() => comp);
          }
        }
      })
      .catch(() => {
        // Fallback SVG handles rendering cleanly
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const animationData = useMemo(() => {
    if (type === "pulse") {
      return {
        v: "5.7.4",
        fr: 30,
        ip: 0,
        op: 60,
        w: 100,
        h: 100,
        nm: "Pulse",
        ddd: 0,
        assets: [],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "Dot",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  { t: 0, s: [100] },
                  { t: 30, s: [50] },
                  { t: 60, s: [100] },
                ],
              },
              r: { a: 0, k: 0 },
              p: { a: 0, k: [50, 50, 0] },
              a: { a: 0, k: [0, 0, 0] },
              s: {
                a: 1,
                k: [
                  { t: 0, s: [85, 85] },
                  { t: 30, s: [110, 110] },
                  { t: 60, s: [85, 85] },
                ],
              },
            },
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ty: "el",
                    p: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [20, 20] },
                  },
                  {
                    ty: "fl",
                    c: { a: 0, k: [0.83, 1, 0.22, 1] },
                    o: { a: 0, k: 100 },
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0] },
                    a: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [100, 100] },
                    r: { a: 0, k: 0 },
                    o: { a: 0, k: 100 },
                  },
                ],
              },
            ],
          },
          {
            ddd: 0,
            ind: 2,
            ty: 4,
            nm: "Ripple",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  { t: 0, s: [75] },
                  { t: 60, s: [0] },
                ],
              },
              r: { a: 0, k: 0 },
              p: { a: 0, k: [50, 50, 0] },
              a: { a: 0, k: [0, 0, 0] },
              s: {
                a: 1,
                k: [
                  { t: 0, s: [40, 40] },
                  { t: 60, s: [175, 175] },
                ],
              },
            },
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ty: "el",
                    p: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [34, 34] },
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0.83, 1, 0.22, 1] },
                    o: { a: 0, k: 100 },
                    w: { a: 0, k: 2 },
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0] },
                    a: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [100, 100] },
                    r: { a: 0, k: 0 },
                    o: { a: 0, k: 100 },
                  },
                ],
              },
            ],
          },
        ],
      };
    }

    if (type === "wave") {
      return {
        v: "5.7.4",
        fr: 30,
        ip: 0,
        op: 60,
        w: 120,
        h: 60,
        nm: "Wave",
        ddd: 0,
        assets: [],
        layers: [1, 2, 3, 4, 5].map((i) => ({
          ddd: 0,
          ind: i,
          ty: 4,
          nm: `Bar${i}`,
          sr: 1,
          ks: {
            o: { a: 0, k: 100 },
            r: { a: 0, k: 0 },
            p: { a: 0, k: [20 * i, 30, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: {
              a: 1,
              k: [
                { t: 0, s: [100, 35 + (i % 3) * 28] },
                { t: 30, s: [100, 95 - (i % 2) * 35] },
                { t: 60, s: [100, 35 + (i % 3) * 28] },
              ],
            },
          },
          shapes: [
            {
              ty: "gr",
              it: [
                {
                  ty: "rc",
                  p: { a: 0, k: [0, 0] },
                  s: { a: 0, k: [5, 36] },
                  r: { a: 0, k: 2 },
                },
                {
                  ty: "fl",
                  c: { a: 0, k: [0.83, 1, 0.22, 1] },
                  o: { a: 0, k: 100 },
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0] },
                  a: { a: 0, k: [0, 0] },
                  s: { a: 0, k: [100, 100] },
                  r: { a: 0, k: 0 },
                  o: { a: 0, k: 100 },
                },
              ],
            },
          ],
        })),
      };
    }

    if (type === "orbital") {
      return {
        v: "5.7.4",
        fr: 30,
        ip: 0,
        op: 90,
        w: 100,
        h: 100,
        nm: "Orbital",
        ddd: 0,
        assets: [],
        layers: [
          {
            ddd: 0,
            ind: 1,
            ty: 4,
            nm: "OuterRing",
            sr: 1,
            ks: {
              o: { a: 0, k: 85 },
              r: {
                a: 1,
                k: [
                  { t: 0, s: [0] },
                  { t: 90, s: [360] },
                ],
              },
              p: { a: 0, k: [50, 50, 0] },
              a: { a: 0, k: [0, 0, 0] },
              s: { a: 0, k: [100, 100] },
            },
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ty: "rc",
                    p: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [48, 48] },
                    r: { a: 0, k: 12 },
                  },
                  {
                    ty: "st",
                    c: { a: 0, k: [0.83, 1, 0.22, 1] },
                    o: { a: 0, k: 90 },
                    w: { a: 0, k: 2 },
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0] },
                    a: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [100, 100] },
                    r: { a: 0, k: 0 },
                    o: { a: 0, k: 100 },
                  },
                ],
              },
            ],
          },
          {
            ddd: 0,
            ind: 2,
            ty: 4,
            nm: "InnerCore",
            sr: 1,
            ks: {
              o: {
                a: 1,
                k: [
                  { t: 0, s: [60] },
                  { t: 45, s: [100] },
                  { t: 90, s: [60] },
                ],
              },
              r: {
                a: 1,
                k: [
                  { t: 0, s: [360] },
                  { t: 90, s: [0] },
                ],
              },
              p: { a: 0, k: [50, 50, 0] },
              a: { a: 0, k: [0, 0, 0] },
              s: { a: 0, k: [100, 100] },
            },
            shapes: [
              {
                ty: "gr",
                it: [
                  {
                    ty: "el",
                    p: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [18, 18] },
                  },
                  {
                    ty: "fl",
                    c: { a: 0, k: [0.83, 1, 0.22, 1] },
                    o: { a: 0, k: 100 },
                  },
                  {
                    ty: "tr",
                    p: { a: 0, k: [0, 0] },
                    a: { a: 0, k: [0, 0] },
                    s: { a: 0, k: [100, 100] },
                    r: { a: 0, k: 0 },
                    o: { a: 0, k: 100 },
                  },
                ],
              },
            ],
          },
        ],
      };
    }

    return {
      v: "5.7.4",
      fr: 30,
      ip: 0,
      op: 60,
      w: 80,
      h: 80,
      nm: "Radar",
      ddd: 0,
      assets: [],
      layers: [
        {
          ddd: 0,
          ind: 1,
          ty: 4,
          nm: "Ring",
          sr: 1,
          ks: {
            o: {
              a: 1,
              k: [
                { t: 0, s: [45] },
                { t: 30, s: [100] },
                { t: 60, s: [45] },
              ],
            },
            r: {
              a: 1,
              k: [
                { t: 0, s: [0] },
                { t: 60, s: [360] },
              ],
            },
            p: { a: 0, k: [40, 40, 0] },
            a: { a: 0, k: [0, 0, 0] },
            s: { a: 0, k: [100, 100] },
          },
          shapes: [
            {
              ty: "gr",
              it: [
                { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [44, 44] } },
                {
                  ty: "st",
                  c: { a: 0, k: [0.83, 1, 0.22, 1] },
                  o: { a: 0, k: 85 },
                  w: { a: 0, k: 2 },
                },
                {
                  ty: "tr",
                  p: { a: 0, k: [0, 0] },
                  a: { a: 0, k: [0, 0] },
                  s: { a: 0, k: [100, 100] },
                  r: { a: 0, k: 0 },
                  o: { a: 0, k: 100 },
                },
              ],
            },
          ],
        },
      ],
    };
  }, [type]);

  if (LottieComp) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <LottieComp
          src={animationData}
          loop={loop}
          autoplay
          className="w-full h-full"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <div className="w-4 h-4 rounded-full border border-[#d4ff3a]/60 border-t-[#d4ff3a] animate-spin" />
    </div>
  );
}
