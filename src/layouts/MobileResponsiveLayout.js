import { Outlet } from "react-router-dom";

export const MobileResponsiveLayout = (props) => {
  return (
    <div
      id={"MobileResponsiveLayout"}
      className={"relative h-full mx-auto min-w-minWidth max-w-maxWidth"}
    >
      <Outlet />
    </div>
  );
};
