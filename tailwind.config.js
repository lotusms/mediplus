/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      white:          "#ffffff",
      offwhite:       "#f8fafc",
      darkwhite:      "#e2e8f0",
      light:          "#f1f5f9",
      lightgray:      "#94a3b8",
      darkgray:       "#4b5563",
      dark:           "#27272a",
      darker:         "#09090b",
      primary:        "#2563eb",
      primaryhover:   "#3b82f6",
      primarylight:   "#3b82f6",
      primarytext:    "#ffffff",
      secondary:      "#e5e7eb",
      secondaryhover: "#d1d5db",
      secondarytext:  "#1f2937",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}

