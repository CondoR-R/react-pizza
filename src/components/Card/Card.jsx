import Btn from "../Btn/Btn";
import style from "./Card.module.scss";

function Card({ cart = 0 }) {
  return (
    <div className={`${style.card} d-flex f-col ai-c`}>
      <img
        src="./img/pizzas/1.avif"
        alt="Креветки и Песто"
        width={260}
        height={260}
      />
      <h2>Креветки и Песто</h2>
      <div className={style.settingsBox}>
        <div className={style.doughTypeBox}>
          <button className={style.activeBtn}>Тонкое</button>
          <button>Традиционное</button>
        </div>
        <div className={style.sizeBox}>
          <button className={style.activeBtn}>26 см.</button>
          <button>30 см.</button>
          <button>40 см.</button>
        </div>
      </div>
      <div className={`${style.cardBottom} d-flex jc-sb ai-c`}>
        <span className={style.span}>от 395 руб.</span>
        <Btn isWhite={cart !== 0}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="#fff"
            />
          </svg>
          {cart === 0 && <span>Добавить</span>}
          {cart !== 0 && <span className={style.cartCount}>{cart}</span>}
        </Btn>
      </div>
    </div>
  );
}

export default Card;
