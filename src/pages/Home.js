import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/sliderStyles.css";
import slider_diary from "../assets/home/slider/slider_diary.png";
import slider_game from "../assets/home/slider/slider_game.png";
import slider_gymnastics from "../assets/home/slider/slider_gymnastics.png";
import slider_dementiacenter from "../assets/home/slider/slider_dementiacenter.png";
import slider_survey from "../assets/home/slider/slider_survey.png";
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
        <div className=" text-md md:text-xl my-5">
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
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //이미지 데이터
  const images = [
    { imgsrc: slider_diary, sentence1: "일기를 회상하고", sentence2: "나만의 그림을 그려보세요!", color:"bg-[#6100C1]" },
    { imgsrc: slider_dementiacenter, sentence1: "치매센터가 어디있나요?", sentence2: "가까운 치매센터 찾기", color:"bg-[#356DD9]" },
    { imgsrc: slider_gymnastics, sentence1: "간단하게 따라할 수 있는", sentence2: "체조들을 만나보세요!", color:"bg-[#FF7D7D]" },
    { imgsrc: slider_survey, sentence1: "간단한 치매 진단과", sentence2: "이전 결과들을 확인하세요!", color:"bg-[#FF9B52]" },
    { imgsrc: slider_game, sentence1: "간단한 게임들을 통해", sentence2: "인지력을 강화시켜보세요!", color:"bg-[#FFE68F]" },
  ];

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={`relative h-64 ${image.color}`}>
            <div className={`absolute top-6 sm:top-8 md:top-12 left-6 sm:left-8 md:left-12 text-2xl md:text-3xl font-bold ${index === 4 ? 'text-black' : 'text-white'}`} >
              {image.sentence1}
              <br/>
              {image.sentence2}
            </div>
            <img src={image.imgsrc} className="absolute right-5 md:right-8 bottom-5 md:bottom-8"/>
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
    <div className="my-7 flex justify-between items-center border-2 py-5 px-3 md:px-8 rounded-xl">
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
    <div className="mb-6 flex justify-between items-center border-2 rounded-xl p-5 md:px-12 bg-[#f4f4f4] text-md sm:text-lg md:text-xl">
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
    <div>
      {games.map((game, index) => (
        <div key={index} className="h-[4rem] flex justify-between items-center border-2 rounded-xl px-4 mb-5 text-lg md:text-2xl">
          <img src={game.imgsrc} alt={game.name} width={"50px"} />
          {game.name}
          <span className="text-blue-600 font-bold">도전 {'>'}</span>
        </div>
      ))}
    </div>
  );
};

