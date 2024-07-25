/**
 * @param content
 * @param className
 * @param controlState {ControlState}
 * @param setControlState
 * @param props
 * @return {Element}
 */
const DiaryControlButton = ({
  content,
  className,
  controlState,
  setControlState,
  ...props
}) => {
  const handleClick = (e) => {
    if (content === "") {
      setControlState({
        ...controlState,
        message: "일기를 입력해주세요.",
      });
      return;
    }

    setControlState({
      ...controlState,
      isEditActive: false,
      controlButtonActive: false,
      controlButtonMessage: "",
    });
  };

  return (
    <>
      <div className={"text-2xl text-red-600 text-center"}>
        {controlState.controlButtonMessage}
      </div>
      <button
        disabled={!controlState.controlButtonActive}
        onClick={handleClick}
        className={`border-2 bg-secondary-400 rounded-lg text-2xl py-3 ${className}`}
        {...props}
      >
        {controlState.controlButtonText}
      </button>
    </>
  );
};

export default DiaryControlButton;
