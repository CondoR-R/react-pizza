import Btn from "../Btn/Btn";
import AddIcon from "../Icons/AddIcon";
import CartIcon from "../Icons/CartIcon";
import style from "./Card.module.scss";

function Card({ pizza, cart = 0 }) {
  const { id, imgUrl, name, dough, price, categories, rating } = pizza;

  return (
    <div className={`${style.card} d-flex f-col ai-c`}>
      <img src={imgUrl} alt={name} width={260} height={260} />
      <h2>{name}</h2>
      <div className={style.settingsBox}>
        <div className={style.doughTypeBox}>
          <button
            className={`${style.activeBtn} ${dough.subtle ? "" : style.absent}`}
          >
            Тонкое
          </button>
          <button className={`${dough.traditioal ? "" : style.absent}`}>
            Традиционное
          </button>
        </div>
        <div className={style.sizeBox}>
          <button className={style.activeBtn}>26 см.</button>
          <button>30 см.</button>
          <button>40 см.</button>
        </div>
      </div>
      <div className={`${style.cardBottom} d-flex jc-sb ai-c`}>
        <span className={style.span}>от {price.small} руб.</span>
        <Btn isWhite={cart !== 0}>
          <AddIcon width="12" height="12" />
          {cart === 0 && <span>Добавить</span>}
          {cart !== 0 && (
            <>
              <CartIcon width="18" height="18" />
              <span className={style.cartCount}>{cart}</span>
            </>
          )}
        </Btn>
      </div>
    </div>
  );
}

export default Card;
