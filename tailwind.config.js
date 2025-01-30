/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './index.html',
//     './src/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     require('@tailwindcss/aspect-ratio'),
//     require('@tailwindcss/typography'),
//     // require('tailwindcss-children'),
//   ],
// }

export default {
    content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['"Inter Medium"', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    // require('tailwindcss-children'),
  ],
}

