import React from "react";

export const COLOR_MTACH_PAGE_PATH = "/games/2/color-match";
const GameColorMatch = () => {
  const baseURL = process.env.REACT_APP_GAME_BASE_URL;
  return (
    <iframe
      title="컬러매치"
      src={`${baseURL}/ColorMatch/index.html`}
      className={"w-full h-full "}
    ></iframe>
  );
};

export default GameColorMatch;
