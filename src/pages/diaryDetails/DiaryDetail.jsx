import React, { useState } from "react";
import { dateToDotString } from "../../utils/api/dateConverter";
import { useCalendarStore } from "../../stores/CalendarStore";
import useFetchDiary from "../../hooks/diary/queries/useFetchDiary";
import { useInput } from "../../hooks/inputs/useInput";
import TextareaAutosize from "react-textarea-autosize";
import DiaryKeywordImagesSlider from "../../components/diaryDetail/DiaryKeywordImagesSlider";
import DiaryControlButton from "./DiaryControlButton";

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
    controlButtonText: `${!isDiaryExist ? "작성하기" : "수정하기"}`,
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

export default DiaryDetail;

/**
 * @typedef {{
 *   isEditActive: boolean,
 *   controlButtonActive: boolean,
 *   controlButtonText: string,
 *   controlButtonMessage: string
 * }} ControlState
 */
