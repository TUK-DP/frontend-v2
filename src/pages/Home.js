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
import centerMap from "../assets/home/button/centerMap.png";

export const HOME_PAGE_PATH = "/home";

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <Btn_center />
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
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Btn_center = () => {
  return(
    <div className="w-[90%] mx-auto my-7 flex justify-between items-center border-2 p-4 rounded-xl">
      <div>
        <span className="text-xl font-bold">가까운 치매센터 찾기 {'>'}</span>
        <br/>
        <span className="text-base">주변 치매센터를 확인해보세요</span>
      </div>
      <img src={centerMap}/>
    </div>
  );
};