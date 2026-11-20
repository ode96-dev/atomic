export interface Testimonial {
  name: string;
  role: string;
  company: string;
  initials: string;
  category: "fintech" | "devtools" | "commerce";
  content: string;
  outcome: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Clara Lindqvist",
    role: "VP of Product",
    company: "Nordik Pay",
    initials: "CL",
    category: "fintech",
    content:
      "Atomic redesigned our institutional treasury onboarding from scratch. Complex compliance flows became effortless, and enterprise self-serve conversions jumped within three weeks of launch.",
    outcome: "+38% Onboarding Completion",
    date: "Jan 2026",
  },
  {
    name: "Devon Takahashi",
    role: "Co-Founder & CTO",
    company: "RelayOS",
    initials: "DT",
    category: "devtools",
    content:
      "Instead of handing over static mockups, their team shipped production React components with calibrated spring physics directly to our repository. It shaved two sprints off our v2 launch.",
    outcome: "2x Engineering Velocity",
    date: "Feb 2026",
  },
  {
    name: "Nadia Al-Mansoor",
    role: "Head of Design",
    company: "Prism Grid",
    initials: "NA",
    category: "devtools",
    content:
      "Their variable token system unified four fragmented web consoles into a single cohesive dark-mode design language. Every spacing decision and contrast ratio was mathematically sound.",
    outcome: "4 Products Unified",
    date: "Dec 2025",
  },
  {
    name: "Marcus Sterling",
    role: "Founder",
    company: "Vektor Labs",
    initials: "MS",
    category: "commerce",
    content:
      "Our previous flagship site suffered from sluggish performance and generic visuals. Atomic rebuilt the entire interactive showcase at 60fps and elevated our average order value.",
    outcome: "+54% Checkout Lift",
    date: "Jan 2026",
  },
  {
    name: "Hannah Brooks",
    role: "Chief Product Officer",
    company: "LatticeWorks",
    initials: "HB",
    category: "fintech",
    content:
      "Working asynchronously with Atomic feels effortless. We drop Loom specs before 5pm and wake up to sharp Figma explorations and interactive prototypes ready for stakeholder sign-off.",
    outcome: "36h Avg Turnaround",
    date: "Mar 2026",
  },
  {
    name: "Tomasz Kowalski",
    role: "CEO",
    company: "Atelier Nine",
    initials: "TK",
    category: "commerce",
    content:
      "They possess the rare taste of a boutique creative studio paired with the engineering rigor of a staff frontend team. Best creative investment we made ahead of Series B.",
    outcome: "$18M Series B Raised",
    date: "Feb 2026",
  },
];
