/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-0.5px 9.5px 13px 9.5px #dddddd',
      },
    },
  },
  plugins: [],
}

