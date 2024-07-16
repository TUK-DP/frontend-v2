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

function App() {
  return (
    <MobileResponsiveLayout>
      <BrowserRouter>
        <Routes>
          <Route exact element={<NavigationBarLayout />}>
            <Route exact path={HOME_PAGE_PATH} element={<Home />} />
          </Route>
          <Route element={<HeaderBarLayout />}>
            <Route
              path={DIAGNOSIS_GUIDE_PAGE_PATH}
              element={<DiagnosisGuide />}
            />
            <Route path={SIGNIN_PAGE_PATH} element={<Signin />} />
            <Route path={SIGNUP_PAGE_PATH} element={<Signup />} />
          </Route>
          <Route path={DIARY_PAGE_PATH} element={<Diary />} />
          <Route path={DIARY_DRAW_PAGE_PATH} element={<DiaryDraw />} />
        </Routes>
      </BrowserRouter>
    </MobileResponsiveLayout>
  );
}

export default App;
