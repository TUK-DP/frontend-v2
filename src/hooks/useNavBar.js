import { useState } from "react";

export const useNavBar = ({ initState }) => {
  const [menuList, setMenuList] = useState(initState);
  const onClick = (value) => {
    setMenuList((preMenusList) =>
      preMenusList.map((item) => {
        if (item.value === value) {
          return { ...item, isSelected: true };
        } else {
          return { ...item, isSelected: false };
        }
      })
    );
  };

  return { menuList, onClick };
};
