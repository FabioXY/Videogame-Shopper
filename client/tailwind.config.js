/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      retroFont : ['Press Start 2P', 'cursive']
    },
    extend: {
      backgroundImage: {
        homeBg: "url('./images/bghome.png')",
    },
  },
  plugins: [],
}}