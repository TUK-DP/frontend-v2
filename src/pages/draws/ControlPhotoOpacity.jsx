import React, { useEffect, useState } from "react";
import { TextBlock } from "../../components/helpWithAi/chat/TextBlock";
import { AiProfile } from "../../components/helpWithAi/chat/Chat";
import { useAiImageStore } from "../../stores/AiImagesStore";
import { useKeywordStore } from "../../stores/KeywordStore";
import { useNavigate } from "react-router-dom";
import { useDrawStateStore } from "../../stores/DrawState";
import useGoDiaryDraw from "../../hooks/canvas/useGoDiaryDraw";

export const CONTROL_PHOTO_OPACITY_PAGE_PATH = "/diary/draw/ai/edit";

const OPACITY_BUTTON = [
  { text: "없음", opacity: "opacity-100", value: 1 },
  { text: "30%", opacity: "opacity-70", value: 0.7 },
  { text: "50%", opacity: "opacity-50", value: 0.5 },
  { text: "70%", opacity: "opacity-30", value: 0.3 },
];

const ControlPhotoOpacity = () => {
  const [selectedOpacity, setSelectedOpacity] = useState(0);
  const { AiImages } = useAiImageStore();
  const { selectedKeyword } = useKeywordStore();

  return (
    <div className={"w-full h-full flex flex-col items-center "}>
      <div
        className={
          "w-11/12 bg-primary-800 rounded-lg-xl flex flex-col p-5 gap-10 pb-10"
        }
      >
        <CustomChat />
        <ControlOpacity
          imgUrl={AiImages[selectedKeyword.keywordId]?.imageUrl}
          opacity={OPACITY_BUTTON[selectedOpacity].opacity}
        />
        <ControlOpacityButton
          selectedOpacity={selectedOpacity}
          setSelectedOpacity={setSelectedOpacity}
        />
      </div>
      <Buttons selectedOpacity={selectedOpacity} />
    </div>
  );
};

export default ControlPhotoOpacity;

const CustomChat = () => {
  return (
    <div className={"flex items-center gap-5"}>
      <AiProfile className />
      <TextBlock className={"bg-white w-full tablet:text-3xl"}>
        사진의 투명도를
        <br />
        조절할 수 있어요.
      </TextBlock>
    </div>
  );
};

const ControlOpacity = ({ imgUrl, opacity }) => {
  return (
    <div className={"bg-white w-full aspect-square"}>
      <img
        src={imgUrl}
        className={`bg-cover bg-no-repeat w-full h-full ${opacity}`}
      />
    </div>
  );
};

const ControlOpacityButton = ({ selectedOpacity, setSelectedOpacity }) => {
  const handleChangeOpacity = (index) => {
    setSelectedOpacity(index);
  };
  return (
    <div
      className={"flex w-full justify-between text-primary-600 font-bold gap-5"}
    >
      {OPACITY_BUTTON.map((button, index) => (
        <button
          className={`min-w-16 w-full h-10 rounded-lg-xl tablet:h-20 tablet:text-3xl  border-primary-600 border-2 ${
            index === selectedOpacity ? "bg-primary-600 text-white" : "bg-white"
          }`}
          onClick={() => handleChangeOpacity(index)}
          key={index}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

const Buttons = ({ selectedOpacity }) => {
  const navigate = useNavigate();
  const { selectedKeyword } = useKeywordStore();

  const { AiImages, setAiImages, removeAiImage } = useAiImageStore();
  const { resetOneCavnasState } = useDrawStateStore();

  const handleClickCancelButton = () => {
    removeAiImage(selectedKeyword.keywordId);
    navigate(-1);
  };
  const handleClickConfirmButton = () => {
    setAiImages(
      selectedKeyword.keywordId,
      AiImages[selectedKeyword.keywordId].imageUrl,
      OPACITY_BUTTON[selectedOpacity].value
    );
    resetOneCavnasState(selectedKeyword.keywordId);
    navigate(-2, { replace: true });
  };
  return (
    <div className={"w-11/12 flex gap-8 items-center py-10 text-xl  font-bold"}>
      <button
        onClick={handleClickConfirmButton}
        className={
          "w-full border-2 border-primary-600 h-12 tablet:h-20 rounded-lg-xl text-white bg-primary-600"
        }
      >
        확인
      </button>
      <button
        onClick={handleClickCancelButton}
        className={
          "w-full border-2 border-primary-600 h-12 tablet:h-20 rounded-lg-xl text-primary-300"
        }
      >
        취소
      </button>
    </div>
  );
};
