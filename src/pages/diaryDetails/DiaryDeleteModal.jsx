import { useEffect } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useNavigate } from "react-router-dom";
import useDeleteDiary from "../../hooks/diaryDetail/queries/useDeleteDiary";
import { DIARY_PAGE_PATH } from "../diarys/Diary";

const DiaryDeleteModal = ({ setIsDeleteModalOpen }) => {
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

export default DiaryDeleteModal;
