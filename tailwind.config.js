/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light mode palette (luxury light)
        light: {
          bg: "#fafaf8", // Nearly white, warm tone
          surface: "#f5f5f3", // Slightly darker surface
          border: "#e8e8e5", // Light border
          text: "#1a1a18", // Near black text
          muted: "#8b8b85", // Muted text
        },
        // Dark mode palette (luxury dark - current style)
        dark: {
          bg: "#000000", // Pure black background
          surface: "#151515", // Dark surface
          border: "#2f2f2f", // Dark border
          text: "#ffffff", // White text
          muted: "#a1a1a1", // Muted text (zinc-400)
        },
      },
      fontSize: {
        inherit: "inherit",
      },
    },
  },
  darkMode: "class", // Use class-based dark mode
  plugins: [],
}
