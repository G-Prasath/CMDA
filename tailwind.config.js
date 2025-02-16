/** @type {import('tailwindcss').Config} */
// import relumeTailwind from "@relume_io/relume-tailwind";s


export default {
  content: [
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
    "index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_clr: "#05498c",
        secondary_clr: "#f3f0e5",
        thired_clr: "#412f11",
        dark_clr: "#0c000c",
        peach: {
          500: '#FFB07C', // Define your peach color here
        },
      }
    },
  },
  plugins: [],
  presets: [require("@relume_io/relume-tailwind")],
}