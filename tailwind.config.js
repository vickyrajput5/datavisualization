/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          light: "#93C5FD", // blue-300
          dark: "#1D4ED8", // blue-700
        },
        secondary: {
          DEFAULT: "#10B981", // emerald-500
          light: "#6EE7B7", // emerald-300
          dark: "#047857", // emerald-700
        },
        danger: {
          DEFAULT: "#EF4444", // red-500
          light: "#FCA5A5", // red-300
          dark: "#B91C1C", // red-700
        },
      },
    },
  },
  plugins: [],
};
