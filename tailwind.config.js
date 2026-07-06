/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F5F0',
        stone: '#E8E2D9',
        charcoal: '#1C1A17',
        gold: '#C9A96E',
        'gold-light': '#E8D4B0',
        sage: '#8A9E8B',
        'warm-gray': '#6B6560',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        superwide: '0.35em',
      },
    },
  },
  plugins: [],
}
