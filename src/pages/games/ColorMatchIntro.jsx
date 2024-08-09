import React, { useState } from "react";
import ColorMatchIcon from "../../assets/game/colorMatchIcon.png";
import { useNavigate } from "react-router-dom";
import GameIntroModal from "../../components/game/GameIntroModal";
import { COLOR_MTACH_PAGE_PATH } from "./ColorMatch";

export const COLOR_MTACH_INTRO_PAGE_PATH = "/games/2";
const ColorMatchIntro = () => {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const handleModalState = () => {
    setIsGameModalOpen(!isGameModalOpen);
  };

  return (
    <>
      <div className={"flex flex-col gap-10 px-14 items-center"}>
        <div className={"font-bold text-3xl text-center"}>컬러매치</div>
        <img src={ColorMatchIcon} />
        <GameButtons handleModalState={handleModalState} />
      </div>
      {isGameModalOpen && (
        <GameIntroModal
          modalClose={handleModalState}
          gamePath={COLOR_MTACH_PAGE_PATH}
          type="COLOR-MATCH"
        />
      )}
    </>
  );
};

export default ColorMatchIntro;

const GameButtons = ({ handleModalState }) => {
  const navigate = useNavigate();
  const goPlayGame = () => {
    navigate(COLOR_MTACH_PAGE_PATH);
  };
  return (
    <div className="w-full flex flex-col gap-8 mt-5 items-center">
      <PurpleButton
        buttonName="설명 보기"
        handleClickButton={handleModalState}
      />
      <PurpleButton buttonName="게임 시작" handleClickButton={goPlayGame} />
    </div>
  );
};

export const PurpleButton = ({ buttonName, handleClickButton }) => {
  return (
    <button
      onClick={handleClickButton}
      className={
        "w-full bg-primary-400 text-white rounded-lg-xl font-bold mobile:h-12 h-16  mobile:text-xl text-3xl max-w-4xl"
      }
    >
      {buttonName}
    </button>
  );
};
