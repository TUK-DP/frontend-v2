export const MobileResponsiveLayout = ({ children }) => {
  return (
    <div
      id={"MobileResponsiveLayout"}
      className={"h-full mx-auto min-w-minWidth max-w-maxWidth"}
    >
      {children}
    </div>
  );
};
