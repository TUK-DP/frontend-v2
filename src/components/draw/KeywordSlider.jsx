import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import useFetchKeywords from "../../hooks/canvas/useFetchKeywords";

const KeywordSlider = ({
  setKeywordSlider,
  canvasSlider,
  setCurrentKeyword,
}) => {
  const keywordSliderRef = useRef(null);
  const { keywords } = useFetchKeywords();

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: false, // 기본 화살표 비활성화
    afterChange: (index) => setCurrentKeyword(keywords[index].keyword), // 슬라이드 변경 시 현재 키워드 업데이트
  };

  useEffect(() => {
    setKeywordSlider(keywordSliderRef);
    setCurrentKeyword(keywords[0].keyword);
  }, [setKeywordSlider, setCurrentKeyword]);

  return (
    <div className="relative px-16">
      {/* 좌우 패딩을 추가하여 슬라이더 범위를 조정 */}
      <Slider
        {...settings}
        asNavFor={canvasSlider}
        ref={keywordSliderRef}
        className="w-full mobile:py-4 py-10"
      >
        {keywords.map(({ keyword, keywordId }) => (
          <div
            key={keywordId}
            className="text-center mobile:text-3xl text-5xl break-keep"
          >
            {keyword}
          </div>
        ))}
      </Slider>
      <NextArrow onClick={() => keywordSliderRef.current.slickNext()} />
      <PrevArrow onClick={() => keywordSliderRef.current.slickPrev()} />
    </div>
  );
};

const NextArrow = ({ onClick }) => (
  <div className="absolute top-1/2 transform -translate-y-1/2 right-4 z-10">
    <FaLongArrowAltRight
      onClick={onClick}
      className="mobile:text-4xl text-6xl cursor-pointer"
    />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="absolute top-1/2 transform -translate-y-1/2 left-4 z-10">
    <FaLongArrowAltLeft
      onClick={onClick}
      className="mobile:text-4xl text-6xl cursor-pointer"
    />
  </div>
);

export default KeywordSlider;
