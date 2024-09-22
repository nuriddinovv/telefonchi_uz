/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.3rem",
          sm: "0.4rem",
          md: "0.5rem",
          lg: "1rem",
          xl: "1rem",
          "2xl": "1rem",
        },
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "968px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
