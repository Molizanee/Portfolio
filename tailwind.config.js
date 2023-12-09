/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-blue": "#00A6FB",
        "second-blue": "#0582CA",
        "dark-blue": "#006494",
        "darker-blue": "#003554",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "outline-blue":
          "box-shadow: 0px 0px 20.4px 0px rgba(5, 130, 202, 0.25)",
      },
      borderRadius: {
        "main-border": "20px",
      },
    },
  },
  plugins: [],
};
