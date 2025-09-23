/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#a3e635", // lime accent for dots/badges
        primary: "#02C6F0", // cyan
        secondary: "#0073A4", // deep cyan
        accent: "#B1B610", // yellow for headings
        dark: "#414446",

        // surfaces used in your classes: bg-surface/45, border-surface-2, etc.
        surface: "#171D2B",
        "surface-2": "#253046",
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
