import { useState } from "react";
import AccordionWrapper from "../wrapper/AccordionWrapper";
import Button from "../Button";
import MyPageItem from "./MyPageItem";

const FontSizeControl = ({ isOpen, onClick = () => {} }) => {
  const BUTTONS = [
    {
      title: "작게",
    },
    {
      title: "중간",
    },
    {
      title: "크게",
    },
  ];

  // 중간 선택중
  const [selectedFontButton, setSelectedFontButton] = useState(BUTTONS[1]);
  const onClickButton = (findTitle) => {
    setSelectedFontButton(BUTTONS.find(({ title }) => title === findTitle));
  };

  return (
    <>
      <MyPageItem title={"글씨 크기 조절"} isOpen={isOpen} onClick={onClick} />
      <AccordionWrapper isOpen={isOpen}>
        <div className={"flex justify-between gap-3"}>
          {BUTTONS.map(({ title }) => (
            <Button
              className={`p-2 max-w-40 w-full text-nowrap cursor-pointer
              ${
                title === selectedFontButton.title
                  ? "bg-[#6100C1] text-white"
                  : "border-[#6100C1] text-black"
              }`}
              text={title}
              onClick={() => onClickButton(title)}
            />
          ))}
        </div>
      </AccordionWrapper>
    </>
  );
};

export default FontSizeControl;
