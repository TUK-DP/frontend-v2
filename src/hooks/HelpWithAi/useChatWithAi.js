import React, { useCallback, useEffect } from "react";
import useChatLogStore from "../../stores/ChatLogStore";
import useGenerateImage from "./query/useGenerateImage";

const useChatWithAi = ({ keyword }) => {
  const { isMutating } = useGenerateImage();
  const { chatLog, chatContainerRef, initialChatLog, chatScrollToBottom } =
    useChatLogStore((state) => state);

  const ChatContainer = useCallback(
    ({ className, ...props }) => (
      <div ref={chatContainerRef} className={`${className}`} {...props}>
        {chatLog.map(({ Comp, ...props }, index) => (
          <Comp key={index} {...props} />
        ))}
      </div>
    ),
    [chatLog]
  );

  // 처음에만 실행 chatLog 초기화
  useEffect(() => {
    if (isMutating) return;
    initialChatLog({ keyword });
  }, [keyword]);

  // chatLog이 업데이트 될 때마다 맨 아래로 이동
  useEffect(() => {
    chatScrollToBottom();
  }, [chatLog]);

  return {
    ChatContainer,
  };
};

export default useChatWithAi;
