import { NavBarItem } from "./NavBarItem";
import { NAV_BAR_ITEM_LIST } from "../../stores/NavBarStore";
import { useIsScrollDowning } from "../../hooks/useNavBar";

export const NavBar = () => {
  const { isScrollDowning } = useIsScrollDowning({ offset: 100 });
  return (
    <nav
      id={"NavBar"}
      className={
        "fixed bottom-0 w-full h-navBarHeight flex justify-around transition-all duration-500 bg-white" +
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
