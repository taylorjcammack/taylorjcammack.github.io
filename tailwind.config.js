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
          violet: colors.violet,
          paper: 'hsl(75, 13%, 86%)',
          offpink: 'hsl(12, 17%, 57%)',
          offblue: 'hsl(225, 10%, 22%)',
        },
        fontFamily: {
          'text': ['Inter', 'sans-serif'],
          'header': ['"Source Serif 4"', 'serif']
        },        
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
