import ChatSendIcon from "../components/helpWithAi/icon/ChatSendIcon";
import { useRef, useState } from "react";
import { useInput } from "../hooks/useInput";
import ChatAiText from "../components/helpWithAi/ChatAiText";
import ChatAiImage from "../components/helpWithAi/ChatAiImage";
import ChatUserText from "../components/helpWithAi/ChatUserText";

export const HELP_WITH_AI_PATH = "/helpwithai";

const HelpWithAi = () => {
  const [chatLog, setChatLog] = useState([
    {
      Comp: ChatAiText,
      text: "안녕하세요!",
    },
    {
      Comp: ChatAiImage,
      urls: [
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
        "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      ],
    },
    {
      Comp: ChatAiText,
      text: "사진을 선택해 확대해 보세요!",
    },
  ]);

  const chatContainerRef = useRef(null);

  const appendUserChat = async ({ text }) => {
    let newChat = { Comp: ChatUserText, text };
    await setChatLog((pre) => [...pre, newChat]);
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  return (
    <>
      <div className={"relative h-heightWithOutHeader flex flex-col px-4"}>
        <div
          ref={chatContainerRef}
          className={
            "p-4 flex flex-col gap-4 flex-1 bg-aiHelpButton rounded-t-lg-xl overflow-y-scroll"
          }
        >
          {chatLog.map(({ Comp, ...props }, index) => (
            <Comp key={index} {...props} />
          ))}
        </div>
        <ChatBar appendUserChat={appendUserChat} />
      </div>
    </>
  );
};

const ChatBar = ({ appendUserChat }) => {
  let { form, handleChangeInput } = useInput({
    chatInput: "",
  });

  let { chatInput } = form;

  const onSend = () => {
    appendUserChat({ text: chatInput });
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
