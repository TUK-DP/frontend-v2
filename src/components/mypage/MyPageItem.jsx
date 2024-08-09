const MyPageItem = ({ title, isOpen, onClick = () => {} }) => {
  return (
    <div onClick={onClick} className={"flex justify-between cursor-pointer"}>
      <h1 className={"text-xl"}>{title}</h1>
      <div className={"text-2xl"}>{isOpen ? "▲" : "▼"}</div>
    </div>
  );
};

export default MyPageItem;
