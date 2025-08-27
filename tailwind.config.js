/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    // extend: {
    //   fontFamily: {
    //     libertinus: ['Libertinus Math', 'sans-serif'],
    //   },
    // },
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
