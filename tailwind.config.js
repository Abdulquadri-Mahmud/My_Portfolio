/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'move-one': 'moveOne 10s linear infinite',
        'move-two': 'moveTwo 12s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
        'bounce-slow': 'bounce 3s ease infinite',
      },
      keyframes: {
        moveOne: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(30vw, 10vh)' },
          '50%': { transform: 'translate(0, 20vh)' },
          '75%': { transform: 'translate(-30vw, 5vh)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        moveTwo: {
          '0%': { transform: 'translate(0, 0)' },
          '25%': { transform: 'translate(-20vw, -10vh)' },
          '50%': { transform: 'translate(20vw, 15vh)' },
          '75%': { transform: 'translate(10vw, -10vh)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
    },
  },
  plugins: [],
}