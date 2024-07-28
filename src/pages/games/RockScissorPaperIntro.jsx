import React, { useState } from "react";
import rockIcon from "../../assets/game/rockIcon.png";
import scissorIcon from "../../assets/game/scissorIcon.png";
import paperIcon from "../../assets/game/paperIcon.png";
import GameIntroModal from "../../components/game/GameIntroModal";
import { useNavigate } from "react-router-dom";
import { GAME_ROCK_SCISSOR_PAPER_PAGE_PATH } from "./GameRockScissorPaper";

export const ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH = "/games/1";
const RockScissorPaperIntro = () => {
  const [isGameModalOpen, setIsGameModalOpen] = useState(false);
  const handleModalState = () => {
    setIsGameModalOpen(!isGameModalOpen);
  };
  return (
    <>
      <div
        className={
          "w-full h-full relative flex flex-col  items-center py-16 overflow-hidden justify-between"
        }
      >
        <Title />
        <RockSissorPaperImages />
        <GameButtons handleModalState={handleModalState} />
      </div>
      {isGameModalOpen && <GameIntroModal modalClose={handleModalState} />}
    </>
  );
};

export default RockScissorPaperIntro;

const Title = () => {
  return (
    <div className={"font-bold font"}>
      <div className={"text-6xl -rotate-12 absolute top-0 left-14"}>지는</div>
      <div className={"text-7xl"}>가위바위보</div>
    </div>
  );
};

const RockSissorPaperImages = () => {
  return (
    <div className={"flex flex-col w-full flex-1 relative"}>
      <img
        src={scissorIcon}
        alt="scissorIcon"
        className={"absolute inset-x-0 -translate-x-1/4"}
      />
      <img
        src={paperIcon}
        alt="paperIcon"
        className={"absolute right-0 translate-x-16"}
      />
      <img
        src={rockIcon}
        alt="rockIcon"
        className={"absolute bottom-0 translate-x-1/4"}
      />
    </div>
  );
};

const GameButtons = ({ handleModalState }) => {
  const navigate = useNavigate();
  const goPlayGame = () => {
    navigate(GAME_ROCK_SCISSOR_PAPER_PAGE_PATH);
  };
  return (
    <div
      className={
        "w-full flex flex-col gap-8 text-xl text-white font-bold items-center"
      }
    >
      <PurpleButton
        buttonName="설명 보기"
        handleClickButton={handleModalState}
      />
      <PurpleButton buttonName="게임 시작" handleClickButton={goPlayGame} />
    </div>
  );
};

const PurpleButton = ({ buttonName, handleClickButton }) => {
  return (
    <button
      className="bg-primary-400 w-1/2 h-11 rounded-xl "
      onClick={handleClickButton}
    >
      {buttonName}
    </button>
  );
};
