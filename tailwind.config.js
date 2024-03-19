/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 4px 10px rgba(0, 0, 0, 0.25)',
      }
    }
  },
  plugins: [],
}

