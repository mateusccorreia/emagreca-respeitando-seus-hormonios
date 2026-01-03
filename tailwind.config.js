/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', 'system-ui', 'sans-serif'],
        body: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 12px 35px -18px rgba(16, 24, 40, 0.15)',
      },
      colors: {
        earth: {
          400: '#EBC369',
          500: '#D4AF37',
          600: '#B4932B',
          700: '#8A701E',
        },
      },
    },
  },
  plugins: [],
};
