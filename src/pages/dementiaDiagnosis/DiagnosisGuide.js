import React from "react";
import Button from "../../components/Button";

export const DIAGNOSIS_GUIDE_PAGE_PATH = "/diagnosisguide";

const DiagnosisGuide = () => {
  return (
    <div className="flex flex-col">
      <DiagnosisIntro />
      <Diagnosisform />
      <div className="text-[#FF3C3C] mt-16 md:mt-20 mb-2 md:mb-4 px-4 md:px-7 md:text-2xl break-keep">
        정확한 진단이 필요하다면 전문의의 도움을 받으세요
      </div>
      <Button text="진단시작" className={"mx-4 md:mx-7 md:h-16 md:text-3xl"} />
    </div>
  );
};

export default DiagnosisGuide;

const DiagnosisIntro = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center font-bold mt-32 md:mt-[15rem]">
      <div className="text-3xl md:text-5xl">치매가 걱정되시나요?</div>
      <div className="text-[#686868] text-xl md:text-3xl mt-6 md:mt-9 mb-8 md:mb-11">
        치매 진단 검사를 받아보세요
      </div>
    </div>
  );
};

const Diagnosisform = () => {
  return (
    <div className="bg-[#FFECEC] rounded-xl flex flex-col justify-center items-center font-bold py-6 md:py-12 px-4 md:px-7 mx-4 md:mx-9">
      <p className="text-2xl md:text-4xl mb-5 md:mb-8">총 15문항</p>
      <p className="text-lg md:text-3xl text-[#686868] mb-5 md:mb-8">
        예상 소요 시간: 10 분
      </p>
      <div className="bg-white p-3 md:p-6 rounded-xl font-semibold md:text-2xl break-keep">
        <p className="mb-3">
          각 항목에 대하여, 1년 전과 비교하여 현재 상태에 해당하는 곳에 표시해
          주십시오.
        </p>
        <p>보호자가 있으면 보호자가 작성하시고, 없으면 본인이 작성하십시오.</p>
      </div>
    </div>
  );
};
