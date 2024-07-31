import React from "react";
import GameIcon from "../../assets/game/gameIcon.png";
import { GameButtonList } from "../../components/home/SubDementiaPreventionSection";

export const SELECT_GAMES_PAGE_PATH = "/games";

const SelectGames = () => {
  return (
    <>
      <GameBanner />
      <GameList />
    </>
  );
};

export default SelectGames;

const GameBanner = () => {
  return (
    <div className={"flex w-full justify-around px-2 pb-5"}>
      <div className={"flex flex-col font-bold justify-between py-2"}>
        <p className={"text-3xl"}>체조로 예방하세요!</p>
        <p className={"text-xl text-secondary-500"}>
          머리를 쓰는 것은
          <br />
          인지력 향상에 도움을 줍니다!
        </p>
      </div>
      <img src={GameIcon} className={"w-28"} />
    </div>
  );
};

const GameList = () => {
  return (
    <div className="w-full px-5 pt-10">
      <GameButtonList />
    </div>
  );
};
