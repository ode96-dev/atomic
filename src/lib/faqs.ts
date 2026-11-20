export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "turnaround",
    question: "How fast are design and frontend deliverables shipped?",
    answer:
      "Most requests—such as landing pages, product feature flows, motion specs, or component systems—are delivered in 24 to 48 business hours. Larger multi-view architecture sprints are broken into daily drops so your engineering team never waits.",
  },
  {
    id: "unlimited",
    question: "What does an active sprint queue include?",
    answer:
      "You can queue as many design and frontend requests as needed in Linear or Notion. We execute one active stream at a time (or two concurrent streams on our Scale tier) with unlimited asynchronous revisions until every detail is production-ready.",
  },
  {
    id: "ownership",
    question: "Who owns the intellectual property and source code?",
    answer:
      "You retain 100% ownership from the moment an asset is delivered. Every Figma system, Lottie animation dataset, WebGL shader, and React/Tailwind pull request is authored exclusively for your organization.",
  },
  {
    id: "pause",
    question: "How do pausing and rollover days work?",
    answer:
      "Billing runs on a 31-day sprint cycle. If your roadmap slows down after a major release, pause your subscription in one click—remaining days are banked indefinitely and resume whenever your next product initiative kicks off.",
  },
  {
    id: "stack",
    question: "Do you deliver Figma files only or production code as well?",
    answer:
      "Both. Every design drop comes in cleanly tokenized Figma auto-layout, and partners on engineering-embedded tiers receive typed Next.js, Tailwind CSS, Motion, and React Spring pull requests directly in GitHub.",
  },
  {
    id: "security",
    question: "Can you operate under strict NDA and enterprise security?",
    answer:
      "Yes. Mutual NDAs are executed prior to workspace onboarding, and our principal designers work directly within your organization-managed Slack, GitHub, and Figma Enterprise permissions.",
  },
];
