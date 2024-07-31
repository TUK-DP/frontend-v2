import { useRef, useState } from "react";
import {
  TbNumber1Small,
  TbNumber2Small,
  TbNumber3Small,
  TbNumber4Small,
  TbNumber5Small,
} from "react-icons/tb";

const RECALL_TEST_DATA = [
  "나는 오늘 __에 갔다.",
  "나는 오늘 __에 갔다.",
  "나는 오늘 __에 갔다.",
  "나는 오늘 __에 갔다.",
  "나는 오늘 __에 갔다.",
];

export const STEP_BAR_ICONS = [
  TbNumber1Small,
  TbNumber2Small,
  TbNumber3Small,
  TbNumber4Small,
  TbNumber5Small,
];

/**
 * @typedef {{
 *   id: number;
 *   question: string;
 *   stepIcon: React.ComponentType;
 *   inputValue: string;
 * }} SliderItem
 *
 * @returns {{
 *   handlePrevClick: () => void,
 *   sliderRef: React.MutableRefObject<null>,
 *   sliderItems: SliderItem[],
 *   setCurrentSlide: React.Dispatch<React.SetStateAction<SliderItem>>,
 *   handleStepClick: () => void,
 *   currentSlide: SliderItem,
 *   handleNextClick: (whenAllResponseCallback: () => void) => void,
 *   handleResponse: (slideId: number, inputValue: string) => void,
 * }}
 */
const useRecallTestSlider = () => {
  const sliderRef = useRef(null);

  const [sliderItems, setSliderItems] = useState(
    RECALL_TEST_DATA.map((question, index) => ({
      id: index,
      question,
      stepIcon: STEP_BAR_ICONS[index],
      inputValue: "",
    }))
  );

  const [currentSlide, setCurrentSlide] = useState(sliderItems[0]);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = (whenAllResponseCallback) => {
    if (currentSlide.id !== sliderItems.at(-1).id) {
      sliderRef.current.slickNext();
      return;
    }

    const firstUncheckedSlideIndex = sliderItems.findIndex(
      ({ inputValue }) => inputValue === ""
    );

    if (firstUncheckedSlideIndex !== -1) {
      sliderRef.current.slickGoTo(firstUncheckedSlideIndex);
      return;
    }

    whenAllResponseCallback();
  };

  const handleResponse = (slideId, inputValue) => {
    setSliderItems(
      sliderItems.map((item) =>
        item.id === slideId ? { ...item, inputValue } : item
      )
    );
  };

  const handleStepClick = (stepIndex) => {
    sliderRef.current.slickGoTo(stepIndex);
  };

  return {
    sliderRef,
    sliderItems,
    currentSlide,
    setCurrentSlide,
    handlePrevClick,
    handleNextClick,
    handleResponse,
    handleStepClick,
  };
};

export default useRecallTestSlider;
