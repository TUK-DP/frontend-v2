export const TextBlock = ({ className, children }) => {
  return (
    <div
      className={
        "mx-4 break-words border-2 font-bold py-2 px-2 text-xl rounded-lg-xl max-w-chatTextMaxWidth" +
        " " +
        className
      }
    >
      {children}
    </div>
  );
};
