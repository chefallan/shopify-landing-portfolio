import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17201d",
        paper: "#fbfaf7",
        field: "#f7f2ea",
        moss: "#4c6f55",
        clay: "#b65f3b",
        lagoon: "#247783",
        marigold: "#e7a83b"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(23, 32, 29, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
