/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        homeBg: "url('./images/bghome.png')",
        contactsBg: "url('./images/bgcont.jpg')",
        shopBg: "url('./images/bgshop.jpg')",
      },
      fontFamily: {
        retroFont : ['Press Start 2P', 'cursive']
      },
    },
  },
  plugins: [],
}