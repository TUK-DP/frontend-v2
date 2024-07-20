import React, { useState } from "react";
import AiProfileIcon from "../../components/helpWithAi/icon/AiProfileIcon";
import { TextBlock } from "../../components/helpWithAi/chat/TextBlock";
import { Chat, AiProfile } from "../../components/helpWithAi/chat/Chat";
import aiHelpRobot from "../../assets/draw/aiHelpRobot.png";

export const CONTROL_PHOTO_OPACITY_PAGE_PATH = "/diary/draw/ai/edit";

const OPACITY_BUTTON = [
  { text: "없음", opacity: 1 },
  { text: "30%", opacity: 0.7 },
  { text: "50%", opacity: 0.5 },
  { text: "70%", opacity: 0.3 },
];

const ControlPhotoOpacity = () => {
  const [selectedOpacity, setSelectedOpacity] = useState(0);
  return (
    <div className={"w-full h-full flex flex-col items-center"}>
      <div
        className={
          "w-11/12 bg-primary-800 rounded-lg-xl flex flex-col p-5 gap-10"
        }
      >
        <CustomChat />
        <ControlOpacity
          imgUrl={aiHelpRobot}
          opacity={OPACITY_BUTTON[selectedOpacity].opacity}
        />
        <ControlOpacityButton
          selectedOpacity={selectedOpacity}
          setSelectedOpacity={setSelectedOpacity}
        />
      </div>
    </div>
  );
};

export default ControlPhotoOpacity;

const CustomChat = () => {
  return (
    <div className={"flex items-center gap-5"}>
      <AiProfile />
      <TextBlock className={"bg-white w-full"}>
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
        className={`bg-cover bg-no-repeat w-full h-full opacity-${opacity * 100} `}
      />
    </div>
  );
};

const ControlOpacityButton = ({ selectedOpacity, setSelectedOpacity }) => {
  const handleChangeOpacity = (index) => {
    setSelectedOpacity(index);
  };
  return (
    <div className={"flex w-full justify-between text-primary-600 font-bold"}>
      {OPACITY_BUTTON.map((button, index) => (
        <button
          className={`w-16 h-10 rounded-lg-xl ${
            index === selectedOpacity
              ? "bg-primary-600 text-white"
              : "bg-white border-primary-600 border-2"
          }`}
          onClick={() => handleChangeOpacity(index)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};
