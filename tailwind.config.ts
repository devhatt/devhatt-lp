import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        octopost: {
          primaryWhite: "#fff",
          secondaryWhite: "#f8f9ff",
          tertiaryWhite: "#d8d8d8",
          primaryBlack: "##2d2d2d",
          primaryViolet: "#a076f9",
          secondaryViolet: "##894df6",
          tertiaryViolet: "#5c5ca0",
          primaryPurple: "#b71fdc",
          secondaryPurple: "##ac3fe4",
          darkBlue: "#2f2667",
          primaryPink: "#f7288e",
        },

        petdex: {
          primaryBlue: "#62DCF6",
          secondaryBlue: "#1C85F3",
          primaryYellow: "#FFC542",
          primaryGreen: "#3A8DA8",
          secondaryGreen: "#003459",
          primaryPurple: "#564AE4",
          darkBlue: "#091846",
          primaryPink: "#DF3D82",
          pastelBlue: "#BAD8EB",
          pastelYellow: "#FFF2A6",
          pastelPink: "#FFC6DA",
          primarySucess: "#D3EFE0",
          secondarySucess: "#318A5D",
          error: "#B3271E",
        },
      },
    },
  },
  plugins: [],
};
export default config;
