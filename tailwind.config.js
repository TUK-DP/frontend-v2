module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          600: "#6100C1",
        },
        secondary: {
          600: "#D9D9D9",
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
        headerbarHeight: "80px",
      },
      screens: {
        mobile: { min: "240px", max: "640px" },
        tablet: { min: "641px", max: "1280" },
        pc: { min: "1280" },
      },
      borderRadius: {
        "lg-xl": "0.625rem", //10px
        "3.5xl": "1.25rem", //20px
      },
    },
    plugins: [],
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
