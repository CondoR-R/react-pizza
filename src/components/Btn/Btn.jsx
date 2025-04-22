import style from "./Btn.module.scss";

function Btn({ children, className = "", isWhite = false }) {
  return (
    <button
      className={`${style.btn} ${className} ${
        isWhite ? style.white : ""
      } d-flex ai-c jc-sb`}
    >
      {children}
    </button>
  );
}

export default Btn;
