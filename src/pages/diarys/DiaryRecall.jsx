import React from "react";
import { useNavigate } from "react-router-dom";
import DiaryRecallImg from "../../assets/diary/questionPeople.png";
import { DIARY_RECALL_TEST_PAGE_PATH } from "./DiaryRecallTest";
import useFetchDiaryRecallQuiz from "../../hooks/diary/queries/useFetchRecallQuiz";

export const DIARY_RECALL_PAGE_PATH = "/diary/recall";
const DiaryRecall = () => {
  return (
    <div
      className={
        "flex flex-col font-bold justify-start items-center gap-5 h-auto tablet:gap-12"
      }
    >
      <GuideSection />
      <img src={DiaryRecallImg} alt="diary-recall" />
      <ExplainSection />
      <GoRecallTestButton />
    </div>
  );
};

export default DiaryRecall;

const GuideSection = () => {
  return (
    <div className={"flex flex-col gap-5 text-center"}>
      <div className={"text-4xl tablet:text-6xl"}>
        일기를 회상해서
        <br />
        기억을 되살려 보세요!
      </div>
      <div className={"text-2xl text-secondary-500 tablet:text-4xl"}>
        일기의 빈칸을 떠올려 보세요
      </div>
    </div>
  );
};

const ExplainSection = () => {
  return (
    <div
      className={
        "font-semibold text-left flex flex-col gap-5 py-5 text-lg tablet:text-3xl"
      }
    >
      <div>
        기억을 떠올려
        <br />
        빈칸에 알맞은 단어를 입력하세요
      </div>
      <div>
        해당 키워드는 TextRank 알고리즘을
        <br />
        이용해 추출한 키워드입니다.
      </div>
      <p className={"text-secondary-700"}>
        영어로 된 키워드는 현재 뽑히지 않습니다.
      </p>
    </div>
  );
};

const GoRecallTestButton = () => {
  const navigate = useNavigate();
  //196 -> diaryId로 바꿔야함
  const { isFetching } = useFetchDiaryRecallQuiz(196);

  const onClick = () => {
    if (isFetching) return;
    navigate(DIARY_RECALL_TEST_PAGE_PATH);
  };

  return (
    <button
      onClick={onClick}
      className={
        "text-xl border-2 tablet:border-4 tablet:h-20 w-4/5 h-12 rounded-xl shrink-0 mb-10 tablet:text-4xl"
      }
    >
      문제 풀기
    </button>
  );
};
