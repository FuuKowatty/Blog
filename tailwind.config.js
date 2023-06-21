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
      },
      keyframes: {
        open: {
          '0%': {opacity: 0, transform: 'scale(0.6)'},
          '100%': {opacity: 1, transform: 'scale(1)'},
        },
        close: {
          '0%': {opacity: 1, transform: 'scale(1)'},
          '100%': {opacity: 0, transform: 'scale(0.6)'},
        },
        slideLeftToRight: {
          '0%': {
            left: '2px',
            right: 'auto',
          },
          '100%': {
            right: '2px',
            left: 'auto',
          }
        },
        slideRightToLeft: {
          '0%': {
            right: '2px',
            left: 'auto',
          },
          '100%': {
            left: '2px',
            left: 'auto',
          }
        }

      },
      animation: {
        open: 'open 0.3s ease-out',
        close: 'close 0.4s ease-in',
        slideLeftToRight: 'slideLeftToRight 1.3s ease-out',
        slideRightToLeft: 'slideRightToLeft 1.3s ease-out',
      },
    }
  },
  plugins: [],
}
