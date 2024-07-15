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
import DiaryRecall, { DIARY_RECALL_PAGE_PATH } from "./pages/DiaryRecall";
import NoDiaryRecall, {
  NO_DIARY_RECALL_PAGE_PATH,
} from "./pages/NoDiaryRecall";

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
          <Route path={DIARY_RECALL_PAGE_PATH} element={<DiaryRecall />} />
          <Route path={NO_DIARY_RECALL_PAGE_PATH} element={<NoDiaryRecall />} />
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );
}

export default App;
