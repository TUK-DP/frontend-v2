import {
  TbNumber10Small,
  TbNumber11Small,
  TbNumber12Small,
  TbNumber13Small,
  TbNumber14Small,
  TbNumber15Small,
  TbNumber1Small,
  TbNumber2Small,
  TbNumber3Small,
  TbNumber4Small,
  TbNumber5Small,
  TbNumber6Small,
  TbNumber7Small,
  TbNumber8Small,
  TbNumber9Small,
} from "react-icons/tb";
import { useEffect, useRef, useState } from "react";
import useGetDiagnosisQuiz from "../../hooks/Diagnosis/queries/useGetDiagnosisQuiz";
import diagnosisController from "../../apis/diagnosis.controller";
import { useNavigate } from "react-router-dom";
import { DIAGNOSIS_RESULT_PAGE_PATH } from "../../pages/dementiaDiagnosis/DiagnosisResult";
import useRequireAuth from "../auth/useRequireAuth";
export const STEP_BAR_ICONS = [
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

export const BUTTON_TEXTS = [
  "그렇지않다",
  "간혹(약간) 그렇다",
  "자주(많이) 그렇다",
];

/**
 * @typedef {{
 *   id: number;
 *   question: string;
 *   stepIcon: React.ComponentType;
 *   selectedButtonId: number | null;
 *   }} SliderItem
 * }}
 */

/**
 * @return {{
 * handlePrevClick: () => void,
 * sliderRef: React.MutableRefObject<null>,
 * sliderItems: SliderItem[],
 * setCurrentSlide: React.Dispatch<React.SetStateAction<SliderItem>>,
 * handleStepClick: () => void,
 * currentSlide: SliderItem,
 * handleNextClick: (whenAllResponseCallback : () => void ) => void,
 * handleResponse: (slideId : number, buttonId : number) => void,
 * }}
 */
const useDiagnosisSlider = () => {
  const sliderRef = useRef(null);
  const { diagnosisQuiz } = useGetDiagnosisQuiz();
  const navigate = useNavigate();
  const { userId } = useRequireAuth();

  const [sliderItems, setSliderItems] = useState(
    diagnosisQuiz.map((diagQuiz, index) => ({
      id: index,
      question: diagQuiz.question,
      stepIcon: STEP_BAR_ICONS[index],
      selectedButtonId: -1,
    }))
  );

  const [currentSlide, setCurrentSlide] = useState(sliderItems[0]);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = async () => {
    // 마지막 슬라이드가 아닐 경우 다음 슬라이드로 이동
    if (currentSlide.id !== sliderItems.at(-1).id) {
      sliderRef.current.slickNext();
      return;
    }

    // 마지막 슬라이드일 경우 응답하지 않은 질문이 있는지 확인
    const firstUncheckedSlideIndex = sliderItems.findIndex(
      ({ selectedButtonId }) => selectedButtonId === null
    );

    // 응답 안한 질문이 있을 경우 해당 질문으로 이동
    if (firstUncheckedSlideIndex !== -1) {
      sliderRef.current.slickGoTo(firstUncheckedSlideIndex);
      return;
    }

    // 모든 질문에 응답했을 경우 콜백 실행
    const res = await diagnosisController.saveDiagnosisResult({
      userId: userId,
      diagAnswer: sliderItems.map((item) => item.selectedButtonId),
    });
    if (res.data.isSuccess)
      navigate(DIAGNOSIS_RESULT_PAGE_PATH, { state: res.data.result });
  };

  const handleResponse = (slideId, buttonId) => {
    setSliderItems(
      sliderItems.map((item) => ({
        ...item,
        selectedButtonId:
          item.id === slideId ? buttonId : item.selectedButtonId,
      }))
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

export default useDiagnosisSlider;
