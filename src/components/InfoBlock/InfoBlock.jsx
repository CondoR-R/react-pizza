import { useNavigate } from "react-router-dom";

import Btn from "../Btn/Btn";

import style from "./InfoBlock.module.scss";

function InfoBlock({ title = "", text = "", imgUrl = "" }) {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate("/");
  };

  return (
    <div className="d-flex jc-c ai-c">
      <div className={`${style.message} d-flex f-col ai-c`}>
        <h1>
          {title} <span>😞</span>
        </h1>
        {text && <p>{text}</p>}
        <img src={imgUrl} alt={title} width={300} height={255} />
        <Btn onClick={onClickBtn} isBlack isBigPad>
          Вернуться назад
        </Btn>
      </div>
    </div>
  );
}

export default InfoBlock;
