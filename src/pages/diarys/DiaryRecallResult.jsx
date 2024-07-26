import { range } from "../../utils/array/range";
import AccordionWrapper from "../../components/wrapper/AccordionWrapper";
import CollectIcon from "../../assets/diaryRecall/collect_icon.png";
import FaultIcon from "../../assets/diaryRecall/fault_icon.png";
import { useState } from "react";

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
  const score = 2;
  const total = 3;

  // 서버에서 받아온 퀴즈 목록
  const questions = range(total).map((_, index) => ({
    questionId: index,
    question: "오늘 친구들과 __를 했다",
    keywordId: index,
  }));

  // 사용자가 응답한 답 목록
  const userInputs = range(total).map((_, index) => ({
    keywordId: index,
    answer: "농구",
  }));

  // 서버에서 받아온 정답 목록
  const check = {
    totalQuestionSize: total,
    score,
    answerList: userInputs.map(({ answer: userInput }) => ({
      isCorrected: false,
      userInput,
      answer: "공부",
    })),
  };

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
      <div className={"flex flex-col flex-1 justify-center gap-6"}>
        {questions.map((question, index) => (
          <AnswerBox
            check={check.answerList[index]}
            question={questions[index].question}
            key={index}
          />
        ))}
      </div>
      <button className={"block border-2 rounded-xl py-6 mb-20"}>
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
      <div className={"flex items-center justify-center"}>
        <div className={"my-8 mobile:my-4"}>{question}</div>
        <img
          className={"h-20 mobile:h-10"}
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
