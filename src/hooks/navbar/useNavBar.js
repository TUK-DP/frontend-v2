import { useIsScrollDowning } from "../useIsScrollDowning";
import { NAV_BAR_ITEM_LIST, useNavBarStore } from "../../stores/NavBarStore";
import { useHref } from "react-router-dom";
import { useEffect } from "react";

const useNavBar = () => {
  const { isScrollDowning } = useIsScrollDowning({ offset: 100 });
  let { changeMenuItem } = useNavBarStore((state) => state);

  let href = useHref();
  useEffect(() => {
    let findNavBarItem = NAV_BAR_ITEM_LIST.find((item) => item.path === href);
    changeMenuItem(findNavBarItem);
  }, []);

  return { isScrollDowning };
};

export default useNavBar;
