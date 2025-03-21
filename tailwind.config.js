/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          navy: "#0A1A3C", // replace with your navy color value
          dark: "#09122F",
          meow: "#13284D",
          lightestSlate: "#DCD5C7", // replace with your lightest-slate color value
          greenBright: "#00ffe1",
          slate: "#a8b2d1",
          lightestNavy: "#233554", // replace with your green-bright color value
        },
        fontFamily: {
          sans: ["NTR", "sans-serif"],
        },
        fontWeight: {
          bold: "700",
        },
      },
    },
  },
  plugins: [],
};
