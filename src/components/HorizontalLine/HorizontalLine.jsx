import style from "./HorizontalLine.module.scss";

function HorizontalLine({ className = "" }) {
  return <div className={`${style.line} ${className}`}></div>;
}

export default HorizontalLine;
