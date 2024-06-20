const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.content': {
          width: '768px',
          margin: '0 auto',
          '@media (max-width: 768px)': {
            width: '90vw',
          },
        },
      });
    }),
  ],
};
