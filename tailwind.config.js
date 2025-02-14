/** @type {import('tailwindcss').Config} */
// import relumeTailwind from "@relume_io/relume-tailwind";s


export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [require("@relume_io/relume-tailwind")],
}