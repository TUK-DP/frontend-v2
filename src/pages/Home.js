import React from "react";
import FeatureSlider from "../component/FeatureSlider";
import btn_centerMap from "../assets/home/button/btn_centerMap.png";
import btn_survey from "../assets/home/button/btn_survey.png";
import btn_diary from "../assets/home/button/btn_diary.png";
import btn_gymnastics from "../assets/home/button/btn_gymnastics.png";
import btn_rockScissorsPaper from "../assets/home/button/btn_rockScissorsPaper.png";
import btn_colorMatch from "../assets/home/button/btn_colorMatch.png";

export const HOME_PAGE_PATH = "/home";

const Home = () => {
  return (
    <>
      <FeatureSlider />
      <div className="px-5">
        <div className="flex justify-between my-8">
          <MainButton adverb={"간단한"} buttonName={"치매진단"} imgsrc={btn_survey} />
          <MainButton adverb={"하루기록"} buttonName={"일기장"} imgsrc={btn_diary} />
        </div>
        <DementiaCenterButton />
        <div className="text-2xl font-bold mt-14 mb-5">치매를 예방해볼까요?</div>
        <GymnasticsButton />
        <div className=" text-md md:text-xl my-5">
          <span className="text-orange-500">미니게임</span>
          <span>을 통해 두뇌를 활성화 시키세요!</span>
        </div>
        <GameButtonList />
      </div>
    </>
  );
}

export default Home;


//메인버튼 컴포넌트
const MainButton = ({adverb, buttonName, imgsrc}) => {
  return (
    <div className="w-[48%] h-[10rem] border-2 rounded-xl bg-[#f4f4f4] relative cursor-pointer">
      <div className="absolute left-4 top-4 text-xl md:text-2xl">
        <span className="text-[#5B5B5B] font-bold">{adverb}</span>
        <br/>
        <span className="font-bold">{buttonName}</span>
      </div>
      <img src={imgsrc} className="absolute bottom-2 right-2"/>
    </div>
  )
}

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

//체조 버튼 컴포넌트 
const GymnasticsButton = () => {
  return (
    <div className="mb-6 flex justify-between items-center border-2 rounded-xl p-5 md:px-12 bg-[#f4f4f4] text-md sm:text-lg md:text-xl cursor-pointer">
      <img src={btn_gymnastics} />
      <div className="mr-8 md:mr-16">
        <span className="text-orange-500">간단한 체조</span><span>를 통해</span>
        <br/>
        <span>치매를 예방하세요 {'>'}</span>
      </div>
    </div>
  );
};

//미니게임 리스트 컴포넌트
const GameButtonList = () => {
  //게임 데이터
  const games = [
    { imgsrc: btn_rockScissorsPaper, name: "지는 가위바위보" },
    { imgsrc: btn_colorMatch, name: "컬러매치" }
  ];

  return (
    <>
      {games.map((game, index) => (
        <div key={index} className="h-[4rem] flex justify-between items-center border-2 rounded-xl px-4 mb-5 text-lg md:text-2xl cursor-pointer">
          <img src={game.imgsrc} alt={game.name} width={"50px"} />
          {game.name}
          <span className="text-blue-600 font-bold">도전 {'>'}</span>
        </div>
      ))}
    </>
  );
};

