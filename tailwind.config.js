/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ee702c",
        secondaryColor: "#ddd0c8",
        accentColor: "#6c7680",
      },
    },
  },
  plugins: [daisyui],
};
