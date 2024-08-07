import { Image } from "antd";
import { useAiImageStore } from "../../../stores/AiImagesStore";
import { useKeywordStore } from "../../../stores/KeywordStore";

export const ImageBlock = ({
  suggestImageSrcList = [
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
  ],
}) => {
  return suggestImageSrcList.map((src, index) => (
    <SuggestImage key={index} imageSrc={src} />
  ));
};

const SuggestImage = ({ imageSrc }) => {
  const { setAiImages } = useAiImageStore();
  const { selectedKeyword } = useKeywordStore();
  const handleClickSelectButton = (imageSrc) => {
    setAiImages(selectedKeyword.keywordId, imageSrc);
  };
  return (
    <div className={"w-[250px] border-[1px] rounded-lg-xl overflow-clip"}>
      <Image
        preview={{
          mask: <span className={"text-xl font-bold"}>크게 보기</span>,
          toolbarRender: () => {},
        }}
        className={"object-cover"}
        rootClassName={"block"}
        width={250}
        height={250}
        src={imageSrc}
      />
      <div
        onClick={() => {
          handleClickSelectButton(imageSrc);
        }}
        className={
          "cursor-pointer bg-primary-600 h-14 font-bold text-2xl text-white flex justify-center items-center"
        }
      >
        선택
      </div>
    </div>
  );
};
