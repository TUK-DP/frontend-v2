import React from "react";
import { SyncLoader } from "react-spinners";

const Spinner = ({ color = "#FFFFFF" }) => {
  return <SyncLoader color={color} />;
};

export default Spinner;
