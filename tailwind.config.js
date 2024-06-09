/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#f0f0f0',
      'foreground': '#ffffff',
      'primary': '#494747',
      'component-border': '#DFDFDF',
    },
    fontFamily: {
      'sans': ['Azo Sans', 'sans-serif'],
      azo: ['Azo Sans', 'sans-serif'],
    },
  },
  plugins: [],
}

//NOTE: We can change default theme values in tailwind.config.js file. And make it custom
