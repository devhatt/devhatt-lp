import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-works": "radial-gradient(50% 50% at 50% 50%, #E36CE6 0%, rgba(255, 255, 255, 0) 100%)",
      },
      boxShadow: {
        "dropshadow-card": "2px 3px 13.9px 0px rgba(0, 0, 0, 0.05)",
      }
    },
  },
  plugins: [],
};
export default config;
