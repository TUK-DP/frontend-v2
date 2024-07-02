import React, { useEffect, useRef, useState } from "react";
import HeaderBar from "../components/HeaderBar";
import SignupStep from "../components/signup/SignupStep";
import InputStep1 from "../components/signup/InputStep1";
import InputStep2 from "../components/signup/InputStep2";

export const SIGNUP_PAGE_PATH = "/signup";

const Signup = () => {
  const SLIDE_LIMIT = 100;
  const [step, setStep] = useState(1);

  const handleClickNextStep = () => {
    setStep(step + 1);
  };

  const sliderContainer = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (event) => {
    startX.current = event.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (event) => {
    if (!isDragging.current) return;
    const touchX = event.touches[0].clientX;
    const moveX = startX.current - touchX;

    if (moveX > SLIDE_LIMIT) {
      setStep(2);
      handleTouchEnd();
    } else if (moveX < -SLIDE_LIMIT) {
      setStep(1);
      handleTouchEnd();
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const slider = sliderContainer.current;
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between">
      <HeaderBar />
      <SignupStep step={step} />
      <div className="overflow-hidden w-full">
        <div
          className="flex flex-row w-full h-full transition-transform duration-500 ease"
          style={{ transform: `translateX(${(step - 1) * -100}%)` }}
          ref={sliderContainer}
        >
          <InputStep1 handleClickNextStep={handleClickNextStep} />
          <InputStep2 />
        </div>
      </div>
    </div>
  );
};

export default Signup;
