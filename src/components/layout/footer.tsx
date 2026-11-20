"use client";

import React, { useState } from "react";
import { AtomicLogo } from "./atomic-logo";
import { X, Check } from "lucide-react";

export function Footer() {
  const [modalType, setModalType] = useState<
    "contact" | "privacy" | "terms" | null
  >(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <>
      <footer className="py-12 px-6 md:px-10 border-t border-white/6 relative z-10 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5 text-white">
            <AtomicLogo size={22} className="text-current" />
            <span className="font-display text-sm font-semibold tracking-tight">
              Atomic Studio
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-neutral-400">
            <a
              href="mailto:hello@atomic.studio"
              className="hover:text-white transition-colors"
            >
              hello@atomic.studio
            </a>
            <span className="text-neutral-700" aria-hidden="true">
              ·
            </span>
            <button
              type="button"
              onClick={() => setModalType("contact")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
            <span className="text-neutral-700" aria-hidden="true">
              ·
            </span>
            <button
              type="button"
              onClick={() => setModalType("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-neutral-700" aria-hidden="true">
              ·
            </span>
            <button
              type="button"
              onClick={() => setModalType("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
          </div>

          <div className="text-neutral-500 font-mono text-[11px]">
            © 2026 Atomic Studio
          </div>
        </div>
      </footer>

      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#0d0d10] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => {
                setModalType(null);
                setContactSubmitted(false);
              }}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {modalType === "contact" && (
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  Start a conversation
                </h3>
                <p className="text-xs text-neutral-400 mb-6">
                  Questions about cohort availability, enterprise security, or
                  custom design systems?
                </p>

                {contactSubmitted ? (
                  <div className="p-4 bg-[#121a08] border border-[#d4ff3a]/40 rounded-xl text-center text-xs text-[#d4ff3a] flex items-center justify-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>
                      Message received. A partner will reply within 2 business
                      hours.
                    </span>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-neutral-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Clara Lindqvist"
                        className="w-full bg-[#070709] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4ff3a]"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-1.5">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="clara@company.com"
                        className="w-full bg-[#070709] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4ff3a]"
                      />
                    </div>
                    <div>
                      <label className="block text-neutral-300 mb-1.5">
                        Project Scope
                      </label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Share what you are shipping this quarter..."
                        className="w-full bg-[#070709] border border-white/10 rounded-lg px-3.5 py-2.5 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4ff3a]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#d4ff3a] hover:bg-[#c5f525] text-[#070709] font-semibold rounded-lg transition-colors cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            )}

            {modalType === "privacy" && (
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Privacy Policy
                </h3>
                <div className="text-xs text-neutral-300 space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
                  <p>
                    Atomic Studio respects your privacy and handles inquiry data
                    in compliance with GDPR and CCPA.
                  </p>
                  <p>
                    <strong>Information Collected:</strong> Business email
                    addresses submitted via cohort reservation or contact forms
                    are used exclusively to coordinate onboarding.
                  </p>
                  <p>
                    We never sell, rent, or share partner data with third-party
                    data brokers.
                  </p>
                </div>
              </div>
            )}

            {modalType === "terms" && (
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  Terms of Engagement
                </h3>
                <div className="text-xs text-neutral-300 space-y-3 leading-relaxed max-h-80 overflow-y-auto pr-2">
                  <p>
                    <strong>1. Retainer Cadence:</strong> Subscriptions operate
                    on a 31-day billing cycle and may be paused or cancelled
                    anytime without penalty.
                  </p>
                  <p>
                    <strong>2. Intellectual Property:</strong> All Figma
                    systems, assets, and production frontend code created for
                    active partners belong 100% to the partner upon delivery.
                  </p>
                  <p>
                    <strong>3. Delivery SLA:</strong> Standard deliverables turn
                    around within 24–48 business hours.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
