import style from "./Cart.module.scss";

import emptyCartUrl from "../../assets/img/emptyCart.png";

import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import Btn from "../../components/Btn/Btn";
import CartItem from "../../components/CartItem/CartItem";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import CartIcon from "../../components/Icons/CartIcon";
import TrashIcon from "../../components/Icons/TrashIcon";
import BackIcon from "../../components/Icons/BackIcon";

function Cart() {
  return (
    <div className={`${style.cart} d-flex jc-c ai-c`}>
      <div>
        <div className={`${style.header} d-flex jc-sb`}>
          <h1 className={style.title}>
            <CartIcon width="29" height="29" color={"black"} />
            <span>Корзина</span>
          </h1>
          <button className={style.clearCart}>
            <TrashIcon />
            <span>Очистить корзину</span>
          </button>
        </div>
        <div className={style.cartItems}>
          <HorizontalLine className={style.mb} />
          <CartItem className={style.mb} />

          <HorizontalLine className={style.mb} />
          <CartItem className={style.mb} />
        </div>
        <div className={style.footer}>
          <div className={`${style.total} d-flex jc-sb`}>
            <p className={style.countPizza}>
              <span>Всего пицц:</span> <span className={style.span}>3шт.</span>
            </p>
            <p className={style.totalPrice}>
              <span>Сумма заказа:</span>
              <span className={style.span}>900 руб.</span>
            </p>
          </div>
          <div className={`${style.buttons} d-flex jc-sb`}>
            <Btn isBigPad isGrayBorder>
              <BackIcon />
              <span>Вернуться назад</span>
            </Btn>
            <Btn isBigPad>Оплатить сейчас</Btn>
          </div>
        </div>
      </div>
    </div>
    // <InfoBlock
    //   title="Корзина путсая"
    //   text="Вы не добавили ни одной пиццы в корзину. Чтобы заказать пиццу, перейдите на главную страницу."
    //   imgUrl={emptyCartUrl}
    // />
  );
}

export default Cart;
