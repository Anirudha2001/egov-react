const resources = {
  whatsnew: [
    {
      type: "What's New",
      title: "Roundtable on Empowering Elected Representatives and Citizens",
      image: "/images/Elected-Representative-Thumb.webp",
      meta: "eGov Foundation | 23 Apr 2026",
      tags: ["Local Governance"],
    },
    {
      type: "What's New",
      title: "The Solver Network | A Policy Vision for Collaborative Public Problem-Solving",
      image: "/images/solvernetwork-thumb.webp",
      meta: "T Krishnakumar | 07 Apr 2026",
      tags: ["Local Governance"],
    },
    {
      type: "What's New",
      title: "State-led Urban Digital Transformation",
      image: "/images/State-led-Thumb.jpg",
      meta: "Mathews P Joseph | 13 Mar 2026",
      tags: ["Odisha", "Kerala", "Punjab"],
    },
  ],
  articles: [
    {
      type: "Articles",
      title: "State-led Urban Digital Transformation",
      image: "/images/State-led-Thumb.jpg",
      meta: "Open digital infrastructure for urban reform",
      tags: ["Urban", "Governance"],
    },
    {
      type: "Articles",
      title: "Ecosystem-led public problem solving",
      image: "/images/solvernetwork-thumb.webp",
      meta: "Collaboration models across sectors",
      tags: ["Policy", "Ecosystem"],
    },
    {
      type: "Articles",
      title: "Citizen leadership in local service delivery",
      image: "/images/Elected-Representative-Thumb.webp",
      meta: "Lessons from field partnerships",
      tags: ["Leadership", "Local"],
    },
  ],
  newsletters: [
    {
      type: "Newsletter",
      title: "DOT - A DIGIT Quarterly Newsletter",
      image: "/images/DOT-September-Thumb.jpg",
      meta: "eGov Foundation | Newsletter",
      tags: ["DIGIT", "Quarterly"],
    },
    {
      type: "Newsletter",
      title: "DOT 2025 | Top Stories of Partnerships & Impact",
      image: "/images/dot-2025-5.jpg",
      meta: "Year-end review of stories that shaped the ecosystem",
      tags: ["Impact", "Partnerships"],
    },
    {
      type: "Newsletter",
      title: "DOT September 2025",
      image: "/images/DOT-September-Thumb.jpg",
      meta: "Monthly ecosystem updates and releases",
      tags: ["Updates", "Community"],
    },
  ],
};

export const filterTabs = [
  { id: "whatsnew", label: "What's New" },
  { id: "articles", label: "Articles" },
  { id: "newsletters", label: "Newsletter" },
  { id: "whatsnew2", label: "Whitepapers", panel: "whatsnew" },
  { id: "articles2", label: "Case Studies", panel: "articles" },
  { id: "newsletters2", label: "News & Media", panel: "newsletters" },
];

export default resources;
