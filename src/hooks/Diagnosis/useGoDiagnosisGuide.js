import { useNavigate } from "react-router-dom";
import { DIAGNOSIS_GUIDE_PAGE_PATH } from "../../pages/dementiaDiagnosis/DiagnosisGuide";

const useGoDiagnosisGuide = () => {
  let navigate = useNavigate();
  const goDiagnosisGuide = () => {
    navigate(DIAGNOSIS_GUIDE_PAGE_PATH);
  };

  return { goDiagnosisGuide };
};

export default useGoDiagnosisGuide;
