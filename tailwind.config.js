/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#7736e8',
        primaryDark: '#732cbb',
        secondary: '#2178d4',
        Dark: '#303030',
      },
      fontFamily:{
        inter:[ "inter","sans-serif"],
        cursive:["Ephesis","cursive"],
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
        },
      },
    },
  },
  plugins: [],
}
