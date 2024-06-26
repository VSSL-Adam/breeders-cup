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
        black: "#1a1818;",
        white: "#fff",
        purple: "#512d6d",
        gold: "#b08f23",
        light_gold: "#fffef1",
      },
    },
  },
  plugins: [],
};
