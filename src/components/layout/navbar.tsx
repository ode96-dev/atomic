"use client";

import React, { useState, useEffect } from "react";
import { AtomicLogo } from "./atomic-logo";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { LoginModal } from "@/components/login/login-modal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Capabilities", href: "#features" },
    { label: "Methodology", href: "#how-it-works" },
    { label: "Case Study", href: "#case-study" },
    { label: "FAQ", href: "#faqs" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#070709]/85 backdrop-blur-xl border-b border-white/8"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-8">
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white hover:text-[#d4ff3a] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ff3a] rounded-md"
            aria-label="Atomic Studio Home"
          >
            <AtomicLogo size={24} className="text-current" />
            <span className="font-display font-semibold text-base tracking-tight">
              Atomic
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-[13px] font-medium text-neutral-400 hover:text-white transition-colors py-1 whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#d4ff3a] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ff3a] rounded-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-[13px] font-medium text-neutral-100 border border-white/15 hover:border-[#d4ff3a]/60 hover:text-[#d4ff3a] px-4 py-2 rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4ff3a]"
            >
              <span>Client Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-neutral-300 hover:text-white rounded-lg border border-white/10 bg-[#0d0d10]"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className="md:hidden bg-[#0c0c0f]/95 backdrop-blur-xl border-b border-white/10 px-6 py-5"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-neutral-300 hover:text-[#d4ff3a] py-2.5 border-b border-white/6 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setIsLoginOpen(true);
                  }}
                  className="mt-4 w-full text-xs font-semibold text-[#070709] bg-[#d4ff3a] hover:bg-[#c5f525] py-3 rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Client Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </>
  );
}
