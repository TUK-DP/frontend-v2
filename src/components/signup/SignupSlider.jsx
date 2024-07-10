import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InputStep1 from "./InputStep1";
import InputStep2 from "./InputStep2";
import { useInput } from "../../hooks/useInput";

const settings = {
  infinite: false,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
};

// 슬라이더 컴포넌트
const SignupSlider = ({ signUpForm, handleChangeInput }) => {
  // 슬라이더 설정
  const sliderDatas = [
    {
      step: 1,
      component: <InputStep1 handleChangeInput={handleChangeInput} />,
    },
    {
      step: 2,
      component: (
        <InputStep2
          signUpForm={signUpForm}
          handleChangeInput={handleChangeInput}
        />
      ),
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
