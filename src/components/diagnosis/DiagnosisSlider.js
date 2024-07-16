import React from "react";
import Slider from "react-slick";
import Button from "../../components/Button";

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

export default DiagnosisSlider;
