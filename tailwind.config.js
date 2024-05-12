const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        colors: {
          white: colors.white,
          gray: colors.slate,
          violet: colors.violet
        },
        extend: {
          fontFamily: {
            header: 'IBM Plex Serif',
          },
        },
        
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
