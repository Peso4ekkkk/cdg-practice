/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html, css}"],
    theme: {
      extend: {
        fontFamily:{
          Montserrat:["Montserrat","sans-serif"],
        }
      },
      colors:{
        black:'#27272A',
        greyDark:'#696969',
        greyWhite:'#27272A',
        white:'#FCFBFA',
        lavender:'#7E3AF2',
        red:'#E02424'
      }

    },
    plugins: [],
  }