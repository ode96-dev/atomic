"use client";

import React from "react";
import { X } from "lucide-react";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CaseStudyModal({ isOpen, onClose }: CaseStudyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0d0d10] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/8">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-[0.16em] text-[#d4ff3a]">
              Kinetix Labs
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-neutral-300 text-sm leading-relaxed">
          <div className="grid grid-cols-3 gap-4 bg-[#070709] border border-white/8 rounded-xl p-4 text-center">
            <div>
              <div className="font-display text-xl font-bold text-[#d4ff3a] tabular-nums">
                +240%
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Design Output
              </div>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-white tabular-nums">
                -62%
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Monthly Burn
              </div>
            </div>
            <div>
              <div className="font-display text-xl font-bold text-white tabular-nums">
                38h
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                Avg Turnaround
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-2">
              The Bottleneck
            </h4>
            <p className="text-neutral-400">
              Expanding from Series A to Series B, Kinetix Labs needed a unified
              multi-theme design system, interactive product storytelling, and a
              redesigned enterprise onboarding flow. Recruiting two senior
              product designers in San Francisco was projected to take five
              months plus $45,000 in placement fees.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-2">
              The Atomic Cadence
            </h4>
            <p className="text-neutral-400">
              Atomic plugged directly into Kinetix&apos;s Linear sprints and
              GitHub repository. Within the first week, our team shipped a
              tokenized Figma library mapped 1:1 to Tailwind CSS variables and
              rebuilt the entire self-serve conversion funnel in React.
            </p>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#d4ff3a] hover:bg-[#c5f525] text-[#070709] font-semibold text-xs rounded-lg transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
