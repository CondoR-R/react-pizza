import React from "react";
import style from "./Btn.module.scss";

type BtnProps = {
  children: any;
  onClick?: any;
  className?: string;
  isWhite?: boolean;
  isBlack?: boolean;
  isBigPad?: boolean;
  isGrayBorder?: boolean;
};

// большие кнопки (добавить в корзину, корзина, вернуться назад и тп)
const Btn: React.FC<BtnProps> = ({
  children,
  onClick = () => {},
  className = "",
  isWhite = false,
  isBlack = false,
  isBigPad = false,
  isGrayBorder = false,
}) => {
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
};

export default Btn;
