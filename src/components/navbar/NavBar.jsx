import { NavBarItem } from "./NavBarItem";
import { NAV_BAR_ITEM_LIST } from "../../stores/NavBarStore";

export const NavBar = () => {
  return (
    <nav
      id={"NavBar"}
      className={"w-full h-navBarHeight absolute bottom-0 flex justify-around"}
    >
      {NAV_BAR_ITEM_LIST.map((item, index) => (
        <NavBarItem key={index} {...item} />
      ))}
    </nav>
  );
};
