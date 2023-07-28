/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'xmd': {'max': '950px'},

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }
      'nm': {'max': '680px'},
      'nma': {'max': '590px'},
      'nmb': {'max': '470px'},
      'nmc': {'max': '430px'},
      'nmd': {'max': '444px'},



      'xnm':{'max':'860px'},

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'xsm': {'max': '380px'},
    },
    extend: {},
  },
  plugins: [],
}