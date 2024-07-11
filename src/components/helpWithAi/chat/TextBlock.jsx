export const TextBlock = ({ text, className }) => {
  return (
    <div
      className={
        "mx-4 break-words border-2 font-bold py-2 px-2 rounded-lg-xl max-w-chatTextMaxWidth" +
        " " +
        className
      }
    >
      {text}
    </div>
  );
};
