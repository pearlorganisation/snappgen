/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
      fontSize: {
        responsive: "clamp(1rem, 2.5vw + 1rem, 3rem)",
      },
    },
  },
  plugins: [],
};
