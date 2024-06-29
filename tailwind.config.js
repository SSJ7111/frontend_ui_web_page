/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      habot_blue: "#072f57",
      habot_red: "#e7760d",
      habot_gray: "#6d6e71",
      habot_green: "#00732f",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      borderRadius: {
        "sm": "5px",
      },
    },
  },
  plugins: [],
};
