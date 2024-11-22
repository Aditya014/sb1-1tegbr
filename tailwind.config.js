/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        background: 'var(--background)',
        surface: 'var(--surface)',
      },
      fontFamily: {
        mono: ['Share Tech Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};