/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensure correct paths
  theme: {
    extend: {
      animation: {
        fadeBounce: "fadeBounce 0.8s ease-out forwards",
      },
      keyframes: {
        fadeBounce: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "50%": { opacity: "1", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}