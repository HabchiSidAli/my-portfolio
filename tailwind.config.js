/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        switzer: ['switzer', 'sans-serif'],
        outfit: ['outfit', 'sans-serif']
      },
      colors: {
        'blue': '#107dac',
        'lightBlue': '#E4F6FF',
        'darkBlue': '#005073'
      }
    },
  },
  plugins: [],
}
