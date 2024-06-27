import { NavBarItem } from "./NavBarItem";
import { useNavBarStore } from "../../stores/NavBarStore";

export const NavBar = () => {
  const { menuList, onClick } = useNavBarStore((state) => state);

  return (
    <nav
      id={"NavBar"}
      className={"w-full h-navBarHeight absolute bottom-0 flex justify-around"}
    >
      {menuList.map((item, index) => (
        <NavBarItem key={index} {...item} onClick={onClick} />
      ))}
    </nav>
  );
};
