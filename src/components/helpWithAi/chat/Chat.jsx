import { TextBlock } from "./TextBlock";
import AiProfileIcon from "../icon/AiProfileIcon";

export const AI_CHAT = "AI";
export const USER_CHAT = "USER";

export const Chat = ({ id = AI_CHAT, children }) => {
  return (
    <div
      className={`flex gap-4 items-start 
    ${id === USER_CHAT && "justify-end"}`}
    >
      {id === AI_CHAT && <AiProfile />}
      <div className={"flex flex-col gap-6"}>{children}</div>
    </div>
  );
};

export const AiProfile = () => {
  return (
    <div
      className={
        "min-w-20 min-h-20 bg-white rounded-full border-[1px] flex justify-center items-center"
      }
    >
      <AiProfileIcon className={""} />
    </div>
  );
};
