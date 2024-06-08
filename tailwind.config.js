module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comfortaa-VariableFont_wght'],
      },
      objectPosition: {
        'top-center': 'top center',
        'top-left': 'top left',
        'left-top': 'left top',
      },
      screens: {
        mobile: { max: '959.99px' },
        tablet: { min: '960px', max: '1349.99px' },
        desktop: { min: '1350px' },
        '2xl': '1536px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
      },
      fontWeight: {
        500: '500',
        600: '600',
        700: '700',
      },
      colors: {
        background: {
          login: '#F8FCFF',
          main: '#F5F6FA',
          components: {
            input: 'white',
          },
        },
        text: { primary: '#3B86FF', error: 'red' },
        primary: '#3B86FF',

        dark: {
          100: '#334155',
          150: '#1E293B',
          200: '#222F3E',
          300: '#222f3e',
          400: '#0F172A',
          500: '#070B15',
          600: '#0F172A',
        },
        custom: {
          100: '#D9DAEB',
        },
      },
    },
    // screens: {
    //   xs: "320px",
    //   // => @media (min-width: 250px) { ... }
    //   sm: "640px",
    //   // => @media (min-width: 640px) { ... }

    //   md: "768px",
    //   // => @media (min-width: 768px) { ... }

    //   lg: "1250px",
    //   // => @media (min-width: 1024px) { ... }

    //   xl: "1280px",
    //   // => @media (min-width: 1280px) { ... }

    //   "2xl": "1536px",
    //   // => @media (min-width: 1536px) { ... }
    // },
  },
  plugins: [],
};
