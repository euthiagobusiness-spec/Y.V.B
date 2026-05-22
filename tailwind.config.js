/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blush: '#A86F6F',
        nude: '#EBD3D0',
        ivory: '#FAF6F3',
        gold: '#C8A46A',
        cocoa: '#5A3C3A',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(90, 60, 58, 0.08)',
      },
    },
  },
  plugins: [],
}
