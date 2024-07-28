import React from "react";

export const GAME_ROCK_SCISSOR_PAPER_PAGE_PATH = "/games/1/rock-scissor-paper";
const GameRockScissorPaper = () => {
  const baseURL = process.env.REACT_APP_GAME_BASE_URL;
  return (
    <iframe
      title="지는 가위바위보"
      src={`${baseURL}/LoosingRockScissorPaper/index.html`}
      className={"w-full h-full"}
      scrolling="no"
    ></iframe>
  );
};

export default GameRockScissorPaper;
