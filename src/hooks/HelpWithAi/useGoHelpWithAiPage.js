import { useNavigate } from "react-router-dom";
import { HELP_WITH_AI_PATH } from "../../pages/draws/HelpWithAi";

const useGoHelpWithAiPage = () => {
  let navigate = useNavigate();

  const goHelpForAiPage = () => {
    navigate(HELP_WITH_AI_PATH);
  };

  return { goHelpForAiPage };
};

export default useGoHelpWithAiPage;
