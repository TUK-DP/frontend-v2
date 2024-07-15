import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css";
import Button from "../../components/Button";

export const DIAGNOSIS_PAGE_PATH = "/diagnosis";

const Diagnosis = () => {
  const sliderRef = useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div>
      <DiagnosisSlider sliderRef={sliderRef} />
      <div className="w-full flex justify-between mt-16 px-5 ">
        <SliderPrevButton onClick={handlePrevClick} />
        <SliderNextButton onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default Diagnosis;

const DiagnosisSlider = ({ sliderRef }) => {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderDatas = [
    { id: 1, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 2, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 3, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 4, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
    { id: 5, str: "과거에 쓰던 기구의 사용이 서툴러졌다." },
  ];

  // 슬라이드마다 선택된 버튼의 상태를 관리하는 배열
  const [selectedButtons, setSelectedButtons] = useState(
    Array(sliderDatas.length).fill(null)
  );

  const handleResponse = (slideId, buttonId) => {
    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[slideId] = buttonId;
    setSelectedButtons(newSelectedButtons);
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {sliderDatas.map((slider, index) => (
        <div
          key={slider.id}
          className="h-[25rem] text-3xl break-keep font-extrabold p-5 flex justify-center items-center"
        >
          <div>
            <p className="text-center mb-20">{slider.str}</p>
            <ResponseButtons
              selected={selectedButtons[index]}
              onResponse={(buttonId) => handleResponse(index, buttonId)}
            />
          </div>
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
        className={`${buttonStyles(1)} mb-4`}
        onClick={() => onResponse(1)}
      />
      <Button
        text="간혹(약간) 그렇다"
        className={`${buttonStyles(2)} mb-4`}
        onClick={() => onResponse(2)}
      />
      <Button
        text="자주(많이) 그렇다"
        className={`${buttonStyles(3)}`}
        onClick={() => onResponse(3)}
      />
    </>
  );
};

const SliderPrevButton = ({ onClick }) => {
  return <Button text="이전" onClick={onClick} className={"w-[10rem]"} />;
};

const SliderNextButton = ({ onClick }) => {
  return (
    <Button
      text="다음"
      onClick={onClick}
      className={"bg-[#6100C1] text-white w-[10rem]"}
    />
  );
};
