/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        'white': '#f9fafb',
        'black': '#04052f',
        'silver': '#626b84',
        'lightGray': '#e8e8fd',
        'lightBlue': '#5686f5',
        'darkGray': '#16181d',
        'darkBlue': '#1d2433',
        'stands': '#e56a96',
      },
      fontFamily: {
        'sans': ['Segoe UI'],
      },
      fontSize: {
        '3xl': ['2.2rem', {
          lineHeight: '1.6818em',
          letterSpacing: 0,
          fontWeight: 600
        }],
      }
    }
  },
  plugins: [],
}
