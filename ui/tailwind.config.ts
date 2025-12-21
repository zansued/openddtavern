import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "tavern-dark": "#0b0f14",
        "tavern-surface": "#121925",
        "tavern-card": "#1a2433",
        "tavern-accent": "#9b87f5",
        "tavern-muted": "#7c8798"
      }
    }
  },
  plugins: []
};

export default config;
