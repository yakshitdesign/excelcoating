// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        zinc: require('tailwindcss/colors').zinc, // Default Zinc Colors
        neutral: require('tailwindcss/colors').neutral, // Default Neutral Colors
      },
    },
  },
  plugins: [],
};
