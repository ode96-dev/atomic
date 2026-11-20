"use client";

import { motion } from "motion/react";

export function ClientLogos() {
  const logos = [
    {
      name: "Headspace",
      render: (
        <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
          <span className="w-4 h-4 rounded-full bg-current opacity-85 shrink-0" />
          <span className="font-display text-base font-semibold tracking-tight lowercase">
            headspace
          </span>
        </div>
      ),
    },
    {
      name: "Shopify",
      render: (
        <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
          <svg
            className="w-4 h-4 fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M19.27 5.48c-.05-.33-.33-.56-.66-.56-.34 0-1.42.06-2.58.14-1.28-1.57-2.61-3.19-2.78-3.39-.31-.38-.79-.58-1.27-.55-.49.03-.92.3-1.15.74-.08.16-1.04 2.22-1.92 3.99-2.22.18-4.27.38-4.57.42-.87.12-1.15.65-1.29 1.15L.03 20.94c-.09.38.16.76.54.83.07.01.14.02.21.02.31 0 .59-.2.68-.51l2.4-8.81h15.28l2.41 8.81c.09.31.37.51.68.51.07 0 .14-.01.21-.02.38-.07.63-.45.54-.83L19.27 5.48z" />
          </svg>
          <span className="font-display text-base font-bold tracking-tight lowercase">
            shopify
          </span>
        </div>
      ),
    },
    {
      name: "Volvo",
      render: (
        <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
          <span className="w-4 h-4 rounded-full border-[1.5px] border-current inline-block shrink-0" />
          <span className="font-display text-sm font-bold tracking-[0.2em]">
            VOLVO
          </span>
        </div>
      ),
    },
    {
      name: "Mobbin",
      render: (
        <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
          <div className="flex items-end gap-0.5 shrink-0">
            <span className="w-1 h-3 bg-current rounded-xs" />
            <span className="w-1 h-4 bg-current rounded-xs" />
            <span className="w-1 h-2.5 bg-current rounded-xs" />
          </div>
          <span className="font-display text-base font-bold tracking-tight">
            Mobbin
          </span>
        </div>
      ),
    },
    {
      name: "Pinterest",
      render: (
        <div className="flex items-center gap-2 text-neutral-400 group-hover:text-white transition-colors">
          <svg
            className="w-4 h-4 fill-current shrink-0"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.94-.1-2.4.05-3.43l1.1-4.66s-.27-.55-.27-1.37c0-1.28.74-2.24 1.67-2.24.78 0 1.16.59 1.16 1.3 0 .79-.5 1.97-.77 3.07-.22.91.46 1.65 1.36 1.65 1.63 0 2.88-1.72 2.88-4.2 0-2.2-1.58-3.73-3.83-3.73-2.61 0-4.14 1.96-4.14 3.98 0 .79.3 1.63.69 2.09a.3.3 0 0 1 .07.29c-.08.31-.25 1.03-.29 1.17-.05.19-.16.23-.37.14-1.38-.64-2.24-2.65-2.24-4.27 0-3.48 2.53-6.68 7.3-6.68 3.83 0 6.81 2.73 6.81 6.38 0 3.81-2.4 6.87-5.73 6.87-1.12 0-2.17-.58-2.53-1.27l-.69 2.63c-.25.96-.92 2.16-1.38 2.89A12 12 0 1 0 12 0z" />
          </svg>
          <span className="font-display text-base font-semibold tracking-tight">
            Pinterest
          </span>
        </div>
      ),
    },
    {
      name: "Duolingo",
      render: (
        <div className="flex items-center text-neutral-400 group-hover:text-white transition-colors">
          <span className="font-display text-base font-bold tracking-tight lowercase">
            duolingo
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-12 border-b border-white/6 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center flex-1 justify-items-start md:justify-items-end"
          >
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group py-1 transition-opacity duration-200 opacity-75 hover:opacity-100"
              >
                {logo.render}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
