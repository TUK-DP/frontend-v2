import { AI_CHAT, Chat } from "./chat/Chat";
import { ImageBlock } from "./chat/ImageBlock";

export const CHAT_AI_IMAGE = "CHAT_AI_IMAGE";

const ChatAiImage = ({ urls = [] }) => {
  return (
    <Chat id={AI_CHAT}>
      <ImageBlock suggestImageSrcList={urls} />
    </Chat>
  );
};

export default ChatAiImage;
