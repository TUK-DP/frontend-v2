import { AiProfile } from "./AiProfile";
import { TextBlock } from "./TextBlock";

export const AiText = ({ text = "기본 텍스트 입니다." }) => {
  return (
    <div className={"flex items-start"}>
      <AiProfile />
      <TextBlock text={text} />
    </div>
  );
};
