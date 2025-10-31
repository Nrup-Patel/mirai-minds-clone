import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ast: {
          blue: "#060097",
          magenta: "#c10fff",
          heading: "#1e293b",
          gray: "#67768e",
          pale: "#f9f6fe",
          white: "#ffffff",
          light: "#f2f5f7",
          yellow: "#ffcd57",
          black: "#000000",
        },
        mirai: {
          accent: "#EABE0E9C",
          text: "#F7F7F7",
          button: "#FFFFFF",
        },
      },
      fontFamily: {
        serifjp: ["'Noto Serif JP'", "serif"],
        nunito: ["'Nunito'", "sans-serif"],
        shippori: ['"Shippori Mincho"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
