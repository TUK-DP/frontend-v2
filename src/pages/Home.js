import React, { useState } from "react";
import Slider from "react-slick";
import diaryImg from "../assets/home/diary.png";
import gameImg from "../assets/home/game.png";
import gymnasticsImg from "../assets/home/gymnastics.png";
import centerImg from "../assets/home/center.png";
import surveyImg from "../assets/home/survey.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/sliderStyles.css";

export const HOME_PAGE_PATH = "/home";

const Home = () => {
  return (
    <div>
      <SimpleSlider />
    </div>
  );
}

export default Home;

const SimpleSlider = () => {
  const images = [diaryImg, gameImg, gymnasticsImg, centerImg, surveyImg];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
