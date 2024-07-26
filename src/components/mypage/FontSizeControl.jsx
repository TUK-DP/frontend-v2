import { useState } from "react";
import AccordionWrapper from "../wrapper/AccordionWrapper";
import Button from "../Button";
import MyPageItem from "./MyPageItem";

const FontSizeControl = ({ isOpen, onClick = () => {} }) => {
  const BUTTONS = [
    { title: "작게", size: "12px" },
    { title: "중간", size: "14px" },
    { title: "크게", size: "18px" },
  ];

  // 기본 선택 중인 폰트 크기 설정 (중간)
  const [selectedFontButton, setSelectedFontButton] = useState(BUTTONS[1]);

  const onClickButton = (size, title) => {
    setSelectedFontButton(
      BUTTONS.find(({ title: btnTitle }) => btnTitle === title)
    );
    document.documentElement.style.fontSize = size;
  };

  return (
    <>
      <MyPageItem title={"글씨 크기 조절"} isOpen={isOpen} onClick={onClick} />
      <AccordionWrapper isOpen={isOpen}>
        <div className={"flex justify-between gap-3"}>
          {BUTTONS.map(({ title, size }) => (
            <Button
              key={title}
              className={`p-2 max-w-40 w-full text-nowrap cursor-pointer
              ${size === selectedFontButton.size ? "bg-[#6100C1] text-white" : "border-[#6100C1] text-black"}`}
              text={title}
              onClick={() => onClickButton(size, title)}
            />
          ))}
        </div>
      </AccordionWrapper>
    </>
  );
};

export default FontSizeControl;
