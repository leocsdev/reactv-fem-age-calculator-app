/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary
        myPurple: 'hsl(259, 100%, 65%)',
        lightRed: 'hsl(0, 100%, 67%)',
        // Neutral
        offWhite: 'hsl(0, 0%, 94%)',
        lightGrey: 'hsl(0, 0%, 86%)',
        smokeGrey: 'hsl(0, 1%, 44%)',
        offBlack: 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
