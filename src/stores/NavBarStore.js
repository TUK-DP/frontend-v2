import { create } from "zustand";
import { ReactComponent as DiaryIcon } from "../assets/navbar/diary_icon.svg";
import { ReactComponent as HomeIcon } from "../assets/navbar/home_icon.svg";
import { ReactComponent as MyPageIcon } from "../assets/navbar/mypage_icon.svg";
import { HOME_PAGE_PATH } from "../pages/Home";
import { MY_PAGE_PATH } from "../pages/MyPage";
import { DIARY_PAGE_PATH } from "../pages/Diary";

export const NAV_BAR_ITEM_LIST = [
  {
    value: "diary",
    name: "일기",
    icon: DiaryIcon,
    path: DIARY_PAGE_PATH,
  },
  {
    value: "home",
    name: "홈",
    icon: HomeIcon,
    path: HOME_PAGE_PATH,
  },
  {
    value: "mypage",
    name: "마이페이지",
    icon: MyPageIcon,
    path: MY_PAGE_PATH,
  },
];

export const useNavBarStore = create((set) => ({
  selectedMenu: NAV_BAR_ITEM_LIST[1],

  changeMenuItem: (selectMenu) => {
    set((state) => ({
      selectedMenu: selectMenu,
    }));
  },
}));
