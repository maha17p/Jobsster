/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#232347",
        secondary:"#f1bd4c",
        white:"#ffffff",
        bgColor:"#f3f7fc"
      },
      height: {
        headerHeight:"4rem",
        pageHeight:"calc(100vh - 4rem)"
      },
      minHeight:{
        pageMinHeight:"calc(100vh - 4rem)"
      },
      maxWidth:{
        maxWidth:"1500px"
      },
      transitionTimingFunction:{
        "in-expo":"transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) "
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
    },
  },
  plugins: [],
}