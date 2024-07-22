import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBarLayout from "./layouts/NavigationBarLayout";
import { MobileResponsiveLayout } from "./layouts/MobileResponsiveLayout";
import Signup, { SIGNUP_PAGE_PATH } from "./pages/auths/Signup";
import Signin, { SIGNIN_PAGE_PATH } from "./pages/auths/Signin";
import DiagnosisGuide, {
  DIAGNOSIS_GUIDE_PAGE_PATH,
} from "./pages/dementiaDiagnosis/DiagnosisGuide";
import Diagnosis, {
  DIAGNOSIS_PAGE_PATH,
} from "./pages/dementiaDiagnosis/Diagnosis";
import DiaryDraw, { DIARY_DRAW_PAGE_PATH } from "./pages/draws/DiaryDraw";
import Home, { HOME_PAGE_PATH } from "./pages/Home";
import Diary, { DIARY_PAGE_PATH } from "./pages/diarys/Diary";
import HeaderBarLayout from "./layouts/HeaderBarLayout";
import PaperBackgroundWrapper from "./components/diary/PaperBackgroundWrapper";
import React from "react";
import MyPage, { MY_PAGE_PATH } from "./pages/MyPage";
import DiaryRecall, {
  DIARY_RECALL_PAGE_PATH,
} from "./pages/diarys/DiaryRecall";
import NoDiaryRecall, {
  NO_DIARY_RECALL_PAGE_PATH,
} from "./pages/diarys/NoDiaryRecall";
import RecentDiaries, {
  RECENT_DIARIES_PAGE_PATH,
} from "./pages/mypage/RecentDiaries";
import HelpWithAi, { HELP_WITH_AI_PATH } from "./pages/draws/HelpWithAi";
import ControlPhotoOpacity, {
  CONTROL_PHOTO_OPACITY_PAGE_PATH,
} from "./pages/draws/ControlPhotoOpacity";
import KeywordReferenceImages, {
  KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH,
} from "./pages/draws/KeywordReferenceImages";
import DiaryDetail, {
  DIARY_DETAIL_PAGE_PATH,
} from "./pages/diaryDetails/DiaryDetail";

function App() {
  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          {/* 네브바 */}
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={HOME_PAGE_PATH} element={<Home />} />
            <Route path={MY_PAGE_PATH} element={<MyPage />} />
          </Route>

          {/* 헤더바 */}
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
            <Route
              path={RECENT_DIARIES_PAGE_PATH}
              element={<RecentDiaries />}
            />
            <Route path={DIAGNOSIS_PAGE_PATH} element={<Diagnosis />} />
            <Route
              path={KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH}
              element={<KeywordReferenceImages />}
            />
            {/* 헤더바 + 종이 배경 */}
            <Route element={<PaperBackgroundWrapper />}>
              <Route path={DIARY_DETAIL_PAGE_PATH} element={<DiaryDetail />} />
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
