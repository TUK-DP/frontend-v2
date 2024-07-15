import React from "react";
import DiaryRecallImg from "../assets/diary/questionPeople.png";

export const DIARY_RECALL_PAGE_PATH = "/diary/recall";
const DiaryRecall = () => {
  return (
    <div
      className={
        "flex flex-col px-5  items-center gap-5 text-center py-20 font-bold"
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
    <div className={"flex flex-col gap-5"}>
      <div className={"text-4xl"}>
        일기를 회상해서
        <br />
        기억을 되살려 보세요!
      </div>
      <div className={"text-2xl text-secondary-500"}>
        일기의 빈칸을 떠올려 보세요
      </div>
    </div>
  );
};

const ExplainSection = () => {
  return (
    <div
      className={
        "font-semibold text-left flex flex-col gap-5 py-5 text-lg md:text-2xl lg:text-2xl"
      }
    >
      <div>
        각 빈칸에 적었던 단어를 입력해
        <br />
        문제를 풀어보세요
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
  return (
    <button className={"text-xl border-2 w-4/5 h-12 rounded-xl max-w-[400px]"}>
      문제 풀기
    </button>
  );
};
