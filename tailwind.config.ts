import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-works':
          'radial-gradient(50% 50% at 50% 50%, #E36CE6 0%, rgba(255, 255, 255, 0) 100%)',
        'gradient-purplebar':
          'linear-gradient(90deg, rgba(137, 77, 246, 0.7) 0%, rgba(247, 40, 142, 0.7) 102.79%)',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      colors: {
        octopost: {
          primaryWhite: '#fff',
          secondaryWhite: '#f8f9ff',
          tertiaryWhite: '#d8d8d8',
          primaryBlack: '##2d2d2d',
          primaryViolet: '#a076f9',
          secondaryViolet: '##894df6',
          tertiaryViolet: '#5c5ca0',
          primaryPurple: '#b71fdc',
          secondaryPurple: '##ac3fe4',
          darkBlue: '#2f2667',
          primaryPink: '#f7288e',
        },

        petdex: {
          primaryBlue: '#62DCF6',
          secondaryBlue: '#1C85F3',
          primaryYellow: '#FFC542',
          primaryGreen: '#3A8DA8',
          secondaryGreen: '#003459',
          primaryPurple: '#564AE4',
          darkBlue: '#091846',
          primaryPink: '#DF3D82',
          pastelBlue: '#BAD8EB',
          pastelYellow: '#FFF2A6',
          pastelPink: '#FFC6DA',
          primarySucess: '#D3EFE0',
          secondarySucess: '#318A5D',
          error: '#B3271E',
        },
      },
      boxShadow: {
        'dropshadow-card': '2px 3px 13.9px 0px rgba(0, 0, 0,, 0.05)',
      },
      screens: {
        mobile: { min: '320px', max: '480px' },
        tablet: { min: '768px', max: '1279px' },
        desktop: { min: '1280px' },
      },
      utilities: {
        'no-scrollbar': {
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
