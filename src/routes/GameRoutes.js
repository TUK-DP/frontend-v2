import { Route } from "react-router-dom";
import RockScissorPaper, {
  ROCK_SCISSOR_PAPER_PAGE_PATH,
} from "../pages/games/RockScissorPaper";

const GameRoutes = () => {
  return (
    <>
      <Route
        path={ROCK_SCISSOR_PAPER_PAGE_PATH}
        element={<RockScissorPaper />}
      />
    </>
  );
};

export default GameRoutes;
