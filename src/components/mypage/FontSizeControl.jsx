import { useState } from "react";
import AccordionWrapper from "../wrapper/AccordionWrapper";
import Button from "../Button";
import MyPageItem from "./MyPageItem";
import useFontSizeStore from "../../stores/FontSizeStore";

const FontSizeControl = ({ isOpen, onClick = () => {} }) => {
  const BUTTONS = [
    { title: "작게", size: "12px" },
    { title: "중간", size: "14px" },
    { title: "크게", size: "18px" },
  ];

  // 기본 선택 중인 폰트 크기 설정 (중간)
  const [selectedFontButton, setSelectedFontButton] = useState(BUTTONS[1]);
  const setFontSize = useFontSizeStore((state) => state.setFontSize);

  const onClickButton = ({ title, size }) => {
    setSelectedFontButton({ title, size });
    setFontSize(size);
  };

  return (
    <>
      <MyPageItem title={"글씨 크기 조절"} isOpen={isOpen} onClick={onClick} />
      <AccordionWrapper isOpen={isOpen}>
        <div className={"flex justify-between gap-3"}>
          {BUTTONS.map((button) => (
            <Button
              key={button.title}
              className={`p-2 max-w-40 w-full text-nowrap cursor-pointer
              ${button.size === selectedFontButton.size ? "bg-[#6100C1] text-white" : "border-[#6100C1] text-black"}`}
              text={button.title}
              onClick={() => onClickButton(button)}
            />
          ))}
        </div>
      </AccordionWrapper>
    </>
  );
};

export default FontSizeControl;
