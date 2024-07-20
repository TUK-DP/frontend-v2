import React, { useRef, useState } from "react";
import ChatUserText from "../../components/helpWithAi/ChatUserText";
import ChatAiText from "../../components/helpWithAi/ChatAiText";
import ChatAiImage from "../../components/helpWithAi/ChatAiImage";

const useChatWithAi = ({ initChatLog }) => {
  const [chatLog, setChatLog] = useState(initChatLog);

  const chatContainerRef = useRef(null);

  const chatScrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  const chatScrollToTop = () => {
    chatContainerRef.current.scrollTop = 0;
  };

  const ChatContainer = ({ className, ...props }) => {
    return (
      <div ref={chatContainerRef} className={`${className}`} {...props}>
        {chatLog.map(({ Comp, ...props }, index) => (
          <Comp key={index} {...props} />
        ))}
      </div>
    );
  };

  const appendChatUserText = async ({ text }) => {
    await setChatLog((pre) => [...pre, { Comp: ChatUserText, text }]);
    chatScrollToBottom();
  };

  const appendChatAiText = async ({ text }) => {
    await setChatLog((pre) => [...pre, { Comp: ChatAiText, text }]);
    chatScrollToBottom();
  };

  const appendChatAiImage = async ({ urls = [] }) => {
    await setChatLog((pre) => [...pre, { Comp: ChatAiImage, urls }]);
    chatScrollToBottom();
  };

  return {
    ChatContainer,
    appendChatUserText,
    appendChatAiText,
    appendChatAiImage,
    chatScrollToTop,
    chatScrollToBottom,
  };
};

export default useChatWithAi;
