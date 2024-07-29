import { create } from "zustand";
import ChatUserText from "../components/helpWithAi/ChatUserText";
import ChatAiText from "../components/helpWithAi/ChatAiText";
import ChatAiImage from "../components/helpWithAi/ChatAiImage";

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
  chatLog: [...INIT_CHAT_LOG],

  chatContainerRef: null,

  setChatContainerRef: (ref) => {
    set({ chatContainerRef: ref });
  },

  chatScrollToBottom: () => {
    const { chatContainerRef } = get();
    if (chatContainerRef && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  },

  appendChatUserText: async ({ text }) => {
    await set((state) => ({
      chatLog: [...state.chatLog, { Comp: ChatUserText, text }],
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
    await set((state) => ({
      chatLog: [...state.chatLog, { Comp: ChatAiImage, urls }],
    }));
    get().chatScrollToBottom();
  },
}));

export default useChatLogStore;
