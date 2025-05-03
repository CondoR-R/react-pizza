import {
  CartItem as Item,
  decrement,
  increment,
  removeItem,
} from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/store";

import AddIcon from "../Icons/AddIcon";
import CloseIcon from "../Icons/CloseIcon";
import MinusIcon from "../Icons/MinusIcon";

import RoundBtn from "../RoundBtn/RoundBtn";

import style from "./CartItems.module.scss";

// type Item = {
//   imgUrl: string;
//   name: string;
//   doughType: "тонкое" | "традиционное";
//   size: 26 | 30 | 40;
//   price: number;
//   count: number;
//   id: string;
// };

type CartItemProps = {
  className: string;
  item: Item;
};

// компонент товара в корзине
function CartItem({ className, item }: CartItemProps) {
  const { imgUrl, name, doughType, size, price, count, id } = item;

  const dispatch = useAppDispatch();

  const onClickPlusOne = () => {
    dispatch(increment(id));
  };

  const onClickMinusOne = () => {
    if (
      count === 1 &&
      !window.confirm("Вы уверены, что хотите удалить товар из корзины?")
    ) {
      return;
    }

    dispatch(decrement(id));
  };

  const onClickRemoveCartItem = () => {
    if (window.confirm("Вы уверены, что хотите удалить товар из корзины?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className={`${style.cartItemBox} ${className} d-flex jc-sb ai-c`}>
      <div className={style.pizza}>
        <img width={80} height={80} src={imgUrl} alt={name} />
        <div>
          <h2 className={style.name}>{name}</h2>
          <p className={style.settings}>
            {doughType} тесто, {size} см.
          </p>
        </div>
      </div>
      <div className={style.count}>
        <RoundBtn onClick={onClickMinusOne}>
          <MinusIcon />
        </RoundBtn>
        <span>{count}</span>
        <RoundBtn onClick={onClickPlusOne}>
          <AddIcon width="10" height="10" />
        </RoundBtn>
      </div>
      <p className={style.price}>{price * count} руб.</p>
      <RoundBtn isGray onClick={onClickRemoveCartItem}>
        <CloseIcon className={style.close} />
      </RoundBtn>
    </div>
  );
}

export default CartItem;
