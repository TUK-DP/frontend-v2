import { useState } from "react";
import useFetchDiary from "../diary/queries/useFetchDiary";
import { useInput } from "../inputs/useInput";

const useDiaryControl = () => {
  let { isDiaryExist, diary } = useFetchDiary();

  let { form, handleChangeInput } = useInput({
    content: diary?.content || "",
  });

  const [controlState, setControlState] = useState({
    isEditActive: !isDiaryExist,
    controlButtonText: `${!isDiaryExist ? "작성하기" : "수정하기"}`,
    controlButtonMessage: " ",
  });

  // 저장이나 수정 버튼 클릭 이벤트
  const handleClick = (whenDiaryAction) => {
    // 수정하기 버튼 클릭시 수정 완료 버튼으로 변경
    if (!controlState.isEditActive) {
      setControlState({
        ...controlState,
        isEditActive: true,
        controlButtonText: "수정 완료",
      });
      return;
    }

    // 일기 입력한 내용이 없을 때
    if (form.content === "") {
      setControlState({
        ...controlState,
        controlButtonMessage: "일기를 입력해주세요.",
      });
      return;
    }

    // 일기 내용이 있을 때 일기 저장
    setControlState({
      ...controlState,
      isEditActive: false,
      controlButtonMessage: " ",
      controlButtonText: "수정하기",
    });

    // 일기 저장 또는 수정 API 호출
    whenDiaryAction();
  };

  return {
    content: form.content,
    handleChangeInput,
    controlState,
    handleClick,
  };
};

/**
 * @typedef {{
 *   isEditActive: boolean,
 *   controlButtonText: string,
 *   controlButtonMessage: string
 * }} ControlState
 */

export default useDiaryControl;
