import { useRef, useState } from "react";
import {
  TbNumber1Small,
  TbNumber2Small,
  TbNumber3Small,
  TbNumber4Small,
  TbNumber5Small,
} from "react-icons/tb";
import useFetchDiaryRecallQuiz from "./queries/useFetchRecallQuiz";
import DiaryRecallController from "../../apis/diary.recall.controller";
import { useNavigate } from "react-router-dom";
import { DIARY_RECALL_RESULT_PAGE_PATH } from "../../pages/diarys/DiaryRecallResult";

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
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  // 196 -> diaryId로 바꿔야함
  const { quizData } = useFetchDiaryRecallQuiz(196);

  const [sliderItems, setSliderItems] = useState(
    quizData.map((quiz, index) => ({
      id: index,
      question: quiz.question,
      keywordId: quiz.keywordId,
      stepIcon: STEP_BAR_ICONS[index],
      inputValue: "",
    }))
  );

  const [currentSlide, setCurrentSlide] = useState(sliderItems[0]);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = async () => {
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

    if (currentSlide.id === sliderItems.at(-1).id) {
      // 모든 퀴즈에 답변 입력함
      const res = await DiaryRecallController.checkAnswer({
        answers: sliderItems.map(({ keywordId, inputValue }) => ({
          keywordId,
          answer: inputValue,
        })),
      });
      if (res.data.isSuccess) {
        navigate(DIARY_RECALL_RESULT_PAGE_PATH, {
          state: {
            result: res.data.result[0],
            question: sliderItems.map((item) => item.question),
          },
        });
      }
    }
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
