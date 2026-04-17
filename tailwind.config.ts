import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Industrial / asphalt tones
        tar: {
          950: "#07080a",
          900: "#0d0f12",
          800: "#14171c",
          700: "#1c2027",
          600: "#252a33",
          500: "#363c47",
          400: "#5a6170",
          300: "#8a8f9a",
          200: "#b7bac1",
          100: "#dcdee2",
        },
        // Hi-vis / safety amber accent
        hivis: {
          300: "#fde68a",
          400: "#fcd34d",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
        // DOT / construction orange, used sparingly
        dot: {
          500: "#ea580c",
          600: "#c2410c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      animation: {
        "slow-pan": "slow-pan 28s ease-in-out infinite alternate",
        "marquee": "marquee 45s linear infinite",
        "blink": "blink 1.4s ease-in-out infinite",
      },
      keyframes: {
        "slow-pan": {
          "0%": { transform: "scale(1.08) translate(0,0)" },
          "100%": { transform: "scale(1.16) translate(-2%,-1%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
