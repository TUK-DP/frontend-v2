import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import Signup, { SIGNUP_PAGE_PATH } from "./pages/Signup";
import Signin, { SIGNIN_PAGE_PATH } from "./pages/Signin";
import DiagnosisGuide, {
  DIAGNOSIS_GUIDE_PAGE_PATH,
} from "./pages/dementiaDiagnosis/DiagnosisGuide";
import DiaryDraw, { DIARY_DRAW_PAGE_PATH } from "./pages/DiaryDraw";
import Home, { HOME_PAGE_PATH } from "./pages/Home";
import Diary, { DIARY_PAGE_PATH } from "./pages/Diary";
import HeaderBarLayout from "./layouts/HeaderBarLayout";
import PaperBackgroundWrapper from "./components/diary/PaperBackgroundWrapper";
import React from "react";
import MyPage, { MY_PAGE_PATH } from "./pages/MyPage";
import DiaryRecall, { DIARY_RECALL_PAGE_PATH } from "./pages/DiaryRecall";
import NoDiaryRecall, {
  NO_DIARY_RECALL_PAGE_PATH,
} from "./pages/NoDiaryRecall";
import HelpWithAi, { HELP_WITH_AI_PATH } from "./pages/HelpWithAi";
import ControlPhotoOpacity, {
  CONTROL_PHOTO_OPACITY_PAGE_PATH,
} from "./pages/draws/ControlPhotoOpacity";

function App() {
  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={HOME_PAGE_PATH} element={<Home />} />
            <Route path={MY_PAGE_PATH} element={<MyPage />} />
          </Route>
          <Route element={<HeaderBarLayout />}>
            <Route
              path={DIAGNOSIS_GUIDE_PAGE_PATH}
              element={<DiagnosisGuide />}
            />
            <Route path={SIGNIN_PAGE_PATH} element={<Signin />} />
            <Route path={SIGNUP_PAGE_PATH} element={<Signup />} />
            <Route path={DIARY_PAGE_PATH} element={<Diary />} />
            <Route path={DIARY_RECALL_PAGE_PATH} element={<DiaryRecall />} />
            <Route
              path={NO_DIARY_RECALL_PAGE_PATH}
              element={<NoDiaryRecall />}
            />
            <Route
              path={CONTROL_PHOTO_OPACITY_PAGE_PATH}
              element={<ControlPhotoOpacity />}
            />
          </Route>
          <Route element={<PaperBackgroundWrapper />}>
            <Route element={<HeaderBarLayout />}>
              <Route path={DIARY_DRAW_PAGE_PATH} element={<DiaryDraw />} />
              <Route path={HELP_WITH_AI_PATH} element={<HelpWithAi />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );
}

export default App;
