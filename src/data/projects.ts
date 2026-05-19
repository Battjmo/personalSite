export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  repo?: string;
  image: string;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    id: "valquery",
    title: "Valquery",
    description:
      "A generation-assisted retrieval (GAR) app for data professionals.",
    href: "https://valquery.ai",
    image: "/images/spear_logo_white.svg",
    imageAlt: "Valquery logo",
  },
  {
    id: "breakstijl",
    title: "BreakStijl",
    description:
      "A JavaScript take on Breakout with modern-art-inspired procedural level generation.",
    href: "https://battjmo.github.io/BreakStijl/",
    repo: "https://github.com/Battjmo/BreakStijl",
    image: "https://media.giphy.com/media/mMCKKsPIkt6lczEZBC/giphy.gif",
    imageAlt: "BreakStijl gameplay preview",
  },
  {
    id: "supersmashbrowser",
    title: "Super Smash Browser",
    description:
      "A Chrome extension to smash webpages with a hammer or make them vanish with a magic wand.",
    href: "https://chrome.google.com/webstore/detail/supersmashbrowser/bdlmjfkblpjnkienagkgljcodcgjjjml",
    repo: "https://github.com/Battjmo/SuperSmashBrowser",
    image: "https://media.giphy.com/media/5eFi7W9QhbLQm7BfM5/giphy.gif",
    imageAlt: "Super Smash Browser preview",
  },
];
