import { Chat, USER_CHAT } from "./chat/Chat";
import { TextBlock } from "./chat/TextBlock";

export const CHAT_USER_TEXT = "USER_TEXT_CHAT";

const ChatUserText = ({ text }) => {
  return (
    <Chat id={USER_CHAT}>
      <TextBlock>{text}</TextBlock>
    </Chat>
  );
};

export default ChatUserText;
