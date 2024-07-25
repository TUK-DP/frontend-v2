import {
  useIsMutating,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useCalendarStore } from "../../stores/CalendarStore";
import { delay } from "../../utils/api/delay";
import { diaryCheckQueryKey } from "../../hooks/diary/queries/useFetchDiaryChecks";
import useFetchDiary, {
  diaryQueryKey,
} from "../../hooks/diary/queries/useFetchDiary";
import { yearMonthToDashString } from "../../utils/api/dateConverter";
import Spinner from "../../components/Spinner";

/**
 * @param content {string}
 * @param className {string}
 * @param controlState {ControlState}
 * @param handleClick {(whenDiaryAction : () => void) => void}
 * @param props {React.HTMLProps}
 */
const DiaryControlButton = ({
  content,
  className,
  controlState,
  handleClick,
  ...props
}) => {
  const { selectedDate, selectedYearMonth } = useCalendarStore(
    (state) => state
  );

  let { isDiaryExist } = useFetchDiary();

  let queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["diary", selectedDate],
    mutationFn: async () => {
      await delay(100000);
      // return await DiaryController.postDiary({
      //   userId: 2,
      //   content,
      //   date: dateToDashString(selectedDate),
      // })
    },
    onMutate: async () => {
      // 일기 저장 전에 일기가 있는지 확인
      if (isDiaryExist) return;

      queryClient.setQueryData(
        diaryCheckQueryKey(selectedYearMonth),
        (old) => ({
          [yearMonthToDashString(selectedYearMonth)]: {
            ...old[yearMonthToDashString(selectedYearMonth)],
            [selectedDate.day]: { isExist: true },
          },
        })
      );

      queryClient.setQueryData(diaryQueryKey(selectedDate), (old) => ({
        ...old,
        content,
        keywords: [],
      }));
    },
    onSuccess: async () => {
      // 일기 저장 성공시
      await queryClient.invalidateQueries(
        diaryCheckQueryKey(selectedYearMonth)
      );
      await queryClient.invalidateQueries(diaryQueryKey(selectedDate));
    },
  });
  const isMutating = useIsMutating(["diary", selectedDate]);

  return (
    <>
      <div
        className={`whitespace-pre text-2xl text-red-600 text-center ${controlState.controlButtonMessage === " " ? "invisible" : "visible"}`}
      >
        {controlState.controlButtonMessage}
      </div>
      <button
        disabled={isMutating || !controlState.controlButtonActive}
        onClick={() => handleClick(mutate)}
        className={`border-2 bg-secondary-400 rounded-lg text-2xl py-3 ${className}`}
        {...props}
      >
        {isMutating ? (
          <Spinner color={"black"} />
        ) : (
          controlState.controlButtonText
        )}
      </button>
    </>
  );
};

export default DiaryControlButton;
