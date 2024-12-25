export const AppUrl = process.env.NEXT_PUBLIC_APP_URL;

import { HeaderMenuType } from "@/types/layout";

export const navItems: HeaderMenuType[] = [
  {
    id: 1,
    title: "Earn",
    url: "#earn",
  },
  {
    id: 2,
    title: "Play",
    url: "#play",
  },
  {
    id: 3,
    title: "Rewards",
    url: "#rewards",
  },
  {
    id: 4,
    title: "FAQs",
    url: "#faqs",
  },
];
