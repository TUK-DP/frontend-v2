import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css";
import Button from "../../components/Button";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleCheck,
} from "react-icons/tb";

export const DIAGNOSIS_PAGE_PATH = "/diagnosis";

const Diagnosis = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState(Array(5).fill(null));
  const totalSlides = 5;

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handleSlideChange = (current) => {
    setCurrentSlide(current);
  };

  const handleResponse = (slideId, buttonId) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[slideId] = buttonId;
    setSelectedButtons(newSelectedButtons);
  };

  const handleStepClick = (step) => {
    sliderRef.current.slickGoTo(step);
  };

  return (
    <div>
      <Stepper
        currentStep={currentSlide + 1}
        totalSteps={totalSlides}
        selectedButtons={selectedButtons}
        onStepClick={handleStepClick}
      />
      <DiagnosisSlider
        sliderRef={sliderRef}
        onSlideChange={handleSlideChange}
        selectedButtons={selectedButtons}
        onResponse={handleResponse}
      />
      <div className="w-full flex justify-between mt-16 md:mt-24 px-5 md:px-9">
        <SliderPrevButton onClick={handlePrevClick} />
        <SliderNextButton onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Diagnosis;

const DiagnosisSlider = ({
  sliderRef,
  onSlideChange,
  selectedButtons,
  onResponse,
}) => {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: onSlideChange,
  };
  const sliderDatas = [
    { id: 1, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 2, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 3, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 4, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 5, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
  ];

  return (
    <Slider ref={sliderRef} {...settings}>
      {sliderDatas.map((slider, index) => (
        <div
          key={slider.id}
          className="h-[25rem] md:h-[35rem] text-3xl md:text-5xl break-keep font-extrabold p-5 md:p-8 flex justify-center items-center"
        >
          <p className="text-center mb-20 md:mb-34">{slider.str}</p>
          <ResponseButtons
            selected={selectedButtons[index]}
            onResponse={(buttonId) => onResponse(index, buttonId)}
          />
        </div>
      ))}
    </Slider>
  );
};

const ResponseButtons = ({ selected, onResponse }) => {
  const buttonStyles = (id) =>
    selected === id ? "bg-[#6100C1] text-white" : "border-[#6100C1] text-black";

  return (
    <>
      <Button
        text="그렇지않다"
        className={`${buttonStyles(1)} mb-4 md:mb-10 md:h-[5rem] md:text-3xl cursor-pointer`}
        onClick={() => onResponse(1)}
      />
      <Button
        text="간혹(약간) 그렇다"
        className={`${buttonStyles(2)} mb-4 md:mb-10 md:h-[5rem] md:text-3xl cursor-pointer`}
        onClick={() => onResponse(2)}
      />
      <Button
        text="자주(많이) 그렇다"
        className={`${buttonStyles(3)} md:h-[5rem] md:text-3xl cursor-pointer`}
        onClick={() => onResponse(3)}
      />
    </>
  );
};

const SliderPrevButton = ({ onClick }) => {
  return (
    <Button
      text="이전"
      onClick={onClick}
      className="w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
    />
  );
};

const SliderNextButton = ({ onClick }) => {
  return (
    <Button
      text="다음"
      onClick={onClick}
      className="bg-[#6100C1] text-white w-[10rem] md:w-[18rem] md:h-[5rem] md:text-3xl cursor-pointer"
    />
  );
};

const Stepper = ({ currentStep, totalSteps, selectedButtons, onStepClick }) => {
  const icons = [
    <TbCircleNumber1Filled size={30} color="#1777FF" />,
    <TbCircleNumber2Filled size={30} color="#1777FF" />,
    <TbCircleNumber3Filled size={30} color="#1777FF" />,
    <TbCircleNumber4Filled size={30} color="#1777FF" />,
    <TbCircleNumber5Filled size={30} color="#1777FF" />,
  ];

  return (
    <div className="w-full flex justify-center items-center mt-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className="flex items-center cursor-pointer"
          onClick={() => onStepClick(index)}
        >
          {selectedButtons[index] ? (
            <TbCircleCheck size={30} color="#1777FF" />
          ) : (
            icons[index]
          )}
          {index < totalSteps - 1 && <div className="w-16"></div>}
        </div>
      ))}
    </div>
  );
};
