/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
  theme: {
    extend: {
      colors: {
        primary: { 50: '#8282c8', 100: '#6e6eb9', 200: '#5c5caa', 300: '#4c4c9b', 400: '#3d3d8c', 500: '#30307d', 600: '#25256e', 700: '#1b1b5f', 800: '#121250', 900: '#0B0B41' },
        back: "#0E0E0E"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}

