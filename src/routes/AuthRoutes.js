import { Route } from "react-router-dom";
import Signin, { SIGNIN_PAGE_PATH } from "../pages/auths/Signin";
import Signup, { SIGNUP_PAGE_PATH } from "../pages/auths/Signup";
import React from "react";

const AuthRoutes = () => {
  return (
    <>
      <Route path={SIGNIN_PAGE_PATH} element={<Signin />} />
      <Route path={SIGNUP_PAGE_PATH} element={<Signup />} />
    </>
  );
};

export default AuthRoutes;
