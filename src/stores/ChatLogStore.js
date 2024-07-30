import { create } from "zustand";
import ChatUserText from "../components/helpWithAi/ChatUserText";
import ChatAiText from "../components/helpWithAi/ChatAiText";
import ChatAiImage from "../components/helpWithAi/ChatAiImage";
import Spinner from "../components/Spinner";
import React from "react";

const INIT_CHAT_LOG = [
  {
    Comp: ChatAiText,
    text: "키워드를 포함해서 작성하면\n 그림을 제공해드려요!",
  },
  {
    Comp: ChatAiText,
    text: '키워드를 포함해 문장을 입력해주세요!\n\n예시: \n "서핑하는 강아지 그려줘"',
  },
];

/**
 * {
 *   chatLog: [{
 *     Comp: ChatUserText | ChatAiText | ChatAiImage,
 *     text: string,
 *   }],
 * }
 */

const useChatLogStore = create((set, get) => ({
  keyword: "임시 키워드",

  chatLog: [],

  chatContainerRef: React.createRef(),

  chatScrollToBottom: () => {
    const { chatContainerRef } = get();

    if (chatContainerRef && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  },

  initialChatLog: ({ keyword }) => {
    // 이미 같은 키워드로 초기화 되어있으면 return
    // 키워드가 변경되었을 때만 초기화
    if (get().keyword === keyword) return;
    set((state) => ({
      chatLog: [
        ...INIT_CHAT_LOG,
        { Comp: ChatAiText, text: `현재 키워드는 "${keyword}" 입니다.` },
      ],
      keyword,
    }));
  },

  setKeyword: ({ keyword }) => {
    set((state) => ({
      keyword,
    }));
  },

  appendChatUserText: async ({ text }) => {
    set(({ chatLog }) => ({
      chatLog: [
        ...chatLog,
        { Comp: ChatUserText, text },
        { Comp: ChatAiText, text: <Spinner color={"black"} /> },
      ],
    }));
    get().chatScrollToBottom();
  },

  appendChatAiText: async ({ text }) => {
    await set((state) => ({
      chatLog: [...state.chatLog, { Comp: ChatAiText, text }],
    }));
    get().chatScrollToBottom();
  },

  appendChatAiImage: async ({ urls = [] }) => {
    // 마지막 ChatAiText (Spinner) 제거후 ChatAiImage 추가
    set(({ chatLog }) => ({
      chatLog: [...chatLog.slice(0, -1), { Comp: ChatAiImage, urls }],
    }));
    get().chatScrollToBottom();
  },
}));

export default useChatLogStore;
