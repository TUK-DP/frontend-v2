import { useEffect } from "react";
import { useKeywordStore } from "../../stores/KeywordStore";

const useGoSelectedKeyword = (keywordSliderRef) => {
  const { index } = useKeywordStore();
  useEffect(() => {
    if (keywordSliderRef.current && index) {
      keywordSliderRef.current.slickGoTo(index, true);
    }
  }, [index]);
};
export default useGoSelectedKeyword;
