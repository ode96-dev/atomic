import { LottieType } from "@/components/animation/lottie-animation";

export interface StepSpec {
  id: string;
  index: string;
  title: string;
  summary: string;
  lottie: LottieType;
  sla: string;
  previewTitle: string;
  queueItems: { name: string; status: string; eta: string }[];
}
export const STEPS: StepSpec[] = [
  {
    id: "vision",
    index: "01",
    title: "Brief the system",
    summary:
      "Queue product specs, Loom walkthroughs, or rough wireframes inside your dedicated Linear or Notion sprint board.",
    lottie: "pulse",
    sla: "Same-day kickoff",
    previewTitle: "Active Sprint Queue",
    queueItems: [
      { name: "Checkout Conversion Audit", status: "In Scope", eta: "Today" },
      { name: "Design Token Architecture", status: "Queued", eta: "Tomorrow" },
      { name: "Interactive 3D Hero Asset", status: "Queued", eta: "Thu" },
    ],
  },
  {
    id: "craft",
    index: "02",
    title: "Receive async drops",
    summary:
      "Every 24 to 48 hours we ship production-ready Figma components, motion prototypes, and React pull requests.",
    lottie: "wave",
    sla: "48h delivery SLA",
    previewTitle: "Latest Studio Drop",
    queueItems: [
      {
        name: "Checkout_Flow_v3.fig",
        status: "Ready for Review",
        eta: "18h elapsed",
      },
      {
        name: "Spring_Motion_Curve.tsx",
        status: "PR #412 Opened",
        eta: "32h elapsed",
      },
      {
        name: "Token_Contrast_Check",
        status: "WCAG AA Verified",
        eta: "Passed",
      },
    ],
  },
  {
    id: "support",
    index: "03",
    title: "Iterate & scale on demand",
    summary:
      "Unlimited refinements until every pixel settles. Pause your subscription between funding milestones with zero lock-in.",
    lottie: "radar",
    sla: "Pause anytime",
    previewTitle: "Continuous Cadence",
    queueItems: [
      {
        name: "Unlimited Async Revisions",
        status: "Included",
        eta: "< 24h turn",
      },
      {
        name: "Rollover Unused Sprint Days",
        status: "Active",
        eta: "6 days banked",
      },
      {
        name: "100% IP & Source Ownership",
        status: "Transferred",
        eta: "On delivery",
      },
    ],
  },
];
