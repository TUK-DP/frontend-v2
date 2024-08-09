import useFetchDiary from "../../hooks/diary/queries/useFetchDiary";
import Slider from "react-slick";
import React from "react";
import useCreateDiary from "../../hooks/diaryDetail/queries/useCreateDiary";
import useUpdateDiary from "../../hooks/diaryDetail/queries/useUpdateDiary";
import useGoDiaryDraw from "../../hooks/canvas/useGoDiaryDraw";

const settings = {
  infinite: false,
  arrows: false,
  dots: true,
  swipe: true,
};

const DiaryKeywordImagesSlider = () => {
  let { isDiaryExist, isCanRender, diary } = useFetchDiary();
  // console.log(isMutating);
  const create = useCreateDiary();
  const update = useUpdateDiary();
  let isMutating = create.isMutating || update.isMutating;

  if (!isDiaryExist || !isCanRender || isMutating) {
    return null;
  }

  const { keywords, imgUrl: diaryImg } = diary;

  if (!keywords.some(({ imgUrl }) => imgUrl) && !diaryImg) {
    return <NoDiaryImage />;
  }

  return (
    <Slider {...settings} className={"w-full rounded-xl overflow-clip"}>
      {keywords &&
        keywords.map(({ keywordId, imgUrl, keyword }, index) => (
          <img
            key={keywordId}
            src={imgUrl}
            alt={keyword}
            className={`w-full bg-white aspect-square`}
          />
        ))}
      {diaryImg && (
        <img
          src={diaryImg}
          alt="일기 이미지"
          className={`w-full bg-white aspect-square`}
        />
      )}
    </Slider>
  );
};

export default DiaryKeywordImagesSlider;

const NoDiaryImage = () => {
  const { goDiaryDraw } = useGoDiaryDraw();
  return (
    <div className={"mx-auto font-bold h-auto"}>
      <span className={"text-2xl text-end tablet:text-4xl text-nowrap"}>
        그려진 그림이 없어요.. <span className={"ml-4"}>😢</span>
      </span>
      <p
        className={"text-xl text-end mt-6 tablet:text-3xl cursor-pointer"}
        onClick={goDiaryDraw}
      >
        그림 그리러 가기 >
      </p>
    </div>
  );
};
