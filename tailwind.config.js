/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      games: "Roboto Mono, monospace",
      sans: "sans-serif",
    },
    extend: {
      aspectRatio: {
        1: "1",
      },

      backgroundColor: {
        primary: "#e67700",
        "primary-light": "#f59f00",
        "secondary-light": "#2b3035",
        "secondary-dark": " #212529",
        "tertiary-dark": "#212529",
        "red-light": "#fa5252",
        "red-dark": "#e03131",
      },
      gridTemplateColumns: {
        "2.5rem-1fr": "2.5rem 1fr",
      },
      top: {
        1: "0.80rem",
      },
      right: {
        1: "0.80rem",
      },
      borderRadius: {
        50: "50%",
      },
      colors: {
        "secondary-light": "#2b3035",
        "secondary-dark": " #212529",
        primary: "#e67700",
        "primary-light": "#f59f00",
        "tertiary-dark": "#212529",
      },
      textColor: {
        dark: "#495057",
        "secondary-dark": " #212529",
      },
      zIndex: {
        999: "999",
      },
      width: {
        "26rem": "26rem",
        33: "33%",
      },
      maxWidth: {
        "26rem": "26rem",
      },
      height: {
        "calc-screen": "calc(100vh - 4.5rem - 3 * 1.5rem)",
      },
      boxShadow: {
        "inner-primary": "0 1.2rem 2.4rem rgba(0,0,0,.2)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
