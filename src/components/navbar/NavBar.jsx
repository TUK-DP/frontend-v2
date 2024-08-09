import { NavBarItem } from "./NavBarItem";
import { NAV_BAR_ITEM_LIST } from "../../stores/NavBarStore";
import useNavBar from "../../hooks/navbar/useNavBar";

export const NavBar = () => {
  let { isScrollDowning } = useNavBar();
  return (
    <nav
      id={"NavBar"}
      className={
        "fixed bottom-0 w-full h-navBarHeight flex justify-around transition-all duration-500 bg-white max-w-maxWidth" +
        " " +
        (isScrollDowning ? "translate-y-full" : "translate-y-0")
      }
    >
      {NAV_BAR_ITEM_LIST.map((item, index) => (
        <NavBarItem key={index} {...item} />
      ))}
    </nav>
  );
};
