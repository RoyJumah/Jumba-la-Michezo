/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    fontFamily: {
      games: 'Roboto Mono, monospace',
      sans: 'sans-serif',
    },
    extend: {
      aspectRatio: {
        1: "1",
      },
      backgroundColor: {
        "primary": "#6741d9",
        "primary-light": "#7950f2",
        "secondary-light": "#2b3035",
        "secondary-dark":" #212529",
        "red-light":"#fa5252",
        "red-dark":"#e03131",
      },
      gridTemplateColumns: {
        '4rem-1fr': '4rem 1fr',
      },
      top: {
        "1": "0.80rem",
      },
      right: {
        "1": "0.80rem", 
      },
      borderRadius: {
        '50': '50%', 
      },
    textColor:{
     "dark":" #adb5bd",
     "secondary-dark":" #212529",
    },
      zIndex: {
        999: "999",
      },
      width: {
        "42rem": "42rem",
        "33":"33%",
      },
      maxWidth: {
        "42rem": "42rem",
      },
      height: {
        "calc-screen": "calc(100vh - 7.2rem - 3 * 2.4rem)",
        "2": "2.4rem",
      },
    },
  },
  plugins: [],
};