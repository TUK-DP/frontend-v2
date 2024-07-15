module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF8484",
          600: "#6100C1",
          700: "#FFECEC",
        },
        secondary: {
          500: "#686868",
          600: "#D9D9D9",
          700: "#FF3C3C",
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
        headerbarHeight: "80px",
      },
      screens: {
        mobile: { min: "240px", max: "640px" },
        tablet: { min: "641px", max: "1280" },
        pc: { min: "1280" },
      },
      borderRadius: {
        "lg-xl": "0.625rem", //10px
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
