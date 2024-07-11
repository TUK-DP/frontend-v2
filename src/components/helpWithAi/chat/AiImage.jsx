import { AiProfile } from "./AiProfile";
import { Image } from "antd";
import { TextBlock } from "./TextBlock";

export const AiImage = ({
  suggestImageSrcList = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  ],
}) => {
  return (
    <div className={"flex items-start"}>
      <AiProfile />
      <div className={"flex flex-col gap-8"}>
        <TextBlock
          text={
            "AI가 제안하는 그림들 입니다! 사진을 선택해 크게 보고 선택을 눌러 그림에 적용하세요!"
          }
        />
        {suggestImageSrcList.map((src, index) => (
          <SuggestImage key={index} imageSrc={src} />
        ))}
      </div>
    </div>
  );
};

const SuggestImage = ({ imageSrc }) => {
  return (
    <div className={"mx-4 w-[250px] border-[1px] rounded-lg-xl overflow-clip"}>
      <Image
        preview={{
          mask: <span className={"text-xl font-bold"}>크게 보기</span>,
        }}
        className={"object-cover"}
        rootClassName={"block"}
        width={250}
        height={250}
        src={imageSrc}
      />
      <div
        className={
          "cursor-pointer bg-primary-600 h-14 font-bold text-2xl text-white flex justify-center items-center"
        }
      >
        선택
      </div>
    </div>
  );
};
