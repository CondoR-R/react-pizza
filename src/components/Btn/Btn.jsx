import style from "./Btn.module.scss";

function Btn({
  children,
  onClick = () => {},
  className = "",
  isWhite = false,
  isBlack = false,
  isBigPad = false,
  isGrayBorder = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`${style.btn} ${className} ${isWhite ? style.white : ""} ${
        isBlack ? style.black : ""
      } ${isBigPad ? style.pad : ""} ${
        isGrayBorder ? style.grayBorder : ""
      } d-flex ai-c jc-sb `}
    >
      {children}
    </button>
  );
}

export default Btn;
