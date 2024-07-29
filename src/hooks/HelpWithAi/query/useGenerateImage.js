import { useIsMutating, useMutation } from "@tanstack/react-query";
import ImageController from "../../../apis/image.controller";
import useChatLogStore from "../../../stores/ChatLogStore";
import Spinner from "../../../components/Spinner";
import { delay } from "../../../utils/api/delay";

const useGenerateImage = () => {
  const {
    appendChatUserText,
    appendChatAiImage,
    appendChatAiText,
    popChatLog,
  } = useChatLogStore((state) => state);

  const { data: urls, mutate } = useMutation({
    mutationKey: ["generating"],
    mutationFn: async (chatInput) => {
      await delay(10000);
      const response = await ImageController.generateImage({
        prompt: chatInput,
        n: 3,
      });
      return response.data.result.urls;
    },

    onMutate: async (chatInput) => {
      await appendChatUserText({ text: chatInput });
      await appendChatAiText({ text: <Spinner color={"black"} /> });
    },

    onSuccess: async (urls) => {
      await popChatLog();
      await appendChatAiImage({ urls });
    },
  });

  const isMutating = useIsMutating({
    mutationKey: ["generating"],
  });

  return { isMutating: isMutating === 1, urls, mutate };
};

export default useGenerateImage;
