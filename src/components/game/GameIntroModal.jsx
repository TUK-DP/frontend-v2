import React from "react";
import ModalBackground from "../modals/ModalBackground";
import { useNavigate } from "react-router-dom";
import { GAME_INFO } from "../../constants/gameInfo";

const GameIntroModal = ({ modalClose, gamePath, type }) => {
  return (
    <ModalBackground>
      <div className="relative col-start-2 row-start-2 h-full  bg-white rounded-3xl flex flex-col items-center px-10 py-8 gap-5 w-[355px] tablet:w-[400px]">
        <GameIntro type={type} />
        <ModalButtons modalClose={modalClose} gamePath={gamePath} />
      </div>
    </ModalBackground>
  );
};

export default GameIntroModal;

const GameIntro = ({ type }) => {
  return (
    <>
      <div className={"font-bold text-2xl tablet:text-4xl"}>
        {GAME_INFO[type].title}
      </div>
      <div
        className={
          "break-keep text-lg whitespace-pre-wrap text-center py-3 tablet:text-2xl"
        }
      >
        {GAME_INFO[type].content}
      </div>
    </>
  );
};

const ModalButtons = ({ modalClose, gamePath }) => {
  const navigate = useNavigate();
  const goPlayGame = () => {
    navigate(gamePath);
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
        "w-full h-11 bg-primary-300 text-white font-bold text-xl rounded-lg-xl tablet:text-xl tablet:h-14"
      }
    >
      {buttonName}
    </button>
  );
};
