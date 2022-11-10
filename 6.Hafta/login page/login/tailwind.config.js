/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '40-r':'40rem',
        '35-r': '30rem'

      },
      height:{
        '40-r': '40rem',
        '35-r': '30rem'
      },
      boxShadow:{
        '5xl': '20px 20px 50px rgba(0,0,0,0.5)',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
