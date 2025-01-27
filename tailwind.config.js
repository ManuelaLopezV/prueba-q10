/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Colores personalizados
        "q10-orange": "#F7941D",
      },
    },
  },
  plugins: [],
};
