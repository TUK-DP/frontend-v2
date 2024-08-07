import React, { useEffect } from "react";
import { dateToDotString } from "../../utils/api/dateConverter";
import { useCalendarStore } from "../../stores/CalendarStore";
import TextareaAutosize from "react-textarea-autosize";
import DiaryKeywordImagesSlider from "../../components/diaryDetail/DiaryKeywordImagesSlider";
import DiaryControlButton from "./DiaryControlButton";
import useDiaryControl from "../../hooks/diaryDetail/useDiaryControl";
import useCreateDiary from "../../hooks/diaryDetail/queries/useCreateDiary";
import useUpdateDiary from "../../hooks/diaryDetail/queries/useUpdateDiary";
import useResetAiImages from "../../hooks/canvas/useResetAiIamges";

export const DIARY_DETAIL_PAGE_PATH = "/diary/detail";

const DiaryDetail = () => {
  let { handleClick, controlState, content, handleChangeInput, textAreaRef } =
    useDiaryControl();

  const create = useCreateDiary();
  const update = useUpdateDiary();
  let isMutating = create.isMutating || update.isMutating;
  useResetAiImages();

  return (
    <div className={"flex flex-col gap-10 px-10 pb-10"}>
      <DiaryDate />
      <DiaryKeywordImagesSlider />
      <TextareaAutosize
        ref={textAreaRef}
        value={content}
        disabled={isMutating || !controlState.isEditActive}
        className={
          "bg-transparent resize-none overflow-hidden text-3xl outline-none whitespace-pre-wrap"
        }
        placeholder={"일기를 입력하세요"}
        name={"content"}
        onChange={handleChangeInput}
      />
      <DiaryControlButton
        content={content}
        controlState={controlState}
        handleClick={handleClick}
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
