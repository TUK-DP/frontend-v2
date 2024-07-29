import React from "react";
import { Route } from "react-router-dom";
import CenterMap, {
  CENTER_MAP_PAGE_PATH,
} from "../pages/dementiaCenter/CenterMap";
import DementiaCenter, {
  DEMENTIA_CENTER_PAGE_PATH,
} from "../pages/dementiaCenter/DementiaCenter";

const DementiaCenterRoutes = () => {
  return (
    <>
      <Route path={CENTER_MAP_PAGE_PATH} element={<CenterMap />} />
      <Route path={DEMENTIA_CENTER_PAGE_PATH} element={<DementiaCenter />} />
    </>
  );
};

export default DementiaCenterRoutes;
