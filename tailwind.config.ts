import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "marquee-gradient":
          "linear-gradient(to right, rgba(18, 18, 18, 1) 0%, rgba(255, 255, 255, 0) 15%, rgba(255, 255, 255, 0) 85%, rgba(18, 18, 18, 1) 100%)",
      },
      colors: {
        "app-color-dark-1": "#121212",
        "app-color-dark-2": "#1a1a1a",
        "app-color-blue-1": "#2B6ABC",
        "app-color-blue-2": "#0C53A6",
        "app-color-blue-3": "#003D82",
        "app-color-blue-4": "#002F63",
        "app-color-gray-1": "#393939",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        aleo: "var(--font-aleo)",
      },
      boxShadow: {
        skillOnHover: "rgba(43, 106, 188, 1) 0 0 16px 16px",
      },
      animation: {
        backgroundPositionSpin:
          "background-position-spin 3000ms infinite alternate",
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        "background-position-spin": {
          "0%": { backgroundPosition: "top center" },
          "100%": { backgroundPosition: "bottom center" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#2B6ABC",
          },
        },
        dark: {
          colors: {
            primary: "#2B6ABC",
          },
        },
      },
    }),
  ],
};
export default config;
