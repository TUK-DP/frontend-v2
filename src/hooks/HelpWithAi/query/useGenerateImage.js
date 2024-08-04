import { useIsMutating, useMutation } from "@tanstack/react-query";
import ImageController from "../../../apis/image.controller";
import useChatLogStore from "../../../stores/ChatLogStore";
import { delay } from "../../../utils/api/delay";

export const IMAGE_STATE = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

const useGenerateImage = () => {
  const { appendChatUserText, appendChatAiImage, appendChatAiText } =
    useChatLogStore((state) => state);

  const {
    data: urls,
    mutate,
    error,
  } = useMutation({
    mutationKey: ["generating"],
    mutationFn: async (chatInput) => {
      // throw new Error("AI 이미지 생성에 실패했습니다.");

      await delay(1000);

      // await delay();
      let response = await ImageController.generateImage({
        prompt: chatInput,
        n: 3,
      });

      const taskId = response.data.result.taskId;

      while (true) {
        response = await ImageController.checkState({ taskId });

        const state = response.data.result.state;

        if (state === IMAGE_STATE.PENDING) {
          await delay(500);
          continue;
        }
        throw new Error("AI 이미지 생성에 실패했습니다.");
        // if (state === IMAGE_STATE.FAILURE) {
        //   throw new Error("AI 이미지 생성에 실패했습니다.");
        // }

        return response.data.result.result;
      }
    },

    onMutate: async (chatInput) => {
      await appendChatUserText({ text: chatInput });
    },

    onSuccess: async (urls) => {
      await appendChatAiImage({ urls });
    },

    onError: async (error) => {
      await appendChatAiText({ text: "오류입니다 잠시후 다시 시도해 주세요" });
    },
  });

  const isMutating = useIsMutating({
    mutationKey: ["generating"],
  });

  return { isMutating: isMutating === 1, urls, mutate, error };
};

export default useGenerateImage;
