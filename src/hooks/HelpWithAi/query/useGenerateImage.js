import { useIsMutating, useMutation } from "@tanstack/react-query";
import ImageController from "../../../apis/image.controller";
import useChatLogStore from "../../../stores/ChatLogStore";
import { delay } from "../../../utils/api/delay";
import { useKeywordStore } from "../../../stores/KeywordStore";
import useFetchKeywords from "../../canvas/useFetchKeywords";
import useApiKeyStore from "../../../stores/ApiKeyStore";
import { AxiosError } from "axios";

export const IMAGE_STATE = {
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
};

const useGenerateImage = () => {
  const { appendChatUserText, appendChatAiImage, appendChatAiText } =
    useChatLogStore((state) => state);
  const { selectedKeyword } = useKeywordStore((state) => state);
  const { apiKey } = useApiKeyStore((state) => state);
  const { isKeywordEmpty } = useFetchKeywords();

  const {
    data: urls,
    mutate,
    error,
  } = useMutation({
    mutationKey: ["generating"],
    mutationFn: async ([chatInput, n]) => {
      // 키워드가 비어있지 않고, 입력한 문장에 키워드가 포함되어 있지 않으면 에러 발생
      if (!isKeywordEmpty && !chatInput.includes(selectedKeyword.keyword)) {
        throw new Error("키워드를 포함해서 입력해주세요.");
      }

      let response;

      response = await ImageController.generateImage({
        password: apiKey?.trim() ? apiKey : "쓰레기값",
        prompt: chatInput,
        n,
      });

      const taskId = response.data.result.taskId;

      while (true) {
        response = await ImageController.checkState({ taskId });

        const state = response.data.result.state;

        if (state === IMAGE_STATE.PENDING) {
          await delay(500);
          continue;
        }
        if (state === IMAGE_STATE.FAILURE) {
          throw new Error();
        }

        return response.data.result.result;
      }
    },

    onMutate: async ([chatInput, n]) => {
      await appendChatUserText({ text: chatInput });
    },

    onSuccess: async (urls) => {
      await appendChatAiImage({ urls });
    },

    onError: async (error) => {
      if (error instanceof AxiosError) {
        error.message =
          "이미지 생성에 실패했습니다. \n 잠시후 다시 시도해 주세요";
      }
      console.error(error);
      await appendChatAiText({ text: error.message });
    },
  });

  const isMutating = useIsMutating({
    mutationKey: ["generating"],
  });

  return { isMutating: isMutating === 1, urls, mutate, error };
};

export default useGenerateImage;
