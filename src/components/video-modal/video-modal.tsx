"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { LottieAnimation } from "../animation/lottie-animation";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  founderName: string;
  role: string;
}

export function VideoModal({
  isOpen,
  onClose,
  founderName,
  role,
}: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#0d0d10] border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/8">
          <div>
            <h3 className="font-display text-sm font-semibold text-white">
              {founderName} — Partner Interview
            </h3>
            <p className="text-xs text-neutral-400">{role}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X size={18} />
          </button>
        </div>

        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
          <Image
            src="/assets/images/customer_founder_story_1791720577789.jpg"
            alt={founderName}
            fill
            className="object-cover brightness-90"
            sizes="(max-width: 768px) 100vw, 768px"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/35 to-transparent z-10" />

          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative z-20 w-16 h-16 rounded-full bg-black/55 hover:bg-[#d4ff3a] hover:text-[#070709] text-white backdrop-blur-md border border-white/30 flex items-center justify-center transition-all cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <Pause size={26} />
            ) : (
              <Play size={26} className="translate-x-0.5" />
            )}
          </button>

          {isPlaying && (
            <div className="absolute bottom-16 left-6 z-20 flex items-center gap-2.5">
              <LottieAnimation type="wave" className="w-10 h-6" />
              <span className="text-[11px] font-mono text-neutral-300">
                Audio Active
              </span>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-linear-to-t from-black/95 to-transparent">
            <div
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = ((e.clientX - rect.left) / rect.width) * 100;
                setProgress(Math.max(0, Math.min(100, pos)));
              }}
              className="w-full h-1.5 bg-white/20 rounded-full mb-3 cursor-pointer relative group"
            >
              <div
                style={{ width: `${progress}%` }}
                className="h-full bg-[#d4ff3a] rounded-full"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-neutral-300">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-white transition-colors cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
                <span className="font-mono text-[11px] text-neutral-400 tabular-nums">
                  01:42 / 04:15
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono text-neutral-400">
                <span>1080p</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#d4ff3a]">Captions EN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
