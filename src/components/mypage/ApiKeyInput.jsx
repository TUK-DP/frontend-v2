import AccordionWrapper from "../wrapper/AccordionWrapper";
import Button from "../Button";
import MyPageItem from "./MyPageItem";
import useApiKeyStore from "../../stores/ApiKeyStore";

const ApiKeyInput = ({ isOpen, onClick }) => {
  const { apiKey, setApiKey } = useApiKeyStore((state) => state);

  return (
    <>
      <MyPageItem title={"API KEY 입력"} isOpen={isOpen} onClick={onClick} />
      <AccordionWrapper isOpen={isOpen}>
        <div className={"flex flex-col gap-4 items-end"}>
          <input
            value={apiKey}
            onChange={(e) => {
              setApiKey(e.target.value);
            }}
            type="text"
            className={
              "w-full outline-none border-2 border-black rounded-lg text-2xl p-2"
            }
          />
          <Button
            onClick={onClick}
            className={"bg-[#6100C1] text-white p-2 px-10"}
            text={"완료"}
          />
        </div>
      </AccordionWrapper>
    </>
  );
};

export default ApiKeyInput;
