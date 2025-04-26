import { useNavigate } from "react-router-dom";

import Btn from "../Btn/Btn";

import style from "./InfoBlock.module.scss";
import { useDispatch } from "react-redux";
import { clearFilterState } from "../../redux/slices/filterSlice";

// блок с информацией для пустой корзины и Not found page
function InfoBlock({
  title = "",
  text = "",
  imgUrl = "",
  className = "",
  dontRenderBtn = false,
}) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClickBtn = () => {
    navigate("/");
    dispatch(clearFilterState());
  };

  return (
    <div className="d-flex jc-c ai-c">
      <div className={`${style.message} ${className} d-flex f-col ai-c`}>
        <h1>
          {title} <span>😞</span>
        </h1>
        {text && <p>{text}</p>}
        <img src={imgUrl} alt={title} width={300} height={255} />
        {!dontRenderBtn && (
          <Btn onClick={onClickBtn} isBlack isBigPad>
            Вернуться на главную
          </Btn>
        )}
      </div>
    </div>
  );
}

export default InfoBlock;
