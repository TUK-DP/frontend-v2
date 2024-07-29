import DementiaCenter, {
  DEMENTIA_CENTER_PAGE_PATH,
} from "../pages/dementiaCenter/DementiaCenter";
import { Route } from "react-router-dom";
import React from "react";
import Gym, { GYM_PAGE_PATH } from "../pages/gym/Gym";
import RockScissorPaperIntro, {
  ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH,
} from "../pages/games/RockScissorPaperIntro";
import GameRockScissorPaper, {
  GAME_ROCK_SCISSOR_PAPER_PAGE_PATH,
} from "../pages/games/GameRockScissorPaper";

const MainPageFeatureRoutes = () => {
  return (
    <>
      <Route path={DEMENTIA_CENTER_PAGE_PATH} element={<DementiaCenter />} />
      <Route path={GYM_PAGE_PATH} element={<Gym />} />
      {/* 게임관련 라우팅 */}
      <Route
        path={ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH}
        element={<RockScissorPaperIntro />}
      />
      <Route
        path={GAME_ROCK_SCISSOR_PAPER_PAGE_PATH}
        element={<GameRockScissorPaper />}
      />
    </>
  );
};

export default MainPageFeatureRoutes;
