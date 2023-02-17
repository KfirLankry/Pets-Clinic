/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#8787ff",
      lightgrey: "#D3D3D3",
      gray: "#B0B0B0",
      gray_hover: "#c9c9c9",
      white: "#FFFFFF",
      black: "#252525",
      black_hover: "#414a4c",
      success: "#4CAF50",
      success_hover: "#64c468",
      error: "#FF5252",
      error_hover: "#ff7575",
      dog: "#27ca95",
      parrot: "#ef718c",
      cat: "#0a92de",
    },
    fontFamily: {
      mono: ["Roboto", "monospace"],
      sans: ["Roboto", "sans-serif"],
      serif: ["Roboto", "sans-serif"],
      display: ["Roboto", "sans-serif"],
      body: ["Roboto", "sans-serif"],
    },
    extend: {
      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
      },
    },
  },
  plugins: [],
};
