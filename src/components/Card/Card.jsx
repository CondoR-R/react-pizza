import Btn from "../Btn/Btn";
import style from "./Card.module.scss";

function Card({ cart = 0 }) {
  return (
    <div className={`${style.card} d-flex f-col ai-c`}>
      <img
        src="https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif"
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
          {cart !== 0 && (
            <>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className={style.cartCount}>{cart}</span>
            </>
          )}
        </Btn>
      </div>
    </div>
  );
}

export default Card;
