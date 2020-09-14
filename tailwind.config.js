module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ['Work Sans'],
      },
      fontSize: {
        xxs: '0.65rem',
      },
      rotate: {
        '-30': '-30deg',
      },
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
