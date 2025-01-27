/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Colores personalizados
        "q10-orange": "#FF8500",
      },
    },
  },
  plugins: [],
}