import { NAV_BAR_ITEM_LIST, useNavBarStore } from "../../stores/NavBarStore";
import { useNavigate } from "react-router-dom";

export const NavBarItem = ({ value, name, path, icon: Icon }) => {
  const { selectedMenu, changeMenuItem } = useNavBarStore((state) => state);

  const isSelected = selectedMenu.value === value;

  let navigate = useNavigate();

  const handleClick = () => {
    let clickedItem = NAV_BAR_ITEM_LIST.find((item) => item.value === value);
    navigate(path);
    changeMenuItem(clickedItem);
  };

  return (
    <div
      onClick={handleClick}
      className={
        "max-w-36 md:max-w-56 w-full h-full flex flex-col justify-center"
      }
    >
      <IconWrapper>
        <Icon opacity={isSelected ? 1 : 0.2} />
      </IconWrapper>
      <MenuName name={name} isSelected={isSelected} />
    </div>
  );
};

const IconWrapper = ({ children }) => {
  return (
    <div className={"w-full flex justify-center items-center"}>{children}</div>
  );
};

const MenuName = ({ name, isSelected }) => {
  return (
    <div
      className={"text-center " + (isSelected ? "opacity-100" : "opacity-20")}
    >
      {name}
    </div>
  );
};
