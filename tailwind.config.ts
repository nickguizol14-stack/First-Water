import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fbfaf7",
          100: "#f6f3ec",
          200: "#eeeadf",
          300: "#e2dccb",
        },
        ink: {
          950: "#0b0c0e",
          900: "#14161a",
          800: "#1f2127",
          700: "#2d3038",
          600: "#4a4e58",
          500: "#6b6f76",
          400: "#9a9ea6",
          300: "#c4c7cd",
          200: "#e6e4dd",
        },
        ember: {
          500: "#c2410c",
          600: "#9a3412",
          700: "#7c2d12",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "slow-pan": "slow-pan 26s ease-in-out infinite alternate",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-pan": {
          "0%": { transform: "scale(1.08) translate(0,0)" },
          "100%": { transform: "scale(1.16) translate(-2%,-1%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
