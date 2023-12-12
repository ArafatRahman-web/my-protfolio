/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryColor: "#1B4242",
      BtnColor: "#BCD5CC",
      textColor: "#7FE4C1",
    },
  },
  plugins: [require("daisyui")],
};
