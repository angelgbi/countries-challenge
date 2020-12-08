// tailwind.config.js
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        'countries-app': [
          '"Nunito Sans"',
          'sans-serif',
          '"Source Sans Pro"',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
        ],
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
        'dark-gray': 'hsl(0, 0%, 52%)',
        'dark-blue': 'hsl(209, 23%, 22%)',
        'very-dark-blue-text': 'hsl(200, 15%, 8%)',
        'very-dark-blue-bg': 'hsl(207, 26%, 17%)',
      },
    },
  },
}
