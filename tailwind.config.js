/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*"],
  theme: {
    extend: {
      colors: {
        'primary': '#07001B',
        'secondary': {
          100: '#F5F2FF',
          150: '#DCD1FF',
          200: '#BDA8FF',
          250: '#8F6CFF',
          300: '#7A50FF',
          700: '#1E0F54'
        }

      }, backgroundColor: {
        'primary': '#07001B',
        'secondary': {
          100: '#F5F2FF',
          150: '#DCD1FF',
          200: '#BDA8FF',
          300: '#7A50FF',
          650: '#2E2357',
          700: '#1E0F54'
        }
      }, boxShadow: {
        'def': '0 0px 21px -10px rgba(0, 0, 0, 0.3)',
      }

    },
  },
  plugins: [],
}

