import DementiaCenter, {
  DEMENTIA_CENTER_PAGE_PATH,
} from "../pages/dementiaCenter/DementiaCenter";
import { Route } from "react-router-dom";
import React from "react";
import Gym, { GYM_PAGE_PATH } from "../pages/gym/Gym";

const MainPageFeatureRoutes = () => {
  return (
    <>
      <Route path={DEMENTIA_CENTER_PAGE_PATH} element={<DementiaCenter />} />
      <Route path={GYM_PAGE_PATH} element={<Gym />} />
    </>
  );
};

export default MainPageFeatureRoutes;
