module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#6100C1",
        },
        sliderBgGame: "#FFE68F",
        sliderBgResult: "#FF9B52",
        sliderBgExercise: "#FF7D7D",
        sliderBgCenter: "#356DD9",
      },
      spacing: {
        minWidth: "360px",
        maxWidth: "1280px",
        navBarHeight: "90px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
