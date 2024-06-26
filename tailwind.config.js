/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "primary-green-200-lighter": "hsl(148, 38%, 91%)",
      "primary-green-200-medium": "hsl(169, 82%, 27%)",
      "primary-red": "hsl(0, 66%, 54%)",
      "neutral-white": "hsl(0, 0%, 100%)",
      "neutral-grey-500-medium": "hsl(186, 15%, 59%)",
      "neutral-grey-900-darker": "hsl(187, 24%, 22%)",
    },
  },
  plugins: [],
};
