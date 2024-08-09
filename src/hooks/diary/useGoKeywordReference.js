import { useNavigate } from "react-router-dom";
import { KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH } from "../../pages/draws/KeywordReferenceImages";

const useGoKeywordReference = () => {
  let navigate = useNavigate();
  const goKeywordReferencePage = () => {
    navigate(KEYWORD_REFERENCE_DRAWING_VIEWER_PAGE_PATH);
  };
  return { goKeywordReferencePage };
};
export default useGoKeywordReference;
