const headerBarHeight = "80px";

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#FF8484",
          600: "#6100C1",
          700: "#FFECEC",
          800: "#E5CEF2",
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
        aiHelpButton: "#E5CEF2",
        showOtherDrawButton: "#D1D5F0",
      },
      spacing: {
        minWidth: "360px",
        maxWidth: "1280px",
        navBarHeight: "90px",
        chatTextMaxWidth: "300px",
        headerBarHeight: headerBarHeight,
        heightWithOutHeader: `calc(100vh - ${headerBarHeight})`,
      },
      screens: {
        mobile: { min: "240px", max: "640px" },
        tablet: { min: "641px", max: "1280px" },
        pc: { min: "1280px" },
      },
      borderRadius: {
        "lg-xl": "0.625rem", //10px
        "3.5xl": "1.25rem", //20px
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
