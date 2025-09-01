/** @format */

// tailwind.config.ts
import type { Config } from "tailwindcss";
export default {
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: { colors: { brand: { DEFAULT: "#a3e635" } } },
  },
  plugins: [],
} satisfies Config;

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#02C6F0",
        dark: "#414446",
        secondary: "#0073A4",
      },
    },
  },
  plugins: [],
};
