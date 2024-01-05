/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'my-grey': '#00000033'
      }
    }
    
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

