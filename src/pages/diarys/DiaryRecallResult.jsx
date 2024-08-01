import AccordionWrapper from "../../components/wrapper/AccordionWrapper";
import CollectIcon from "../../assets/diaryRecall/collect_icon.png";
import FaultIcon from "../../assets/diaryRecall/fault_icon.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import useGoHome from "../../hooks/home/useGoHome";

export const DIARY_RECALL_RESULT_PAGE_PATH = "/diary/recall/result";
/**
 * @typedef {{
 *    "questionId": 573,
 *    "question": "오늘 친구들과 __를 했다",
 *    "keywordId": 573
 * }} Question
 *
 * @typedef {{
 *    keywordId : number,
 *    answer : string,
 * }} UserInput
 *
 * @typedef {{
 *   isCorrected : boolean,
 *   userInput : string,
 *   answer : string,
 * }} Check
 */

const DiaryRecallResult = () => {
  const { state } = useLocation();
  const score = state.result.score;
  const total = state.result.totalQuestionSize;

  const questions = state.question;

  const check = state.result;
  const { goHomePage } = useGoHome();

  return (
    <div
      className={
        "flex flex-col gap-10 px-24 min-h-heightWithOutHeader text-4xl font-bold mobile:px-10 mobile:text-2xl"
      }
    >
      <div className={"text-center text-8xl font-bold"}>
        <span className={"text-9xl text-green-500"}>{score}</span> /{" "}
        <span>{total}</span>
      </div>
      <div className={"flex flex-col flex-1 gap-6"}>
        {questions.map((quiz, index) => (
          <AnswerBox
            check={check.answerList[index]}
            question={quiz}
            key={index}
          />
        ))}
      </div>
      <button
        className={"block border-2 rounded-xl py-6 mb-20"}
        onClick={goHomePage}
      >
        홈으로 가기
      </button>
    </div>
  );
};

export default DiaryRecallResult;

/**
 * @param check {Check}
 * @param question {string}
 * @param userInput {UserInput}
 * @constructor
 */
const AnswerBox = ({ check, question }) => {
  const [isOpen, setIsOpen] = useState(true);

  const { isCorrected, answer, userInput } = check;

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className={`flex flex-col border-2 rounded-2xl overflow-clip ${isCorrected ? "border-[#24CA99]" : "border-[#F6517A]"}`}
    >
      <div className={"flex px-4 items-center justify-center"}>
        <div className={"my-8 mobile:my-4"}>{question}</div>
        <img
          className={"h-16 ml-auto mobile:h-10"}
          src={check.isCorrected ? CollectIcon : FaultIcon}
          alt=""
        />
      </div>
      <AccordionWrapper className={"!mb-0"} isOpen={isOpen}>
        <div
          className={`flex flex-col gap-4 p-6 border-t-2 tablet:gap-10 ${isCorrected ? "border-[#24CA99]" : "border-[#F6517A]"}`}
        >
          <div>정답 : {answer}</div>
          <div>제출 답안 : {userInput}</div>
        </div>
      </AccordionWrapper>
    </div>
  );
};
