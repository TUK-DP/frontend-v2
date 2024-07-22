import React, { useState } from "react";
import { dateParser } from "../../utils/api/dateConverter";
import Slider from "react-slick";

export const DIARY_DETAIL_PAGE_PATH = "/diary/detail";
export const diaryInterface = {
  diaryId: 0,
  title: "string",
  createDate: "2024-07-20",
  content:
    '오늘은 내 큰 아들이 집에 방문했다. 어릴 때의 아들 모습이 떠올라 그리운 마음에 잠겼다. 내가 처음 아들을 낳았던 그 날의 기억이 생생하게 떠올랐다.\n\n그날도 지금처럼 맑은 날이었다. 아침 일찍부터 진통이 시작되어 병원으로 갔던 기억이 난다. 병원에 들어가니 의사와 간호사들이 바쁘게 움직였고, 나는 긴장과 설렘으로 가득 찬 채 분만실로 들어갔다. 진통은 점점 심해졌지만, 나는 우리 아이를 만나겠다는 생각에 힘을 냈다.\n\n오후가 되어서야 아들이 태어났다. 의사 선생님이 "건강한 아들이에요!"라고 말했을 때, 내 눈에는 눈물이 고였다. 아기를 처음 품에 안았을 때의 그 따뜻한 느낌을 아직도 잊을 수 없다. 아기의 작은 손가락과 발가락, 그리고 작고 부드러운 얼굴을 보며 나는 감격스러웠다.\n\n남편도 곧바로 병원에 도착해 우리 아기를 보고는 벅찬 감정에 눈물을 흘렸다. 우리는 그날, 부모가 된 기쁨과 책임감을 함께 느꼈다. 아들이 성장하는 동안 우리는 수많은 기쁨과 눈물을 함께 겪었고, 그 모든 순간이 지금의 아들을 만든 것이다.\n\n이제 아들이 성인이 되어 자신의 길을 잘 걸어가고 있지만, 나는 가끔씩 그 어린 시절의 아들이 그립다. 아들이 웃고 울며 성장했던 순간들이 어제 일처럼 떠오른다. 오늘도 그런 기억들 덕분에 마음이 따뜻해졌다.\n\n아들이 건강하고 행복하게 자라준 것에 감사하며, 앞으로도 그의 인생이 행복으로 가득하기를 바란다.',
  keywords: [],
  keywordss: [
    {
      keywordId: 0,
      keyword: "키워드0",
      imgUrl:
        "https://tukorea-dp.s3.amazonaws.com/image/8d7c35e3-43ea-42c2-8a46-1e2c76d3dc7a",
    },
    {
      keywordId: 0,
      keyword: "키워드0",
      imgUrl:
        "https://tukorea-dp.s3.amazonaws.com/image/8d7c35e3-43ea-42c2-8a46-1e2c76d3dc7a",
    },
    {
      keywordId: 0,
      keyword: "키워드0",
      imgUrl:
        "https://tukorea-dp.s3.amazonaws.com/image/8d7c35e3-43ea-42c2-8a46-1e2c76d3dc7a",
    },
  ],
  imgUrl: null,
};

const DiaryDetail = () => {
  // DiaryDetail에 접속했다는 것은 이미 diary 데이터를 가지고 있다는 것을 의미
  const [diary] = useState(diaryInterface);
  const { year, month, day } = dateParser(diary.createDate);

  return (
    <div className={"flex flex-col gap-10 px-10"}>
      <DiaryDate {...{ year, month, day }} />
      <DiaryKeywordImagesSlider keywords={diary.keywords} />
      <span className={"mb-20 text-xl break-keep tablet:text-3xl"}>
        {diary.content}
      </span>
    </div>
  );
};

const settings = {
  infinite: false,
  arrows: false,
  dots: true,
  swipe: true,
};

const DiaryKeywordImagesSlider = ({ keywords }) => {
  if (keywords.length === 0) {
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

const NoDiaryImage = () => {
  return (
    <div className={"mx-auto font-bold  "}>
      <span className={"text-3xl text-end"}>그려진 그림이 없어요..</span>
      <p className={"text-2xl text-end mt-6"}>그림 그리러 가기 ></p>
    </div>
  );
};

const DiaryDate = ({ year, month, day }) => {
  const HorizontalLine = ({ className }) => {
    return <div className={`${className} border-2 border-[#5B5B5B]`}></div>;
  };

  return (
    <div className="flex items-center -mx-10 text-2xl md:text-4xl text-[#5B5B5B] font-bold">
      <HorizontalLine className={"w-12"} />
      <p className={"mx-4"}>
        {year}.{month.toString().padStart(2, "0")}.{day}
      </p>
      <HorizontalLine className={"flex-1"} />
    </div>
  );
};

export default DiaryDetail;
