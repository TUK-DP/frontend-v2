import React from "react";
import ModalBackground from "../modals/ModalBackground";
import { useNavigate } from "react-router-dom";
import { GAME_ROCK_SCISSOR_PAPER_PAGE_PATH } from "../../pages/games/GameRockScissorPaper";

const GAME_DESCRIPTION = `지는 게 이기는 거다!

가위바위보를 했을 때 지는 사람이 
이기는 게임입니다!

만약 컴퓨터가 보를 냈을 때, 
주먹을 낸다면 이길 수 있습니다!

단, 같이 내는 것이 아니라, 
컴퓨터가 낸 것을 보고 난 후 내면 됩니다!

자, 그럼 지러 가볼까요~?!!
`;

const GameIntroModal = ({ modalClose }) => {
  return (
    <ModalBackground>
      <div className="relative col-start-2 row-start-2 h-full  bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5 w-[355px]">
        <GameIntro />
        <ModalButtons modalClose={modalClose} />
      </div>
    </ModalBackground>
  );
};

export default GameIntroModal;

const GameIntro = () => {
  return (
    <>
      <div className={"font-bold text-2xl"}>지는 가위바위보란?</div>
      <div
        className={"break-keep text-lg whitespace-pre-wrap text-center py-3"}
      >
        {GAME_DESCRIPTION}
      </div>
    </>
  );
};

const ModalButtons = ({ modalClose }) => {
  const navigate = useNavigate();
  const goPlayGame = () => {
    navigate(GAME_ROCK_SCISSOR_PAPER_PAGE_PATH);
  };
  return (
    <div className={"w-full flex gap-3"}>
      <PurpleButton buttonName="시작" handleClick={goPlayGame} />
      <PurpleButton buttonName="닫기" handleClick={modalClose} />
    </div>
  );
};

const PurpleButton = ({ buttonName, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className={
        "w-full h-11 bg-primary-300 text-white font-bold text-xl rounded-lg-xl"
      }
    >
      {buttonName}
    </button>
  );
};
