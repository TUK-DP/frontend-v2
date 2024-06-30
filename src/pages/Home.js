import React from "react";
import FeatureSlider from "../components/home/FeatureSlider";
import MainDementiaPreventionSection from "../components/home/MainDementiaPreventionSection";
import SubDementiaPreventionSection from "../components/home/SubDementiaPreventionSection";
import btn_centerMap from "../assets/home/button/btn_centerMap.png";

export const HOME_PAGE_PATH = "/";

const Home = () => {
  return (
    <>
      <FeatureSlider />
      <div className="px-5">
        <MainDementiaPreventionSection />
        <DementiaCenterButton />
        <SubDementiaPreventionSection />
      </div>
    </>
  );
}

export default Home;


//치매센터 버튼 컴포넌트
const DementiaCenterButton = () => {
  return(
    <div className="my-7 flex justify-between items-center border-2 py-5 px-3 md:px-8 rounded-xl cursor-pointer">
      <div>
        <span className="text-md sm:text-lg md:text-xl font-bold">가까운 치매센터 찾기 {'>'}</span>
        <br/>
        <span className="text-xs sm:text-sm md:text-base">주변 치매센터를 확인해보세요</span>
      </div>
      <img src={btn_centerMap}/>
    </div>
  );
};
