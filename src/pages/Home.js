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
import btn_survey from "../assets/home/button/btn_survey.png";
import btn_diary from "../assets/home/button/btn_diary.png";
import btn_gym from "../assets/home/button/btn_gym.png";

export const HOME_PAGE_PATH = "/home";

const Home = () => {
  return (
    <div>
      <SimpleSlider />
      <Btn_survey_diary />
      <Btn_center />
      <div className="w-[90%] mx-auto text-xl font-bold mt-14 mb-5">치매를 예방해볼까요?</div>
      <Btn_gym />
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

//치매진단, 일기장 버튼 컴포넌트 
const Btn_survey_diary = () => {
  return(
    <div className="flex w-[90%] mx-auto justify-between my-8">
      <Btn str1={"간단한"} str2={"치매진단"} imgsrc={btn_survey} />
      <Btn str1={"하루기록"} str2={"일기장"} imgsrc={btn_diary} />
    </div>
  );
};

//버튼 컴포넌트
const Btn = ({str1, str2, imgsrc}) => {
  return (
    <div className="w-[48%] h-[10rem] border-2 rounded-xl bg-[#f4f4f4] relative">
      <div className="absolute left-4 top-4">
        <span className="text-[#5B5B5B] text-xl font-bold">{str1}</span>
        <br/>
        <span className="text-xl font-bold">{str2}</span>
      </div>
      <img src={imgsrc} className="absolute bottom-2 right-2"/>
    </div>
  )
}

//센터 버튼 컴포넌트
const Btn_center = () => {
  return(
    <div className="w-[90%] mx-auto my-7 flex justify-between items-center border-2 p-5 rounded-xl">
      <div>
        <span className="text-xl font-bold">가까운 치매센터 찾기 {'>'}</span>
        <br/>
        <span className="text-base">주변 치매센터를 확인해보세요</span>
      </div>
      <img src={centerMap}/>
    </div>
  );
};

//체조 버튼 컴포넌트 
const Btn_gym = () => {
  return (
    <div className="w-[90%] mx-auto mb-6 flex justify-between border-2 rounded-xl p-5 bg-[#f4f4f4] text-xl">
      <img src={btn_gym} />
      <div className="mr-8">
        <span className="text-orange-500">간단한 체조</span><span>를 통해</span>
        <br/>
        <span>치매를 예방하세요 {'>'}</span>
      </div>
    </div>
  );
};