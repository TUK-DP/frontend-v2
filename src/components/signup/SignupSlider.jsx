import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InputStep1 from "./InputStep1";
import InputStep2 from "./InputStep2";
// 슬라이더 컴포넌트
const SignupSlider = () => {
  // 슬라이더 설정
  const settings = {
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const sliderDatas = [
    {
      step: 1,
      component: <InputStep1 />,
    },
    {
      step: 2,
      component: <InputStep2 />,
    },
  ];

  return (
    <Slider {...settings} className={"pt-headerbarHeight"}>
      {sliderDatas.map((slide) => (
        <div key={slide.step}>{slide.component}</div>
      ))}
    </Slider>
  );
};

export default SignupSlider;
