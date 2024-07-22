import ChatSendIcon from "../components/helpWithAi/icon/ChatSendIcon";
import { useEffect, useState } from "react";
import { useInput } from "../hooks/useInput";
import useChatWithAi from "../hooks/HelpWithAi/useChatWithAi";

export const HELP_WITH_AI_PATH = "/helpwithai";

const HelpWithAi = () => {
  let {
    ChatContainer,
    appendChatUserText,
    appendChatAiImage,
    appendChatAiText,
  } = useChatWithAi({ initChatLog: [] });

  // dummy data
  const [isFirstUseEffect, setIsFirstUseEffect] = useState(true);
  useEffect(() => {
    if (isFirstUseEffect) {
      setIsFirstUseEffect(false);
      return;
    }
    appendChatAiText({ text: "안녕하세요!" });
    appendChatAiImage({
      urls: [
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      ],
    });
    appendChatAiText({ text: "사진을 선택해 확대해 보세요!" });
    appendChatUserText({ text: "오 좋은데요?" });
  }, [isFirstUseEffect]);

  return (
    <div className={"h-heightWithOutHeader flex flex-col px-12 mobile:px-4"}>
      <ChatContainer
        className={`p-4 flex flex-col gap-4 flex-1 bg-aiHelpButton rounded-t-lg-xl overflow-y-scroll`}
      />
      <ChatBar appendChatUserText={appendChatUserText} />
    </div>
  );
};

const ChatBar = ({ appendChatUserText }) => {
  let { form, handleChangeInput } = useInput({
    chatInput: "",
  });

  let { chatInput } = form;

  const onSend = () => {
    appendChatUserText({ text: chatInput });
  };
  return (
    <div className={"mb-4 flex h-14"}>
      <input
        name={"chatInput"}
        value={chatInput}
        onChange={handleChangeInput}
        className={"flex-1 rounded-bl-lg-xl outline-none pl-2 text-2xl "}
        type="text"
      />
      <button
        onClick={onSend}
        className={"px-4 bg-aiHelpButton text-white font-bold rounded-br-lg-xl"}
      >
        <ChatSendIcon />
      </button>
    </div>
  );
};

export default HelpWithAi;
