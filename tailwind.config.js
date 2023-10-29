/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-dark': 'hsl(209, 23%, 22%)',
        'primary-bg-dark': 'hsl(207, 26%, 17%)',
        'primary-txt-dark': 'hsl(200, 15%, 8%)',
        'primary-input-light': 'hsl(0, 0%, 52%)',
        'Light-Gray': ' hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
