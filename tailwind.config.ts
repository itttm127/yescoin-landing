import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#141414",
        "step-gradient-start": "rgba(254, 226, 211, 0.4)",
        "step-gradient-end": "rgba(235, 234, 248, 0.4)",
      },
      backgroundImage: {
        "banner-gradient": "linear-gradient(180deg, #C6561E 0%, #292594 100%)",
        "text-gradient1": "linear-gradient(180deg, #F86C25 0%, #8582D5 100%)",
        "text-gradient2": "linear-gradient(180deg, #FEE2D3 0%, #EBEAF8 100%)",
        "text-gradient3": "linear-gradient(180deg, #FDD3BE 0%, #C2C0EA 100%)",
        "text-gradient4": "linear-gradient(180deg, #F9915C 0%, #5C58C7 100%)",
        "text-gradient5": "linear-gradient(180deg, #954116 0%, #292594 100%)",
        "text-gradient6": "linear-gradient(180deg, #321607 0%, #0A0925 100%)",
        "counter-gradient":
          "linear-gradient(241.21deg, #130DB2 -23.21%, #5C58C7 19.98%, #F86C25 63.16%, #FBCDB5 106.35%)",
        "border-gradient":
          "linear-gradient(200deg, #130DB2 0%, #5C58C7 33%, #F86C25 67%, #FBCDB5 100% )",
      },
    },
  },
  plugins: [],
} satisfies Config;
