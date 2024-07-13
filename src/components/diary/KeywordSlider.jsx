import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const KeywordSlider = ({ keywords }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    infinite: false,
  };
  return (
    <Slider {...settings} className={"w-full mobile:py-4 py-10"}>
      {keywords.map((keyword, index) => (
        <div key={index} className={"text-center mobile:text-3xl text-5xl"}>
          {keyword}
        </div>
      ))}
    </Slider>
  );
};
export default KeywordSlider;

const NextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 transform -translate-y-1/2 right-7 z-10">
    <FaLongArrowAltRight
      onClick={onClick}
      className={"mobile:text-4xl text-6xl cursor-pointer"}
    />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 transform -translate-y-1/2 left-7 z-10">
    <FaLongArrowAltLeft
      onClick={onClick}
      className={"mobile:text-4xl text-6xl cursor-pointer"}
    />
  </div>
);
