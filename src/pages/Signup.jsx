import React, { useEffect, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import SignupStep from "../components/signup/SignupStep";
import InputStep1 from "../components/signup/InputStep1";
import InputStep2 from "../components/signup/InputStep2";
import { useSwipe } from "../hooks/useSwipe"; // 훅을 임포트 합니다.

export const SIGNUP_PAGE_PATH = "/signup";
const MAX_INDEX = 1;

const Signup = () => {
  const { currentIndex, setCurrentIndex, sliderContainer } = useSwipe(
    0,
    MAX_INDEX
  );
  const handleClickNextStep = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, MAX_INDEX)); // 최대 값을 넘지 않도록 설정
  };
  const [dynamicHeight, setDynamicHeight] = useState(0);

  useEffect(() => {
    setDynamicHeight(window.innerHeight - 142);
  }, []);
  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-x-hidden">
      <HeaderBar />
      <SignupStep step={currentIndex + 1} />
      <div
        className={`h-[${dynamicHeight}px] flex flex-row w-full transition-transform duration-500 ease flex-shrink-0`}
        style={{ transform: `translateX(${currentIndex * -100}%)` }}
        ref={sliderContainer}
      >
        <InputStep1 handleClickNextStep={handleClickNextStep} />
        <InputStep2 />
      </div>
    </div>
  );
};

export default Signup;
