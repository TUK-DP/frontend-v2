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
    <Slider {...settings} className={"w-full py-4"}>
      {keywords.map((keyword, index) => (
        <div key={index} className={"text-center text-3xl "}>
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
      className="text-4xl cursor-pointer"
    />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 transform -translate-y-1/2 left-7 z-10">
    <FaLongArrowAltLeft
      onClick={onClick}
      className={"text-4xl cursor-pointer"}
    />
  </div>
);
