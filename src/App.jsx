import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { TestApp } from "./pages/test/TestApp";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import Signup, { SIGNUP_PAGE_PATH } from "./pages/Signup";
import Signin, { SIGNIN_PAGE_PATH } from "./pages/Signin";
import {
  TEST_BOTTOM_SHEET_PAGE_PATH,
  TestBottomSheetTutorialPage,
} from "./pages/test/TestBottomSheetTutorialPage";
import DiaryDraw, { DIARY_DRAW_PAGE_PATH } from "./pages/DiaryDraw";

function App() {
  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={"/"} element={<TestApp />} />
            <Route
              exact
              path={TEST_BOTTOM_SHEET_PAGE_PATH}
              element={<TestBottomSheetTutorialPage />}
            />
          </Route>
          <Route path={SIGNUP_PAGE_PATH} element={<Signup />} />
          <Route path={SIGNIN_PAGE_PATH} element={<Signin />} />
          <Route path={DIARY_DRAW_PAGE_PATH} element={<DiaryDraw />} />
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );
}

export default App;
