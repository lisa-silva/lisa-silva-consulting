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
        soft: "0 18px 45px rgba(31, 52, 48, 0.08)",
        card: "0 8px 30px rgba(31, 52, 48, 0.07)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
