import { useRef, useState, useCallback } from "react";
import {
  TbNumber1Small,
  TbNumber2Small,
  TbNumber3Small,
  TbNumber4Small,
  TbNumber5Small,
  TbNumber6Small,
  TbNumber7Small,
  TbNumber8Small,
  TbNumber9Small,
  TbNumber10Small,
  TbNumber11Small,
  TbNumber12Small,
  TbNumber13Small,
  TbNumber14Small,
  TbNumber15Small,
} from "react-icons/tb";

const icons = [
  TbNumber1Small,
  TbNumber2Small,
  TbNumber3Small,
  TbNumber4Small,
  TbNumber5Small,
  TbNumber6Small,
  TbNumber7Small,
  TbNumber8Small,
  TbNumber9Small,
  TbNumber10Small,
  TbNumber11Small,
  TbNumber12Small,
  TbNumber13Small,
  TbNumber14Small,
  TbNumber15Small,
];

const buttonTexts = {
  1: "그렇지않다",
  2: "간혹(약간) 그렇다",
  3: "자주(많이) 그렇다",
};

const useDiagnosisSlider = (totalSlides) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderItems, setSliderItems] = useState(
    Array.from({ length: totalSlides }, (_, index) => ({
      id: index,
      stepIcon: icons[index],
      selectedButton: null,
      response: undefined,
    }))
  );

  const handlePrevClick = useCallback(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }, []);

  const handleNextClick = useCallback(
    (whenAllResponseCallback) => {
      if (currentSlide !== totalSlides - 1) {
        if (sliderRef.current) {
          sliderRef.current.slickNext();
        }
        return;
      }

      const firstUncheckedSlide = sliderItems.findIndex(
        (item) => item.selectedButton === null
      );

      if (firstUncheckedSlide !== -1 && sliderRef.current) {
        sliderRef.current.slickGoTo(firstUncheckedSlide);
        return;
      }

      whenAllResponseCallback();
    },
    [currentSlide, sliderItems, totalSlides]
  );

  const handleSlideChange = useCallback((current) => {
    setCurrentSlide(current);
  }, []);

  const handleResponse = useCallback((slideId, buttonId) => {
    setSliderItems((prevItems) =>
      prevItems.map((item) =>
        item.id === slideId
          ? {
              ...item,
              selectedButton: buttonId,
              response: buttonTexts[buttonId],
            }
          : item
      )
    );
  }, []);

  const handleStepClick = useCallback((step) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(step);
    }
  }, []);

  return {
    sliderRef,
    currentSlide,
    selectedButtons: sliderItems.map((item) => item.selectedButton),
    responses: sliderItems.map((item) => item.response),
    handlePrevClick,
    handleNextClick,
    handleSlideChange,
    handleResponse,
    handleStepClick,
    icons,
  };
};

export default useDiagnosisSlider;
