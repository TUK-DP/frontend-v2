import Spinner from "../../components/Spinner";
import useCreateDiary from "../../hooks/diaryDetail/queries/useCreateDiary";
import useUpdateDiary from "../../hooks/diaryDetail/queries/useUpdateDiary";
import useFetchDiary from "../../hooks/diary/queries/useFetchDiary";

/**
 * @param content {string}
 * @param className {string}
 * @param controlState {ControlState}
 * @param handleClick {(whenDiaryAction : () => any) => void}
 * @param props {React.HTMLProps}
 */
const DiaryControlButton = ({
  content,
  className,
  controlState,
  handleClick,
  ...props
}) => {
  let { isDiaryExist } = useFetchDiary();
  const create = useCreateDiary();
  const update = useUpdateDiary();

  const isMutating = create.isMutating || update.isMutating;

  return (
    <>
      <div className={`whitespace-pre text-2xl text-red-600 text-center`}>
        {isMutating
          ? "키워드 추출중입니다!"
          : controlState.controlButtonMessage}
      </div>
      <button
        disabled={isMutating}
        onClick={() =>
          handleClick(() => {
            isDiaryExist ? update.mutate(content) : create.mutate(content);
          })
        }
        className={`border-2 bg-secondary-400 rounded-lg text-2xl py-3 ${className}`}
        {...props}
      >
        {isMutating && <Spinner color={"black"} />}
        {!isMutating && controlState.controlButtonText}
      </button>
    </>
  );
};

export default DiaryControlButton;
