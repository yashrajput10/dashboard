/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
     screens: {
      'sm': '480px',     // Custom small screen (480px)
      'md': '768px',     // Custom medium screen (768px)
      'lg': '1024px',    // Custom large screen (1024px)
      'xl': '1280px',    // Custom extra-large screen (1280px)
    },
  },
  plugins: [],
}