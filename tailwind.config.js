/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '128': '15rem',
      },
      spacing: {
        '100': '95%',
      }
    },
  },
  plugins: [],
}

