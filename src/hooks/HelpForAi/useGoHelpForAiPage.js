import { useNavigate } from "react-router-dom";
import { HELP_FOR_AI_PATH } from "../../pages/HelpForAi";

const useGoHelpForAiPage = () => {
  let navigate = useNavigate();

  const goHelpForAiPage = () => {
    navigate(HELP_FOR_AI_PATH);
  };

  return { goHelpForAiPage };
};

export default useGoHelpForAiPage;
