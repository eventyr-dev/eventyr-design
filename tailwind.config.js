/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        nordic: {
          // Primary & Secondary
          pine: {
            DEFAULT: '#2F3E46',
            light: '#354F52',
          },
          sage: {
            DEFAULT: '#84A98C',
            light: '#9CB4A4',
            dark: '#6B8A75',
          },
          glacier: '#CAD2C5',
          // Neutrals
          charcoal: '#1C1917',
          granite: '#57534E',
          mist: '#E7E5E4',
          snow: '#FAFAF9',
          // Functional
          earth: '#DDA15E',
          berry: '#BC4749',
        }
      },
    },
  },
  plugins: [],
}
