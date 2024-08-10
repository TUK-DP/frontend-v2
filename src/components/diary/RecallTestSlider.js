import React from "react";
import Slider from "react-slick";
import "../../styles/sliderStyles.css";

const RecallTestSlider = ({
  sliderRef,
  sliderItems,
  setCurrentSlide,
  handleResponse,
}) => {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (nextSlideIndex) =>
      setCurrentSlide(sliderItems.find((item) => item.id === nextSlideIndex)),
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {sliderItems.map((slide, index) => (
        <div
          key={index}
          className="text-3xl md:text-5xl break-keep font-extrabold flex items-center justify-center"
        >
          <p className="w-full h-[15rem] md:h-[30rem] flex justify-center items-center text-center tracking-widest">
            {slide.question}
          </p>
          <ResponseInput
            value={slide.inputValue}
            onChange={(value) => handleResponse(slide.id, value)}
          />
        </div>
      ))}
    </Slider>
  );
};

const ResponseInput = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      className="w-full h-[4rem] md:h-[6rem] text-2xl md:text-3xl p-8 border-2 border-[#B1B1B1] rounded-xl"
      placeholder="정답을 입력해주세요"
    />
  );
};

export default RecallTestSlider;
