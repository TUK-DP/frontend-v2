import create from "zustand";
import { ReactComponent as DiaryIcon } from "../assets/navbar/diary_icon.svg";
import { ReactComponent as HomeIcon } from "../assets/navbar/home_icon.svg";
import { ReactComponent as MyPageIcon } from "../assets/navbar/mypage_icon.svg";

export const INIT_NAV_BAR_ITEM_LIST = [
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

export const useNavBarStore = create((set) => ({
  menuList: INIT_NAV_BAR_ITEM_LIST,

  onClick: (value) => {
    set((state) => ({
      menuList: state.menuList.map((item) => {
        if (item.value === value) {
          return { ...item, isSelected: true };
        } else {
          return { ...item, isSelected: false };
        }
      }),
    }));
  },
}));
