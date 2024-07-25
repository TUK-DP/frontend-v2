import useFetchDiary from "../../hooks/diary/queries/useFetchDiary";
import Slider from "react-slick";
import React from "react";

const settings = {
  infinite: false,
  arrows: false,
  dots: true,
  swipe: true,
};

const DiaryKeywordImagesSlider = () => {
  let { isDiaryExist, isCanRender, diary } = useFetchDiary();

  if (!isDiaryExist || !isCanRender) {
    return null;
  }

  const keywords = diary.keywords;

  if (!keywords.some(({ imgUrl }) => imgUrl)) {
    return <NoDiaryImage />;
  }

  return (
    <Slider {...settings} className={"w-full rounded-xl overflow-clip"}>
      {keywords.map(({ keywordId, imgUrl, keyword }, index) => (
        <img
          key={keywordId}
          src={imgUrl}
          alt={keyword}
          className={`w-full bg-white aspect-square`}
        />
      ))}
    </Slider>
  );
};

export default DiaryKeywordImagesSlider;

const NoDiaryImage = () => {
  return (
    <div className={"mx-auto font-bold h-auto"}>
      <span className={"text-2xl text-end tablet:text-4xl text-nowrap"}>
        그려진 그림이 없어요.. <span className={"ml-4"}>😢</span>
      </span>
      <p className={"text-xl text-end mt-6 tablet:text-3xl cursor-pointer"}>
        그림 그리러 가기 >
      </p>
    </div>
  );
};
