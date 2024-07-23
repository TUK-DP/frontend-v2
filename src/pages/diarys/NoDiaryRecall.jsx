import React from "react";
import NoDiaryRecallImg from "../../assets/diary/noDiaryRecall.png";
export const NO_DIARY_RECALL_PAGE_PATH = "/diary/norecall";
const NoDiaryRecall = () => {
  return (
    <div className={"flex justify-center items-center my-auto h-full"}>
      <ContentWrapper>
        <NoRecallGuideSection />
        <img src={NoDiaryRecallImg} alt="no-diary-recall" className={"w-56"} />
        <WhyNoRecallSection />
        <GoBackToDiaryButton />
      </ContentWrapper>
    </div>
  );
};

export default NoDiaryRecall;

const ContentWrapper = ({ children }) => {
  return (
    <div
      className={
        "bg-primary-700 rounded-lg-xl flex flex-col font-bold lg:p-10 md:p-10 p-5 items-center md:w-4/6 lg:w-4/6 w-11/12  gap-5 text-center"
      }
    >
      {children}
    </div>
  );
};

const NoRecallGuideSection = () => {
  return (
    <div className={"text-3xl w-full"}>
      일기 회상에 필요한
      <br />
      키워드가 없어요..
    </div>
  );
};

const WhyNoRecallSection = () => {
  return (
    <div className={"bg-white rounded-lg-xl text-2xl w-full p-5 "}>
      <p>
        일기가 너무 짧거나
        <br />
        영어로 작성한 경우
        <br />
        키워드가 뽑히지 않습니다.
      </p>
    </div>
  );
};

const GoBackToDiaryButton = () => {
  return (
    <button
      className={"bg-primary-500 text-2xl text-white rounded-lg-xl h-14 w-full"}
    >
      일기로 돌아가기
    </button>
  );
};
