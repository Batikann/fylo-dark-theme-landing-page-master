/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        openSans:"'Open Sans', sans-serif",
        raleWay:"'Raleway', sans-serif"
      },
      colors:{
        d_blue_v1:"hsl(217, 28%, 15%)",
        d_blue_v2:"hsl(218, 28%, 13%)",
        d_blue_v3:"hsl(216, 53%, 9%)",
        d_blue_v4:"hsl(219, 30%, 18%)",
        cyan:"hsl(176, 68%, 64%)",
        blue:"hsl(198, 60%, 50%)",
        l_red:"hsl(0, 100%, 63%)"
      }
    },
  },
  plugins: [],
}
