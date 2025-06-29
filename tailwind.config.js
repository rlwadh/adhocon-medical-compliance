// tailwind.config.js - ERSETZEN oder ERSTELLEN
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // WICHTIG: Dark Mode über CSS-Klasse aktivieren
  theme: {
    extend: {
      colors: {
        // ADHOCON Farben definieren
        'adhocon-blue': '#006caa',
        'adhocon-dark': '#003459',
      },
    },
  },
  plugins: [],
}