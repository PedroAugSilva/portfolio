/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        firacode: ["Fira Code", "monospace"],
      },
      boxShadow: {
        "gradient-lg":
          "-7px -7px 24px 5px rgba(30,64,175,0.28), 7px 7px 24px 5px rgba(134,25,143,0.29)",
        "gradient-md":
          "-7px -7px 20px 1px rgba(30,64,175,0.28), 7px 7px 20px 1px rgba(134,25,143,0.29)",
        "gradient-sm":
          "-7px -7px 14px -5px rgba(30,64,175,0.28), 7px 7px 14px -5px rgba(134,25,143,0.29)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto, minmax(0, 1fr))"
      }
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
