/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
  ],
  plugins: [require('flowbite/plugin')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F1F6FA',
          100: '#E2EDF5',
          200: '#C5D7EB',
          300: '#A9C1E1',
          400: '#8CAAD7',
          500: '#6F94CD',
          600: '#5A7BA3',
          700: '#456279',
          800: '#30394F',
          900: '#1B2334',
        },
      },
    },
    container: {
      center: true,
    },
  },
}

module.exports = config
