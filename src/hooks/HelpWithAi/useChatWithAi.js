import React, { useEffect, useRef, useState } from "react";
import useChatLogStore from "../../stores/ChatLogStore";
import useGenerateImage from "./query/useGenerateImage";

const useChatWithAi = ({ keyword }) => {
  const chatContainerRef = useRef();

  const { isMutating } = useGenerateImage();

  const { chatLog, setChatContainerRef, appendChatAiText, chatScrollToBottom } =
    useChatLogStore((state) => state);

  const ChatContainer = ({ className, ...props }) => {
    return (
      <div ref={chatContainerRef} className={`${className}`} {...props}>
        {chatLog.map(({ Comp, ...props }, index) => (
          <Comp key={index} {...props} />
        ))}
      </div>
    );
  };
  const [isFirstUseEffect, setIsFirstUseEffect] = useState(true);
  useEffect(() => {
    if (isMutating) return;

    if (isFirstUseEffect) {
      setIsFirstUseEffect(false);
      return;
    }
    setChatContainerRef(chatContainerRef);
    appendChatAiText({ text: `현재 키워드는 "${keyword}" 입니다.` });
  }, [isFirstUseEffect]);

  useEffect(() => {
    if (!chatContainerRef) return;
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, []);

  return {
    ChatContainer,
  };
};

export default useChatWithAi;
