import React, { useEffect, useRef, useState } from "react";
import useChatLogStore from "../../stores/ChatLogStore";

const useChatWithAi = ({ keyword }) => {
  const chatContainerRef = useRef();

  const { chatLog, setChatContainerRef, appendChatAiText } = useChatLogStore(
    (state) => state
  );

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
    if (isFirstUseEffect) {
      setIsFirstUseEffect(false);
      return;
    }
    setChatContainerRef(chatContainerRef);
    appendChatAiText({ text: `현재 키워드는 "${keyword}" 입니다.` });
  }, [isFirstUseEffect]);

  return {
    ChatContainer,
  };
};

export default useChatWithAi;
