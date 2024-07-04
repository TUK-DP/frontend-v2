import { useEffect, useRef, useState } from "react";

export const useSwipe = (initialIndex = 0, maxIndex) => {
  const SLIDE_LIMIT = 100;
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

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

    //다음 페이지로 스와이프
    if (moveX > SLIDE_LIMIT) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
      handleTouchEnd();
    } else if (moveX < -SLIDE_LIMIT) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
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

  return { currentIndex, setCurrentIndex, sliderContainer };
};
