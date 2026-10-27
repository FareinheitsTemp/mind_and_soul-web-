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
        cream: "#FAF6EF",
        beige: "#EADFCB",
        lavender: {
          light: "#EAE3F7",
          DEFAULT: "#C9B8E8",
          dark: "#8E75C7",
          deep: "#6D55A6",
        },
        rose: {
          light: "#FDF0F3",
          DEFAULT: "#F5D5DD",
          dark: "#D9AAB6",
        },
        sage: {
          light: "#DEE7DC",
          DEFAULT: "#A9BFA3",
          dark: "#7A9674",
        },
        ink: {
          light: "#635C73",
          DEFAULT: "#3B3548",
          dark: "#231F2C",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-nunito)", "Inter", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(59, 53, 72, 0.08)",
        card: "0 14px 40px -12px rgba(142, 117, 199, 0.15)",
        hover: "0 22px 50px -14px rgba(142, 117, 199, 0.25)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-reverse": "floatReverse 10s ease-in-out infinite",
        "pulse-gentle": "pulseGentle 6s ease-in-out infinite",
        "rotate-slow": "spin 90s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(12px) rotate(-3deg)" },
        },
        pulseGentle: {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.04)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
