import { useNavBar } from "../../hooks/useNavBar";
import { ReactComponent as DiaryIcon } from "../../assets/navbar/diary_icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/navbar/home_icon.svg";
import { ReactComponent as MyPageIcon } from "../../assets/navbar/mypage_icon.svg";
import { NavBarItem } from "./NavBarItem";

export const NAV_BAR_ITEM_LIST = [
  {
    value: "diary",
    name: "일기",
    icon: DiaryIcon,
    isSelected: false,
  },
  {
    value: "home",
    name: "홈",
    icon: HomeIcon,
    isSelected: true,
  },
  {
    value: "mypage",
    name: "마이페이지",
    icon: MyPageIcon,
    isSelected: false,
  },
];

export const NavBar = () => {
  const { menuList, onClick } = useNavBar({ initState: NAV_BAR_ITEM_LIST });

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
