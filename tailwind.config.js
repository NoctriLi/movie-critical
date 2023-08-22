/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      containers: {
        '2xs': '16rem',
        '3xs': '12rem',
      },
      keyframes: {
        'leftToRight' : {
          '0%' : { transform: 'translateX(-100%)' },
          '100%' : { transform: 'translateX(100)', zIndex: 0, height: '0px' },
        },
      },
      animation: {
        'leftToRight' : 'leftToRight 1s ease-in',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/forms')],
  darkMode: 'class',
};