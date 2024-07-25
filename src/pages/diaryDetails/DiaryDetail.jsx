import React, { useState } from "react";
import { dateToDotString } from "../../utils/api/dateConverter";
import Slider from "react-slick";
import { useCalendarStore } from "../../stores/CalendarStore";
import useFetchDiary from "../../hooks/diary/queries/useFetchDiary";
import { useInput } from "../../hooks/inputs/useInput";
import TextareaAutosize from "react-textarea-autosize";

export const DIARY_DETAIL_PAGE_PATH = "/diary/detail";

const DiaryDetail = () => {
  let { diary, isDiaryExist } = useFetchDiary();
  const content = diary?.data?.result?.[0]?.content;

  let { form, handleChangeInput } = useInput({
    content: content || "",
  });

  const [controlState, setControlState] = useState({
    isEditActive: !isDiaryExist,
    controlButtonActive: true,
    controlButtonText: !isDiaryExist ? "작성하기" : "수정하기",
    controlButtonMessage: "",
  });

  return (
    <div className={"flex flex-col gap-10 px-10 pb-10"}>
      <DiaryDate />
      <DiaryKeywordImagesSlider />
      <TextareaAutosize
        value={form.content}
        disabled={!controlState.isEditActive}
        className={
          "bg-transparent resize-none overflow-hidden text-3xl outline-none whitespace-pre-wrap"
        }
        placeholder={"일기를 입력하세요"}
        name={"content"}
        onChange={handleChangeInput}
      />
      <DiaryControlButton
        content={form.content}
        controlState={controlState}
        setControlState={setControlState}
      />
    </div>
  );
};

const settings = {
  infinite: false,
  arrows: false,
  dots: true,
  swipe: true,
};

const DiaryKeywordImagesSlider = () => {
  let { isDiaryExist, diary } = useFetchDiary();

  if (!isDiaryExist) {
    return null;
  }

  const keywords = diary.data.result[0].keywords;

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

const DiaryDate = () => {
  const HorizontalLine = ({ className }) => {
    return <div className={`${className} border-2 border-[#5B5B5B]`}></div>;
  };
  const { selectedDate } = useCalendarStore((state) => state);

  return (
    <div className="flex items-center -mx-10 text-2xl md:text-4xl text-[#5B5B5B] font-bold">
      <HorizontalLine className={"w-12"} />
      <p className={"mx-4"}>{dateToDotString(selectedDate)}</p>
      <HorizontalLine className={"flex-1"} />
    </div>
  );
};

/**
 * @param content
 * @param className
 * @param controlState {ControlState}
 * @param setControlState
 * @param props
 * @return {Element}
 * @constructor
 */
const DiaryControlButton = ({
  content,
  className,
  controlState,
  setControlState,
  ...props
}) => {
  const handleClick = (e) => {
    if (content === "") {
      setControlState({
        ...controlState,
        message: "일기를 입력해주세요.",
      });
      return;
    }

    setControlState({
      ...controlState,
      isEditActive: false,
      controlButtonActive: false,
      controlButtonMessage: "",
    });
  };

  return (
    <>
      <div className={"text-2xl text-red-600 text-center"}>
        {controlState.controlButtonMessage}
      </div>
      <button
        disabled={!controlState.controlButtonActive}
        onClick={handleClick}
        className={`border-2 bg-secondary-400 rounded-lg text-2xl py-3 ${className}`}
        {...props}
      >
        {controlState.controlButtonText}
      </button>
    </>
  );
};

export default DiaryDetail;

/**
 * @typedef {{
 *   content: string,
 *   isEditActive: boolean,
 *   controlButtonActive: boolean,
 *   controlButtonText: string,
 *   controlButtonMessage: string
 * }} ControlState
 */
