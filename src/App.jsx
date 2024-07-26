import "./index.css";
import "./App.css";
import { useEffect } from "react";
import { useFontSize } from "./contexts/FontSizeContext";
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
import MyPage, { MY_PAGE_PATH } from "./pages/mypage/MyPage";
import NoDiaryRecall, {
  NO_DIARY_RECALL_PAGE_PATH,
} from "./pages/diarys/NoDiaryRecall";
import RecentDiaries, {
  RECENT_DIARIES_PAGE_PATH,
} from "./pages/mypage/RecentDiaries";
import HelpWithAi, { HELP_WITH_AI_PATH } from "./pages/draws/HelpWithAi";
import DementiaCenter, {
  DEMENTIA_CENTER_PAGE_PATH,
} from "./pages/dementiaCenter/DementiaCenter";
import ControlPhotoOpacity, {
  CONTROL_PHOTO_OPACITY_PAGE_PATH,
} from "./pages/draws/ControlPhotoOpacity";
import KeywordReferenceImages, {
  KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH,
} from "./pages/draws/KeywordReferenceImages";
import DiaryDetail, {
  DIARY_DETAIL_PAGE_PATH,
} from "./pages/diaryDetails/DiaryDetail";
import DiaryRecall, {
  DIARY_RECALL_PAGE_PATH,
} from "./pages/diarys/DiaryRecall";
import Gym, { GYM_PAGE_PATH } from "./pages/gym/Gym";
import DiagnosisResult, {
  DIAGNOSIS_RESULT_PAGE_PATH,
} from "./pages/dementiaDiagnosis/DiagnosisResult";

function App() {
  const { fontSize } = useFontSize();

  useEffect(() => {
    // 페이지 로드 시 폰트 크기 설정
    document.documentElement.style.fontSize = fontSize;
  }, [fontSize]);

  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          {/* 네브바 */}
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={HOME_PAGE_PATH} element={<Home />} />
          </Route>

          {/* 헤더바 */}
          <Route element={<HeaderBarLayout />}>
            <Route
              path={DIAGNOSIS_GUIDE_PAGE_PATH}
              element={<DiagnosisGuide />}
            />
            <Route path={MY_PAGE_PATH} element={<MyPage />} />
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
            <Route path={GYM_PAGE_PATH} element={<Gym />} />
            <Route path={DIAGNOSIS_PAGE_PATH} element={<Diagnosis />} />
            <Route
              path={KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH}
              element={<KeywordReferenceImages />}
            />

            <Route
              path={DEMENTIA_CENTER_PAGE_PATH}
              element={<DementiaCenter />}
            />

            <Route
              path={DIAGNOSIS_RESULT_PAGE_PATH}
              element={<DiagnosisResult />}
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
