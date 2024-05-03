/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    container: {
      padding: '5rem'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bgcolor: "#000",
        mobilebgcolor: '#252527',
        lineanimation: '#FF0000'
      },
      fontFamily: {
        inter: ['inter', "sans-serif"],
      },
    },
    screens: {
      xs: "320px",
      ss: "340px",
      sm: "870px",
      md: "1060px",
      lg: "1200px",
      xl: "1420px",
    },


  },
  plugins: [],
}
