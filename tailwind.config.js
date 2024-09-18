/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'tiempos-text': ['Tiempos-Text', 'sans-serif'],
      'tiempos-head': ['Tiempos-Headline', 'sans-serif'],
      'neue-grotesk': ['neue-haas-grotesk-display', 'sans-serif'],
    },

  },
  plugins: [],
}

