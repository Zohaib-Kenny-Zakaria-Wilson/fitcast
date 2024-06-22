/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        sm: "5px",
        md: "10px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      background: "#f0f0f0",
      foreground: "#ffffff",
      "primary-tw": "#494747",
      "secondary-tw": "#7A7A7A",
      "component-border": "#DFDFDF",
      "dark-background": "#272626", // Dark mode background
      "dark-foreground": "#373737", // Dark mode foreground
      "dark-primary-tw": "#C7C7C7", // Dark mode primary-tw text
      "dark-component-border": "#1A1A1A", // Dark mode border
    },
    fontFamily: {
      sans: ["azo-sans-web", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
