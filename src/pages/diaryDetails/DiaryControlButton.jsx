import Spinner from "../../components/Spinner";
import useCreateDiary from "../../hooks/diaryDetail/queries/useCreateDiary";
import useUpdateDiary from "../../hooks/diaryDetail/queries/useUpdateDiary";
import useFetchDiary from "../../hooks/diary/queries/useFetchDiary";
import useDeleteDiary from "../../hooks/diaryDetail/queries/useDeleteDiary";
import { useNavigate } from "react-router-dom";
import { DIARY_PAGE_PATH } from "../diarys/Diary";
import { useEffect, useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const isMutating = create.isMutating || update.isMutating;

  return (
    <>
      <div className={`whitespace-pre text-2xl text-red-600 text-center`}>
        {isMutating
          ? "키워드 추출중입니다!"
          : controlState.controlButtonMessage}
      </div>
      <div className={"w-full flex gap-12 mobile:gap-4"}>
        <button
          disabled={isMutating}
          onClick={() =>
            handleClick(() => {
              isDiaryExist ? update.mutate(content) : create.mutate(content);
            })
          }
          className={`flex-1 border-2 bg-secondary-400 rounded-lg text-2xl py-3 ${className}`}
          {...props}
        >
          {isMutating && <Spinner color={"black"} />}
          {!isMutating && controlState.controlButtonText}
        </button>
        {isDiaryExist && !isMutating && (
          <button
            onClick={() => {
              setIsDeleteModalOpen(true);
              // disableBodyScroll(document.body);
            }}
            className={`flex-1 border-2 bg-red-500 text-white rounded-lg text-2xl py-3 ${className}`}
          >
            삭제
          </button>
        )}
        {isDeleteModalOpen && (
          <DeleteModal
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        )}
      </div>
    </>
  );
};

const DeleteModal = ({ isDeleteModalOpen, setIsDeleteModalOpen }) => {
  useEffect(() => {
    disableBodyScroll(document.body);

    return () => {
      enableBodyScroll(document.body);
    };
  }, []);

  const navigate = useNavigate();
  const _delete = useDeleteDiary();

  return (
    <>
      <div // This div is used to prevent the user from clicking the background
        // onDrag={(e) => e.preventDefault()}
        onClick={(e) => setIsDeleteModalOpen(false)}
        className={"fixed w-screen h-screen inset-0 bg-black opacity-30"}
      />
      <div
        className={
          "fixed -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 " +
          "bg-white border-2 rounded-lg w-[80%] h-80 " +
          "flex flex-col items-center " +
          "text-2xl px-4 py-10 z-10"
        }
      >
        <div className={"flex-1 flex items-center"}>
          일기를 삭제하시겠습니까?
        </div>
        <div className={"w-full flex gap-4 justify-between"}>
          <button
            onClick={() => setIsDeleteModalOpen(false)}
            className={"flex-1 border-2 p-2 rounded-lg"}
          >
            취소
          </button>
          <button
            onClick={() => {
              _delete.mutate();
              navigate(DIARY_PAGE_PATH);
            }}
            className={"flex-1 border-2 p-2 rounded-lg bg-red-500 text-white"}
          >
            삭제
          </button>
        </div>
      </div>
    </>
  );
};

export default DiaryControlButton;
