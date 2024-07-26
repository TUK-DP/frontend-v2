import React from "react";
import { Route } from "react-router-dom";
import CenterMap, {
  CENTER_MAP_PAGE_PATH,
} from "../pages/dementiaCenter/CenterMap";

const DementiaCenterRoutes = () => {
  return (
    <>
      <Route path={CENTER_MAP_PAGE_PATH} element={<CenterMap />} />
    </>
  );
};

export default DementiaCenterRoutes;
