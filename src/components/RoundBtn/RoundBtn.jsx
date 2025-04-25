import style from "./RoundBtn.module.scss";

// кругла маленькая кнопка
function RoundBtn({ children, isGray = false }) {
  return (
    <button className={`${style.roundBtn} ${isGray ? style.gray : ""}`}>
      {children}
    </button>
  );
}

export default RoundBtn;
