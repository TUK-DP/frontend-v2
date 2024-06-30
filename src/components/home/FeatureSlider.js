import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/sliderStyles.css";
import slider_diary from "../../assets/home/slider/slider_diary.png";
import slider_game from "../../assets/home/slider/slider_game.png";
import slider_gymnastics from "../../assets/home/slider/slider_gymnastics.png";
import slider_dementiacenter from "../../assets/home/slider/slider_dementiacenter.png";
import slider_survey from "../../assets/home/slider/slider_survey.png";

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
    { imgsrc: slider_diary, sentence1: "일기를 회상하고", sentence2: "나만의 그림을 그려보세요!", color:"bg-[#6100C1]" },
    { imgsrc: slider_dementiacenter, sentence1: "치매센터가 어디있나요?", sentence2: "가까운 치매센터 찾기", color:"bg-[#356DD9]" },
    { imgsrc: slider_gymnastics, sentence1: "간단하게 따라할 수 있는", sentence2: "체조들을 만나보세요!", color:"bg-[#FF7D7D]" },
    { imgsrc: slider_survey, sentence1: "간단한 치매 진단과", sentence2: "이전 결과들을 확인하세요!", color:"bg-[#FF9B52]" },
    { imgsrc: slider_game, sentence1: "간단한 게임들을 통해", sentence2: "인지력을 강화시켜보세요!", color:"bg-[#FFE68F]" },
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
          />
        ))}
      </Slider>
  );
};

export default FeatureSlider;

// SliderItem 컴포넌트
const SliderItem = ({color, sentence1, sentence2, imgsrc}) => {
  return ( 
    <div className={`relative h-64 ${color}`}>
      <div className={`absolute top-6 sm:top-8 md:top-12 left-6 sm:left-8 md:left-12 text-2xl md:text-3xl font-bold ${color === 'bg-[#FFE68F]' ? 'text-black' : 'text-white'}`}>
        {sentence1}
        <br/>
        {sentence2}
      </div>
      <img src={imgsrc} className="absolute right-5 md:right-8 bottom-5 md:bottom-8"/>
    </div>
  );
};