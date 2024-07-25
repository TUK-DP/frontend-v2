import React from "react";
import Slider from "react-slick";
import Button from "../../components/Button";
import { BUTTON_TEXTS } from "../../hooks/Diagnosis/useDiagnosisSlider";

/**
 * @param sliderRef
 * @param sliderItems : SliderItem[]
 * @param setCurrentSlide
 * @param DiagnosisDatas
 * @param onResponse
 * @return {Element}
 * @constructor
 */
const DiagnosisSlider = ({
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
          className="text-3xl md:text-5xl break-keep font-extrabold p-5 md:p-8 flex flex-col justify-center items-center"
        >
          <p className="text-center md:mb-34 h-[15rem] flex items-center tablet:my-14">
            {slide.question}
          </p>
          <ResponseButtons
            selected={slide.selectedButtonId}
            onClick={(buttonId) => handleResponse(slide.id, buttonId)}
          />
        </div>
      ))}
    </Slider>
  );
};

const ResponseButtons = ({ selected, onClick }) => {
  const buttonStyles = (id) =>
    selected === id ? "bg-[#6100C1] text-white" : "border-[#6100C1] text-black";

  return (
    <div className={"flex flex-col gap-4 tablet:gap-10"}>
      {BUTTON_TEXTS.map((text, index) => (
        <Button
          key={index}
          text={text}
          className={`${buttonStyles(index)} w-full h-[5rem] md:h-[6rem] md:text-3xl cursor-pointer`}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

export default DiagnosisSlider;
