/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'text-shine': 'shine 2s linear infinite'
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '200%' }
        }
      }
    },
  },
  plugins: [],
}