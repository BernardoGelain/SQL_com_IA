import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-ubuntu)"],
      },
      colors: {
        candy: {
          50: "#f0fbfd",
          100: "#e8f9fd",
          200: "#d0f3fa",
          300: "#66d9ef",
          400: "#5cc3d7",
          500: "#52aebf",
          600: "#4da3b3",
          700: "#3d828f",
          800: "#2e626c",
          900: "#244c54",
        },
        lime: {
          50: "#eaffe7",
          100: "#e0ffda",
          200: "#beffb3",
          300: "#2dff0b",
          400: "#29e60a",
          500: "#24cc09",
          600: "#22bf08",
          700: "#1b9907",
          800: "#147305",
          900: "#105904",
        },
        gum: {
          50: "#fff2f9",
          100: "#ffebf6",
          200: "#fed5ed",
          300: "#fd78c4",
          400: "#e46cb0",
          500: "#ca609d",
          600: "#be5a93",
          700: "#984876",
          800: "#723658",
          900: "#592a45",
        },
        blueberry: {
          300: "#323842",
          600: "#151A2A",
          900: "#07061D",
        },
        background: "#030712",
        pistachio: "#D3FFCC",
        cream: "#E2DFCD",
        foam: "#D7DAE2",
        snow: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
