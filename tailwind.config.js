/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Necesario para el HTML base
    "./src/**/*.{js,ts,jsx,tsx}", // ¡Esta línea es CRUCIAL para tus componentes React!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}