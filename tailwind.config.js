/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screen: '1758px !important',
      padding: '24px'
    },
    extend: {
      screens: {
        'max-3xl': { raw: '(max-width:1440px)' },
        'max-lg': { raw: '(max-width:1024px)' },
        'max-xl': { raw: '(max-width:1280px)' },
        'max-sm': { raw: '(max-width:690px)' },
        'max-m': { raw: '(max-width:550px)' },
        'max-s': { raw: '(max-width:450px)' }
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        html: {
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        'html::-webkit-scrollbar': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          display: 'none'
        },
        '.hide-scrollbar': {
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none'
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          /* Hide scrollbar for Chrome, Safari and Opera */
          display: 'none'
        }
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ]
}
