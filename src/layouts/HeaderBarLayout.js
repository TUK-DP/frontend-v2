import { Outlet } from "react-router-dom";
import React from "react";
import HeaderBar from "../components/HeaderBar";

const HeaderBarLayout = (props) => {
  return (
    <div id={"HeaderBarLayout"} className={"w-full h-full pt-headerBarHeight"}>
      <HeaderBar />
      <Outlet />
    </div>
  );
};

export default HeaderBarLayout;
