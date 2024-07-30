import { useIsMutating, useMutation } from "@tanstack/react-query";
import ImageController from "../../../apis/image.controller";
import useChatLogStore from "../../../stores/ChatLogStore";

const useGenerateImage = () => {
  const { appendChatUserText, appendChatAiImage } = useChatLogStore(
    (state) => state
  );

  const { data: urls, mutate } = useMutation({
    mutationKey: ["generating"],
    mutationFn: async (chatInput) => {
      // await delay();
      const response = await ImageController.generateImage({
        prompt: chatInput,
        n: 3,
      });
      return response.data.result.urls;
    },

    onMutate: async (chatInput) => {
      await appendChatUserText({ text: chatInput });
    },

    onSuccess: async (urls) => {
      await appendChatAiImage({ urls });
    },
  });

  const isMutating = useIsMutating({
    mutationKey: ["generating"],
  });

  return { isMutating: isMutating === 1, urls, mutate };
};

export default useGenerateImage;
