import { Route } from "react-router-dom";
import React from "react";
import Gym, { GYM_PAGE_PATH } from "../pages/gym/Gym";
import RockScissorPaperIntro, {
  ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH,
} from "../pages/games/RockScissorPaperIntro";
import GameRockScissorPaper, {
  GAME_ROCK_SCISSOR_PAPER_PAGE_PATH,
} from "../pages/games/RockScissorPaper";
import SelectGames, {
  SELECT_GAMES_PAGE_PATH,
} from "../pages/games/SelectGames";
import ColorMatch, { COLOR_MTACH_PAGE_PATH } from "../pages/games/ColorMatch";
import ColorMatchIntro, {
  COLOR_MTACH_INTRO_PAGE_PATH,
} from "../pages/games/ColorMatchIntro";

const MainPageFeatureRoutes = () => {
  return (
    <>
      <Route path={GYM_PAGE_PATH} element={<Gym />} />
      {/* 게임관련 라우팅 */}
      <Route path={SELECT_GAMES_PAGE_PATH} element={<SelectGames />} />
      <Route
        path={ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH}
        element={<RockScissorPaperIntro />}
      />
      <Route
        path={GAME_ROCK_SCISSOR_PAPER_PAGE_PATH}
        element={<GameRockScissorPaper />}
      />
      <Route path={COLOR_MTACH_PAGE_PATH} element={<ColorMatch />} />
      <Route path={COLOR_MTACH_INTRO_PAGE_PATH} element={<ColorMatchIntro />} />
    </>
  );
};

export default MainPageFeatureRoutes;
