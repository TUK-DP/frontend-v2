import ChatSendIcon from "../../components/helpWithAi/icon/ChatSendIcon";
import { useInput } from "../../hooks/inputs/useInput";
import useChatWithAi from "../../hooks/HelpWithAi/useChatWithAi";
import useGenerateImage from "../../hooks/HelpWithAi/query/useGenerateImage";

export const HELP_WITH_AI_PATH = "/helpwithai";

const HelpWithAi = ({ keyword = "바나나" }) => {
  let { ChatContainer } = useChatWithAi({ keyword });

  return (
    <div className={"h-heightWithOutHeader flex flex-col px-12 mobile:px-4"}>
      <ChatContainer
        className={`p-4 flex flex-col gap-4 flex-1 bg-aiHelpButton rounded-t-lg-xl overflow-y-scroll`}
      />
      <ChatBar keyword={keyword} />
    </div>
  );
};

const ChatBar = ({ keyword }) => {
  let { form, handleChangeInput, setForm } = useInput({
    chatInput: "",
  });

  let { chatInput } = form;

  const { isMutating, mutate } = useGenerateImage();

  const onSend = async () => {
    if (chatInput === "") return;

    mutate(chatInput);
    await setForm({ chatInput: "" });
  };
  return (
    <div className={"mb-4 flex h-14"}>
      <input
        name={"chatInput"}
        value={chatInput}
        placeholder={
          isMutating
            ? "AI가 답변중입니다..."
            : `현재 키워드는 ${keyword} 입니다.`
        }
        onChange={handleChangeInput}
        className={"flex-1 rounded-bl-lg-xl outline-none pl-2 text-2xl "}
        type="text"
      />
      <button
        disabled={isMutating}
        onClick={onSend}
        className={"px-4 bg-aiHelpButton text-white font-bold rounded-br-lg-xl"}
      >
        <ChatSendIcon />
      </button>
    </div>
  );
};

export default HelpWithAi;
