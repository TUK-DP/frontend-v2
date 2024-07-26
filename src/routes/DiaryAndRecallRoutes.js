import { Route } from "react-router-dom";
import Diary, { DIARY_PAGE_PATH } from "../pages/diarys/Diary";
import DiaryRecall, {
  DIARY_RECALL_PAGE_PATH,
} from "../pages/diarys/DiaryRecall";
import NoDiaryRecall, {
  NO_DIARY_RECALL_PAGE_PATH,
} from "../pages/diarys/NoDiaryRecall";
import React from "react";
import DiaryDetail, {
  DIARY_DETAIL_PAGE_PATH,
} from "../pages/diaryDetails/DiaryDetail";
import PaperBackgroundWrapper from "../components/diary/PaperBackgroundWrapper";

const DiaryAndRecallRoutes = () => {
  return (
    <>
      <Route path={DIARY_PAGE_PATH} element={<Diary />} />
      <Route path={DIARY_RECALL_PAGE_PATH} element={<DiaryRecall />} />
      <Route path={NO_DIARY_RECALL_PAGE_PATH} element={<NoDiaryRecall />} />
      <Route element={<PaperBackgroundWrapper />}>
        <Route path={DIARY_DETAIL_PAGE_PATH} element={<DiaryDetail />} />
      </Route>
    </>
  );
};

export default DiaryAndRecallRoutes;
