import React, { useState } from "react";
import rockIcon from "../../assets/game/rockIcon.png";
import scissorIcon from "../../assets/game/scissorIcon.png";
import paperIcon from "../../assets/game/paperIcon.png";
import GameIntroModal from "../../components/game/GameIntroModal";
import { useNavigate } from "react-router-dom";
import { GAME_ROCK_SCISSOR_PAPER_PAGE_PATH } from "./RockScissorPaper";
import { PurpleButton } from "./ColorMatchIntro";

export const ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH = "/games/1";
const GAME_INFO = {
  title: "지는 가위바위보란?",
  content: `지는 게 이기는 거다!

가위바위보를 했을 때 지는 사람이 
이기는 게임입니다!

만약 컴퓨터가 보를 냈을 때, 
주먹을 낸다면 이길 수 있습니다!

단, 같이 내는 것이 아니라, 
컴퓨터가 낸 것을 보고 난 후 내면 됩니다!

자, 그럼 지러 가볼까요~?!!
`,
};

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
