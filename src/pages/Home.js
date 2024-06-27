import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/sliderStyles.css";
import diaryImg from "../assets/home/slider/diary.png";
import gameImg from "../assets/home/slider/game.png";
import gymnasticsImg from "../assets/home/slider/gymnastics.png";
import centerImg from "../assets/home/slider/center.png";
import surveyImg from "../assets/home/slider/survey.png";
import btn_centerMap from "../assets/home/button/btn_centerMap.png";
import btn_survey from "../assets/home/button/btn_survey.png";
import btn_diary from "../assets/home/button/btn_diary.png";
import btn_gymnastics from "../assets/home/button/btn_gymnastics.png";
import btn_rockScissorsPaper from "../assets/home/button/btn_rockScissorsPaper.png";
import btn_colorMatch from "../assets/home/button/btn_colorMatch.png";

export const HOME_PAGE_PATH = "/home";

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <div className="px-5">
        <div className="flex justify-between my-8">
          <MainButton adverb={"간단한"} buttonName={"치매진단"} imgsrc={btn_survey} />
          <MainButton adverb={"하루기록"} buttonName={"일기장"} imgsrc={btn_diary} />
        </div>
        <DementiaCenterButton />
        <div className="text-2xl font-bold mt-14 mb-5">치매를 예방해볼까요?</div>
        <GymnasticsButton />
        <div className="text-lg my-5">
          <span className="text-orange-500">미니게임</span>
          <span>을 통해 두뇌를 활성화 시키세요!</span>
        </div>
        <GameButtonList />
      </div>
    </div>
  );
}

export default Home;

//슬라이더 컴포넌트
const SimpleSlider = () => {
  //슬라이더 설정
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //이미지 데이터
  const images = [
    diaryImg, 
    gameImg, 
    gymnasticsImg, 
    centerImg, 
    surveyImg
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};


//메인버튼 컴포넌트
const MainButton = ({adverb, buttonName, imgsrc}) => {
  return (
    <div className="w-[48%] h-[10rem] border-2 rounded-xl bg-[#f4f4f4] relative">
      <div className="absolute left-4 top-4">
        <span className="text-[#5B5B5B] text-xl font-bold">{adverb}</span>
        <br/>
        <span className="text-xl font-bold">{buttonName}</span>
      </div>
      <img src={imgsrc} className="absolute bottom-2 right-2"/>
    </div>
  )
}

//치매센터 버튼 컴포넌트
const DementiaCenterButton = () => {
  return(
    <div className="my-7 flex justify-between items-center border-2 p-5 rounded-xl">
      <div>
        <span className="text-xl font-bold">가까운 치매센터 찾기 {'>'}</span>
        <br/>
        <span className="text-base">주변 치매센터를 확인해보세요</span>
      </div>
      <img src={btn_centerMap}/>
    </div>
  );
};

//체조 버튼 컴포넌트 
const GymnasticsButton = () => {
  return (
    <div className="mb-6 flex justify-between border-2 rounded-xl p-5 bg-[#f4f4f4] text-xl">
      <img src={btn_gymnastics} />
      <div className="mr-8">
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
    <div>
      {games.map((game, index) => (
        <div key={index} className="h-[4rem] flex justify-between items-center border-2 rounded-xl px-4 mb-5 text-lg">
          <img src={game.imgsrc} alt={game.name} width={"50px"} />
          {game.name}
          <span className="text-blue-600 font-bold">도전 {'>'}</span>
        </div>
      ))}
    </div>
  );
};

