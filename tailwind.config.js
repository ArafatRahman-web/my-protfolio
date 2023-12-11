/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryColor: "#f1f5f9",
      BtnColor: "#854eee",
    },
  },
  plugins: [require("daisyui")],
};
