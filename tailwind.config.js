/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        body1: ["Inter", "sans-serif"],
        body2: ["Sora", "sans-serif"],

      },
      fontWeight: {
        300: 300,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)', },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      keyframes: {
        flowerFlow: {
          '0%': {
            opacity: '1',
            transform: 'rotate(0deg)',
            boxshadow: '0 0 0 -.5em currentcolor'
            //   '0 0 0 -.5em currentcolor'
            //   '0 0 0 -.5em currentcolor'
            //  '0 0 0 -.5em currentcolor'
            //  '0 0 0 -.5em currentcolor'
            //   '0 0 0 -.5em currentcolor'
            //   '0 0 0 -.5em currentcolor',
            //   '0 0 0 -.5em currentcolor',
          },
          '100%': {
            opacity: '0',
            transform: 'rotate(180deg)',
            boxshadow: '-1em -1em 0 -.35em currentcolor',
            // '0 -1.5em 0 -.35em currentcolor'
            // '1em -1em 0 -.35em currentcolor'
            // '-1.5em 0 0 -.35em currentcolor'
            // 1.5em -0 0 -.35em currentcolor'
            // -1em 1em 0 -.35em currentcolor,
            // 0 1.5em 0 -.35em currentcolor,
            // 1em 1em 0 -.35em currentcolor;
          }
        },
      },
      animation: {
        wiggle: 'flowerFlow 1s ease-out infinite;',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
