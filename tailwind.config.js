/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#337B7D',
        accent: {
          salmon: '#EC9577',
          mustard: '#e9ad26',
        },
        background: '#eaf4ef',
        highlight: '#fdf0eb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};