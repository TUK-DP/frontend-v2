import { Outlet } from "react-router-dom";

export const MobileResponsiveLayout = (props) => {
  return (
    <div
      id={"MobileResponsiveLayout"}
      className={"h-full mx-auto min-w-minWidth max-w-maxWidth"}
    >
      <Outlet />
    </div>
  );
};
