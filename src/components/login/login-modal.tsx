"use client";

import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { AtomicLogo } from "../layout/atomic-logo";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"magic-link" | "password">("magic-link");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const resetAndClose = () => {
    onClose();
    setIsSuccess(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0d0d10] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={resetAndClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close login modal"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2.5 mb-6">
          <AtomicLogo size={22} className="text-[#d4ff3a]" />
          <span className="font-display text-sm font-semibold text-white tracking-tight">
            Atomic Client Portal
          </span>
        </div>

        {isSuccess ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-[#121a08] border border-[#d4ff3a]/40 text-[#d4ff3a] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={22} />
            </div>
            <h3 className="font-display text-base font-bold text-white mb-2">
              {mode === "magic-link" ? "Magic Link Sent" : "Verification Sent"}
            </h3>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              We dispatched a secure workspace link to{" "}
              <span className="text-white font-medium">
                {email || "your email"}
              </span>
              .
            </p>
            <button
              type="button"
              onClick={resetAndClose}
              className="w-full py-2.5 bg-[#d4ff3a] text-[#070709] font-semibold text-xs rounded-lg hover:bg-[#c5f525] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-1.5">
              Welcome back
            </h3>
            <p className="text-xs text-neutral-400 mb-6">
              Access active sprints, inspect Figma drops, and queue new
              deliverables.
            </p>

            <div className="grid grid-cols-2 p-1 bg-[#070709] border border-white/6 rounded-lg mb-6 text-xs font-medium">
              <button
                type="button"
                onClick={() => setMode("magic-link")}
                className={`py-2 rounded-md transition-colors cursor-pointer ${
                  mode === "magic-link"
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Magic Link
              </button>
              <button
                type="button"
                onClick={() => setMode("password")}
                className={`py-2 rounded-md transition-colors cursor-pointer ${
                  mode === "password"
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Password
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 mb-1.5 font-medium">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-[#070709] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4ff3a]"
                />
              </div>

              {mode === "password" && (
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-neutral-300 font-medium">
                      Password
                    </label>
                    <button
                      type="button"
                      onClick={() => setMode("magic-link")}
                      className="text-[11px] text-[#d4ff3a] hover:underline cursor-pointer"
                    >
                      Use magic link instead
                    </button>
                  </div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full bg-[#070709] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4ff3a]"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 bg-[#d4ff3a] hover:bg-[#c5f525] text-[#070709] font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
              >
                <span>
                  {mode === "magic-link" ? "Send Magic Link" : "Sign In"}
                </span>
                <ArrowRight size={14} />
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-white/8 text-center text-[11px] text-neutral-500">
              New partner?{" "}
              <a
                href="#hero"
                onClick={resetAndClose}
                className="text-[#d4ff3a] hover:underline"
              >
                Request cohort invite
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
