import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        surface: "#0e0e0e",
        "surface-low": "#131313",
        "surface-mid": "#1a1a1a",
        "surface-high": "#20201f",
        "surface-highest": "#262626",
        "surface-bright": "#2c2c2c",
        primary: "#ffd100",
        "primary-dim": "#efc900",
        "on-primary": "#453900",
        "on-surface": "#ffffff",
        "on-surface-variant": "#adaaaa",
        outline: "#767575",
        "outline-variant": "#484847",
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.12" },
          "50%": { opacity: "0.22" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 8s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
