import ChatSendIcon from "../../components/helpWithAi/icon/ChatSendIcon";
import { useState } from "react";
import { useInput } from "../../hooks/inputs/useInput";
import useChatWithAi from "../../hooks/HelpWithAi/useChatWithAi";
import useChatLogStore from "../../stores/ChatLogStore";

export const HELP_WITH_AI_PATH = "/helpwithai";

const HelpWithAi = ({ keyword = "바나나" }) => {
  let { ChatContainer } = useChatWithAi({ keyword });

  return (
    <div className={"h-heightWithOutHeader flex flex-col px-12 mobile:px-4"}>
      <ChatContainer
        className={`p-4 flex flex-col gap-4 flex-1 bg-aiHelpButton rounded-t-lg-xl overflow-y-scroll`}
      />
      <ChatBar />
    </div>
  );
};

const ChatBar = () => {
  const { appendChatUserText, appendChatAiImage } = useChatLogStore(
    (state) => state
  );
  const [isFetching, setIsFetching] = useState(false);

  let { form, handleChangeInput, setForm } = useInput({
    chatInput: "",
  });

  let { chatInput } = form;

  const onSend = async () => {
    await appendChatUserText({ text: chatInput });
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
