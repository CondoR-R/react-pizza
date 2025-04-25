import AddIcon from "../Icons/AddIcon";
import CloseIcon from "../Icons/CloseIcon";
import MinusIcon from "../Icons/MinusIcon";
import RoundBtn from "../RoundBtn/RoundBtn";

import style from "./CartItems.module.scss";

// компонент товара в корзине
function CartItem({ className }) {
  return (
    <div className={`${style.cartItemBox} ${className} d-flex jc-sb ai-c`}>
      <div className={style.pizza}>
        <img
          width={80}
          height={80}
          src="https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif"
          alt=""
        />
        <div>
          <h2 className={style.name}>Сырный цыпленок</h2>
          <p className={style.settings}>Тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className={style.count}>
        <RoundBtn>
          <MinusIcon />
        </RoundBtn>
        <span>2</span>
        <RoundBtn>
          <AddIcon width="10" height="10" />
        </RoundBtn>
      </div>
      <p className={style.price}>770 руб.</p>
      <RoundBtn isGray>
        <CloseIcon className={style.close} />
      </RoundBtn>
    </div>
  );
}

export default CartItem;
