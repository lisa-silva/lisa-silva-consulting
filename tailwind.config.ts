import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F1",
        charcoal: "#202927",
        teal: {
          DEFAULT: "#0D5C57",
          dark: "#073E3B",
          light: "#DCEAE6",
        },
        gold: {
          DEFAULT: "#C58B3A",
          light: "#F2E2C3",
        },
        sage: "#7D948B",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-newsreader)", "serif"],
      },
      boxShadow: {
        soft: "0 32px 80px -24px rgba(18, 55, 51, 0.20)",
        card: "0 16px 48px -24px rgba(18, 55, 51, 0.18), 0 2px 8px rgba(18, 55, 51, 0.04)",
        lift: "0 28px 70px -24px rgba(18, 55, 51, 0.28), 0 4px 16px rgba(18, 55, 51, 0.06)",
      },
      borderRadius: {
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
