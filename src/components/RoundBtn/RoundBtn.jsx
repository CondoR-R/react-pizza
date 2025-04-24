import style from "./RoundBtn.module.scss";

function RoundBtn({ children, isGray = false }) {
  return (
    <button
      className={`${style.roundBtn} ${
        isGray ? style.gray : ""
      } d-flex jc-c ai-c`}
    >
      {children}
    </button>
  );
}

export default RoundBtn;
