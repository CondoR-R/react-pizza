import style from "./HorizontalLine.module.scss";

// серая линия
function HorizontalLine({ className = "" }) {
  return <div className={`${style.line} ${className}`}></div>;
}

export default HorizontalLine;
