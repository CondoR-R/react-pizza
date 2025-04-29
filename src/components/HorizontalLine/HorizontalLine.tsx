import React from "react";
import style from "./HorizontalLine.module.scss";

type HorizontalLineProps = { className?: string };

// серая линия
const HorizontalLine: React.FC<HorizontalLineProps> = ({ className = "" }) => {
  return <div className={`${style.line} ${className}`}></div>;
};

export default HorizontalLine;
