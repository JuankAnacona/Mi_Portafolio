/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*"],
  theme: {
    extend: {
      colors: {
        'primary': '#07001B',
        'secondary': {
          100: '#F5F2FF',
          200: '#BDA8FF'
        }

      }, backgroundColor: {
        'primary': '#07001B',
        'secondary': '#888883'
      }

    },
  },
  plugins: [],
}

