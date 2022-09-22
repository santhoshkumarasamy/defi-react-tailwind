/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary-color" : "var(--primary-blue)",
        "secondary-color" : "var(--secondary-purple)"

      },
      backgroundImage:{
        "subscribe-image" :"url('./assets/subscribe.jpg')"
      }
    },
  },
  plugins: [],
}