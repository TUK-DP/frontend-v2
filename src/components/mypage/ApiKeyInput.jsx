import AccordionWrapper from "../wrapper/AccordionWrapper";
import Button from "../Button";
import MyPageItem from "./MyPageItem";

const ApiKeyInput = ({ isOpen, onClick }) => {
  return (
    <>
      <MyPageItem title={"API KEY 입력"} isOpen={isOpen} onClick={onClick} />
      <AccordionWrapper isOpen={isOpen}>
        <div className={"flex flex-col gap-4 items-end"}>
          <input
            type="text"
            className={
              "w-full outline-none border-2 border-black rounded-lg text-2xl p-2"
            }
          />
          <Button
            className={"bg-[#6100C1] text-white p-2 px-10"}
            text={"완료"}
          />
        </div>
      </AccordionWrapper>
    </>
  );
};

export default ApiKeyInput;
