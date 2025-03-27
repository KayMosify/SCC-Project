/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "350px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },   
    extend: {
      colors: {
        red: "#E30017",
        darkRed: "#9A0010",
        lightBlue: "#528CCB",
        blue: "#0056B3",
        darkBlue: "#1e3a8a",
        lightGrey: "#EDF2F8",
        darkGrey: "#333333",
        black: "#000000",
        white: "#ffffff",
      },
    },
    fontFamily: {
      body: ["Poppins"],
      special: ['"Lato"'],
    },
  },
  plugins: [],
}

