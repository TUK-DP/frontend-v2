import React from "react";

const ModalBackground = ({ children }) => {
  return (
    <div
      className={
        "max-h-maxWidth min-w-minWidth w-full fixed inset-0 mx-auto bg-opacity-50 bg-black z-50 overflow-hidden"
      }
    >
      <div
        className={
          "h-full w-full overflow-y-auto grid grid-cols-[auto_1fr_auto] grid-rows-[minmax(10px,_1fr)_auto_minmax(10px,_1fr)] place-items-center"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default ModalBackground;
