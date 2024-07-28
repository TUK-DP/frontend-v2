import { Route } from "react-router-dom";
import RockScissorPaperIntro, {
  ROCK_SCISSOR_PAPER_INTRO_PAGE_PATH,
} from "../pages/games/RockScissorPaperIntro";
import GameRockScissorPaper, {
  GAME_ROCK_SCISSOR_PAPER_PAGE_PATH,
} from "../pages/games/GameRockScissorPaper";

const GameRoutes = () => {
  return (
    <>
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

export default GameRoutes;
