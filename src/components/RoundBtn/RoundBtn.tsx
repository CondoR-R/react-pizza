import React from "react";
import style from "./RoundBtn.module.scss";

type RoundBtnProps = {
  children: any;
  isGray?: boolean;
  onClick?: () => void;
};

// кругла маленькая кнопка
const RoundBtn: React.FC<RoundBtnProps> = ({
  children,
  isGray = false,
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      className={`${style.roundBtn} ${isGray ? style.gray : ""}`}
    >
      {children}
    </button>
  );
};

export default RoundBtn;
