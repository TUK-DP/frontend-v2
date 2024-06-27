import { useNavBarStore } from "../../stores/NavBarStore";

export const NavBarItem = ({ value, name, icon: Icon }) => {
  const { selectedMenu, onClick } = useNavBarStore((state) => state);

  const isSelected = selectedMenu.value === value;

  return (
    <div
      onClick={() => onClick(value)}
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
