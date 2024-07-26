import KeywordReferenceImages, {
  KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH,
} from "../pages/draws/KeywordReferenceImages";
import { Route } from "react-router-dom";
import React from "react";
import DiaryDraw, { DIARY_DRAW_PAGE_PATH } from "../pages/draws/DiaryDraw";
import HelpWithAi, { HELP_WITH_AI_PATH } from "../pages/draws/HelpWithAi";
import PaperBackgroundWrapper from "../components/diary/PaperBackgroundWrapper";
import ControlPhotoOpacity, {
  CONTROL_PHOTO_OPACITY_PAGE_PATH,
} from "../pages/draws/ControlPhotoOpacity";

const DiaryAndDrawRoutes = () => {
  return (
    <>
      <Route
        path={KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH}
        element={<KeywordReferenceImages />}
      />
      <Route
        path={CONTROL_PHOTO_OPACITY_PAGE_PATH}
        element={<ControlPhotoOpacity />}
      />
      <Route element={<PaperBackgroundWrapper />}>
        <Route path={DIARY_DRAW_PAGE_PATH} element={<DiaryDraw />} />
        <Route path={HELP_WITH_AI_PATH} element={<HelpWithAi />} />
      </Route>
    </>
  );
};

export default DiaryAndDrawRoutes;
