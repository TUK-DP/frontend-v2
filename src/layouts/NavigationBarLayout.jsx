import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar/NavBar";

function NavigationBarLayout(props) {
  return (
    <div id={"NavigationBarLayout"} className={"pb-navBarHeight"}>
      <Outlet />
      <NavBar />
    </div>
  );
}

export default NavigationBarLayout;
