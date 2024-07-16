import React from "react";
import btn_survey from "../../assets/home/button/btn_survey.png";
import btn_diary from "../../assets/home/button/btn_diary.png";
import useGoDiagnosisGuide from "../../hooks/Diagnosis/useGoDiagnosisGuide";
import useGoDiary from "../../hooks/diary/useGoDiary";

const MainDementiaPreventionSection = () => {
  let { goDiagnosisGuide } = useGoDiagnosisGuide();
  let { goDiaryPage } = useGoDiary();
  return (
    <div className="flex justify-between my-8">
      <MainFeatureButton
        adverb={"간단한"}
        buttonName={"치매진단"}
        imgsrc={btn_survey}
        onClick={goDiagnosisGuide}
      />
      <MainFeatureButton
        adverb={"하루기록"}
        buttonName={"일기장"}
        imgsrc={btn_diary}
        onClick={goDiaryPage}
      />
    </div>
  );
};

//메인기능 버튼 컴포넌트
const MainFeatureButton = ({ adverb, buttonName, imgsrc, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-[48%] h-[10rem] border-2 rounded-xl bg-[#f4f4f4] relative cursor-pointer"
    >
      <div className="absolute left-4 top-4 text-xl md:text-2xl">
        <span className="text-[#5B5B5B] font-bold">{adverb}</span>
        <br />
        <span className="font-bold">{buttonName}</span>
      </div>
      <img src={imgsrc} className="absolute bottom-2 right-2" />
    </div>
  );
};

export default MainDementiaPreventionSection;
