module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary
        'main-bg': 'hsl(233, 47%, 7%)',
        'card-bg': 'hsl(244, 38%, 16%)',
        accent: 'hsl(277, 64%, 61%)',
        // Neutral
        white: 'hsl(0, 0%, 100%)',
        'main-p': 'hsla(0, 0%, 100%, 0.75)',
        'stat-h': 'hsla(0, 0%, 100%, 0.6)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      },
      fontWeight: {
        400: '400',
        700: '700',
      },
      fontSize: {
        fsz: '15px',
      },
      screens: {
        'mb-sm': '360px',
      },
    },
  },
  plugins: [],
}
