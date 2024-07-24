import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/signInOrUpSlider.css";

// 슬라이더 컴포넌트
const SignupSlider = ({ children, sliderRef }) => {
  const settings = {
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  // 슬라이더 설정
  return (
    <Slider
      ref={sliderRef}
      {...settings}
      className={"flex flex-col flex-1 pb-20"}
    >
      {children}
    </Slider>
  );
};

export default SignupSlider;
