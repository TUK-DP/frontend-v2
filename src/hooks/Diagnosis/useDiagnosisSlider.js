import { useRef, useState, useCallback } from "react";

const useDiagnosisSlider = (totalSlides) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedButtons, setSelectedButtons] = useState(
    Array(totalSlides).fill(null)
  );

  const handlePrevClick = useCallback(() => {
    sliderRef.current.slickPrev();
  }, []);

  const handleNextClick = useCallback(() => {
    if (currentSlide !== totalSlides - 1) {
      sliderRef.current.slickNext();
      return;
    }

    const firstUncheckedSlide = selectedButtons.findIndex(
      (button) => button === null
    );

    if (firstUncheckedSlide !== -1) {
      sliderRef.current.slickGoTo(firstUncheckedSlide);
    }
  }, [currentSlide, selectedButtons, totalSlides]);

  const handleSlideChange = useCallback((current) => {
    setCurrentSlide(current);
  }, []);

  const handleResponse = useCallback(
    (slideId, buttonId) => {
      const newSelectedButtons = [...selectedButtons];
      newSelectedButtons[slideId] = buttonId;
      setSelectedButtons(newSelectedButtons);
    },
    [selectedButtons]
  );

  const handleStepClick = useCallback((step) => {
    sliderRef.current.slickGoTo(step);
  }, []);

  return {
    sliderRef,
    currentSlide,
    selectedButtons,
    handlePrevClick,
    handleNextClick,
    handleSlideChange,
    handleResponse,
    handleStepClick,
  };
};

export default useDiagnosisSlider;
