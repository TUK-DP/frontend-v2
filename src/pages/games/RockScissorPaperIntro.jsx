import React, { useState } from "react";
import rockIcon from "../../assets/game/rockIcon.png";
import scissorIcon from "../../assets/game/scissorIcon.png";
import paperIcon from "../../assets/game/paperIcon.png";
import GameIntroModal from "../../components/game/GameIntroModal";
import { useNavigate } from "react-router-dom";
import { GAME_ROCK_SCISSOR_PAPER_PAGE_PATH } from "./RockScissorPaper";
import { PurpleButton } from "./ColorMatchIntro";

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
          "w-full h-full relative flex flex-col  items-center py-16 overflow-hidden"
        }
      >
        <Title />
        <RockSissorPaperImages />
        <GameButtons handleModalState={handleModalState} />
      </div>
      {isGameModalOpen && (
        <GameIntroModal
          modalClose={handleModalState}
          gamePath={GAME_ROCK_SCISSOR_PAPER_PAGE_PATH}
          type="ROCK-SCISSOR-PAPER"
        />
      )}
    </>
  );
};

export default RockScissorPaperIntro;

const Title = () => {
  return (
    <div className={"font-bold font"}>
      <div
        className={"text-6xl -rotate-12 absolute top-0 left-14 tablet:text-7xl"}
      >
        지는
      </div>
      <div className={"text-7xl tablet:text-8xl"}>가위바위보</div>
    </div>
  );
};

const RockSissorPaperImages = () => {
  return (
    <div className={"flex flex-col w-full flex-1 relative"}>
      <img
        src={scissorIcon}
        alt="scissorIcon"
        className={"absolute inset-x-0 -translate-x-1/4 tablet:w-1/3"}
      />
      <img
        src={paperIcon}
        alt="paperIcon"
        className={"absolute right-0 translate-x-16 tablet:w-1/3"}
      />
      <img
        src={rockIcon}
        alt="rockIcon"
        className={"absolute bottom-0 translate-x-1/4 tablet:w-1/3"}
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
    <div className="w-full flex flex-col gap-8 mt-5 px-14 items-center">
      <PurpleButton
        buttonName="설명 보기"
        handleClickButton={handleModalState}
      />
      <PurpleButton buttonName="게임 시작" handleClickButton={goPlayGame} />
    </div>
  );
};
