import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { clearFilterState } from "../../redux/slices/filterSlice";

import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";
import Btn from "../../components/Btn/Btn";
import CartItem from "../../components/CartItem/CartItem";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import CartIcon from "../../components/Icons/CartIcon";
import TrashIcon from "../../components/Icons/TrashIcon";
import BackIcon from "../../components/Icons/BackIcon";

import style from "./Cart.module.scss";

import emptyCartUrl from "../../assets/img/emptyCart.png";
import { clearCart } from "../../redux/slices/cartSlice";

// страница коризины
function Cart() {
  const { totalPrice, totalCount, cart } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onClickBack = () => {
    navigate("/");
    dispatch(clearFilterState());
  };

  const onClickClearCart = () => {
    if (window.confirm("Вы уверены, что хотите очистить корзину?")) {
      dispatch(clearCart());
    }
  };

  const renderCart = () => {
    return (
      <div className={`${style.cart} d-flex jc-c ai-c`}>
        <div className={style.cartBox}>
          <div className={`${style.header} d-flex jc-sb`}>
            <h1 className={style.title}>
              <CartIcon width="29" height="29" color={"black"} />
              <span>Корзина</span>
            </h1>
            <button className={style.clearCart} onClick={onClickClearCart}>
              <TrashIcon />
              <span>Очистить корзину</span>
            </button>
          </div>
          <div className={style.cartItems}>
            {cart.map((item) => (
              <>
                <HorizontalLine className={style.mb} />
                <CartItem className={style.mb} item={item} />
              </>
            ))}
          </div>
          <div className={style.footer}>
            <div className={`${style.total} d-flex jc-sb`}>
              <p className={style.countPizza}>
                <span>Всего пицц:</span>
                <span className={style.span}>{totalCount} шт.</span>
              </p>
              <p className={style.totalPrice}>
                <span>Сумма заказа:</span>
                <span className={style.span}>{totalPrice} руб.</span>
              </p>
            </div>
            <div className={`${style.buttons} d-flex jc-sb`}>
              <Btn isBigPad isGrayBorder onClick={onClickBack}>
                <BackIcon />
                <span>Вернуться назад</span>
              </Btn>
              <Btn isBigPad>Оплатить сейчас</Btn>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderEmptyCart = () => {
    return (
      <InfoBlock
        title="Корзина путсая"
        text="Вы не добавили ни одной пиццы в корзину. Чтобы заказать пиццу, перейдите на главную страницу."
        imgUrl={emptyCartUrl}
      />
    );
  };

  return totalCount > 0 ? renderCart() : renderEmptyCart();
}

export default Cart;
