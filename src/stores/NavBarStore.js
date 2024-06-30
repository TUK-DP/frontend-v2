import { create } from "zustand";
import { ReactComponent as DiaryIcon } from "../assets/navbar/diary_icon.svg";
import { ReactComponent as HomeIcon } from "../assets/navbar/home_icon.svg";
import { ReactComponent as MyPageIcon } from "../assets/navbar/mypage_icon.svg";

export const NAV_BAR_ITEM_LIST = [
  {
    value: "diary",
    name: "일기",
    icon: DiaryIcon,
  },
  {
    value: "home",
    name: "홈",
    icon: HomeIcon,
  },
  {
    value: "mypage",
    name: "마이페이지",
    icon: MyPageIcon,
  },
];

export const useNavBarStore = create((set) => ({
  selectedMenu: NAV_BAR_ITEM_LIST[1],

  onClick: (value) => {
    set((state) => ({
      selectedMenu: NAV_BAR_ITEM_LIST.find((item) => item.value === value),
    }));
  },
}));
