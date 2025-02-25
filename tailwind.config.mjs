/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        black: "4px 4px #000",
        white: "4px 4px #000",
        orange: "4px 4px #FFA500",
        pink: "4px 4px rgba(236, 72, 153, 0.8)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(200px, 1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
