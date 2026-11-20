import React from "react";

interface AtomicLogoProps {
  className?: string;
  size?: number;
}

export function AtomicLogo({
  className = "text-white",
  size = 32,
}: AtomicLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Atomic Logo"
    >
      <rect x="15" y="4" width="10" height="10" rx="3" fill="currentColor" />
      <rect x="4" y="15" width="10" height="10" rx="3" fill="currentColor" />
      <rect x="26" y="15" width="10" height="10" rx="3" fill="currentColor" />
      <rect x="15" y="26" width="10" height="10" rx="3" fill="currentColor" />
      <rect
        x="16"
        y="16"
        width="8"
        height="8"
        rx="2"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}
