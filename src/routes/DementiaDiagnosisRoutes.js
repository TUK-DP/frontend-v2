import { Route } from "react-router-dom";
import DiagnosisResult, {
  DIAGNOSIS_RESULT_PAGE_PATH,
} from "../pages/dementiaDiagnosis/DiagnosisResult";
import DiagnosisGuide, {
  DIAGNOSIS_GUIDE_PAGE_PATH,
} from "../pages/dementiaDiagnosis/DiagnosisGuide";
import Diagnosis, {
  DIAGNOSIS_PAGE_PATH,
} from "../pages/dementiaDiagnosis/Diagnosis";

const DementiaDiagnosisRoutes = () => {
  return (
    <>
      <Route path={DIAGNOSIS_GUIDE_PAGE_PATH} element={<DiagnosisGuide />} />
      <Route path={DIAGNOSIS_PAGE_PATH} element={<Diagnosis />} />
      <Route path={DIAGNOSIS_RESULT_PAGE_PATH} element={<DiagnosisResult />} />
    </>
  );
};

export default DementiaDiagnosisRoutes;
