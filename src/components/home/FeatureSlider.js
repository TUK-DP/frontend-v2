import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css";
import slider_diary from "../../assets/home/slider/slider_diary.png";
import slider_game from "../../assets/home/slider/slider_game.png";
import slider_gymnastics from "../../assets/home/slider/slider_gymnastics.png";
import slider_dementiacenter from "../../assets/home/slider/slider_dementiacenter.png";
import slider_survey from "../../assets/home/slider/slider_survey.png";
import { DIARY_PAGE_PATH } from "../../pages/diarys/Diary";
import { DEMENTIA_CENTER_PAGE_PATH } from "../../pages/dementiaCenter/DementiaCenter";
import { GYM_PAGE_PATH } from "../../pages/gym/Gym";
import { DIAGNOSIS_GUIDE_PAGE_PATH } from "../../pages/dementiaDiagnosis/DiagnosisGuide";
import { SELECT_GAMES_PAGE_PATH } from "../../pages/games/SelectGames";

// 슬라이더 컴포넌트
const FeatureSlider = () => {
  // 슬라이더 설정
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // 슬라이더 데이터
  const sliderDatas = [
    {
      imgsrc: slider_diary,
      sentence1: "일기를 회상하고",
      sentence2: "나만의 그림을 그려보세요!",
      color: "bg-sliderBgDiary",
      url: DIARY_PAGE_PATH,
    },
    {
      imgsrc: slider_dementiacenter,
      sentence1: "치매센터가 어디있나요?",
      sentence2: "가까운 치매센터 찾기",
      color: "bg-sliderBgCenter",
      url: DEMENTIA_CENTER_PAGE_PATH,
    },
    {
      imgsrc: slider_gymnastics,
      sentence1: "간단하게 따라할 수 있는",
      sentence2: "체조들을 만나보세요!",
      color: "bg-sliderBgExercise",
      url: GYM_PAGE_PATH,
    },
    {
      imgsrc: slider_survey,
      sentence1: "간단한 치매 진단과",
      sentence2: "이전 결과들을 확인하세요!",
      color: "bg-sliderBgResult",
      url: DIAGNOSIS_GUIDE_PAGE_PATH,
    },
    {
      imgsrc: slider_game,
      sentence1: "간단한 게임들을 통해",
      sentence2: "인지력을 강화시켜보세요!",
      color: "bg-sliderBgGame",
      url: SELECT_GAMES_PAGE_PATH,
    },
  ];

  return (
    <Slider {...settings}>
      {sliderDatas.map((slider, index) => (
        <SliderItem
          key={index}
          color={slider.color}
          sentence1={slider.sentence1}
          sentence2={slider.sentence2}
          imgsrc={slider.imgsrc}
          url={slider.url}
        />
      ))}
    </Slider>
  );
};

export default FeatureSlider;

// SliderItem 컴포넌트
const SliderItem = ({ color, sentence1, sentence2, imgsrc, url }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(url);
  };

  return (
    <div
      className={`relative h-64 ${color} cursor-pointer`}
      onClick={handleClick}
    >
      <div
        className={`absolute top-6 sm:top-8 md:top-12 left-6 sm:left-8 md:left-12 text-2xl md:text-3xl font-bold ${color === "bg-sliderBgGame" ? "text-black" : "text-white"}`}
      >
        {sentence1}
        <br />
        {sentence2}
      </div>
      <img
        src={imgsrc}
        className="absolute right-5 md:right-8 bottom-5 md:bottom-8"
      />
    </div>
  );
};
