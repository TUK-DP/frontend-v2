import React from "react";

const ErrorMessage = ({ errorMessage }) => {
  return <div className={"text-[#FF0000] ml-2 h-6"}>{errorMessage}</div>;
};

export default ErrorMessage;
