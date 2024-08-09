import { AI_CHAT, Chat } from "./chat/Chat";
import { TextBlock } from "./chat/TextBlock";

export const CHAT_AI_TEXT = "CHAT_AI_TEXT";

const ChatAiText = ({ text }) => {
  return (
    <Chat id={AI_CHAT}>
      <TextBlock>{text}</TextBlock>
    </Chat>
  );
};

export default ChatAiText;
