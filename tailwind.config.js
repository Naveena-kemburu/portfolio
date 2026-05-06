/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        bg: '#050508',
        surface: '#0f0f14',
        surface2: '#16161e',
        border: 'rgba(255,255,255,0.07)',
      },
    },
  },
  plugins: [],
}
