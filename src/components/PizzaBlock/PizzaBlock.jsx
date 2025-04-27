import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, selectCart } from "../../redux/slices/cartSlice";

import Btn from "../Btn/Btn";
import AddIcon from "../Icons/AddIcon";
import CartIcon from "../Icons/CartIcon";

import style from "./PizzaBlock.module.scss";

// карточка пиццы
function PizzaBlock({ pizza }) {
  const { id, imgUrl, name, dough, price } = pizza;
  const cartItems = useSelector(selectCart("cart")).filter(
    (item) => item.itemId === id
  );
  const cartCount = cartItems.length
    ? cartItems.reduce((sum, item) => item.count + sum, 0)
    : 0;

  const dispatch = useDispatch();

  // тесто
  const [doughType, setDoughType] = useState(
    dough.subtle ? 0 : dough.traditioal ? 1 : null
  );

  // размер
  const [sizeType, setSizeType] = useState(0);

  const sizes = [
    { text: "small", number: 26 },
    { text: "medium", number: 30 },
    { text: "big", number: 40 },
  ];

  // обработка событий

  // выбор типа теста
  const onClickDoughType = (type) => () => {
    setDoughType(type);
  };

  // выбор размера
  const onClickSizeType = (size) => () => {
    setSizeType(size);
  };

  // добавление в корзину
  const onClickAddToCart = () => {
    const size = sizes.find((_, i) => i === sizeType);
    const newItem = {
      itemId: id,
      name,
      imgUrl,
      doughType: doughType ? "традиционное" : "тонкое",
      size: size.number,
      price: price[size.text],
    };

    dispatch(addItem(newItem));
  };

  return (
    <div className={`${style.card} d-flex f-col ai-c`}>
      <img src={imgUrl} alt={name} width={260} height={260} />
      <h2>{name}</h2>
      <div className={style.settingsBox}>
        <div className={style.doughTypeBox}>
          <div
            className={style.checkBox}
            style={{ transform: `translateX(${doughType * 13.8}rem)` }}
          />
          <button
            onClick={onClickDoughType(0)}
            className={dough.subtle ? "" : style.absent}
          >
            Тонкое
          </button>
          <button
            onClick={onClickDoughType(1)}
            className={dough.traditioal ? "" : style.absent}
          >
            Традиционное
          </button>
        </div>
        <div className={style.sizeBox}>
          <div
            className={style.checkBox}
            style={{ transform: `translateX(${sizeType * 9.2}rem)` }}
          />
          {sizes.map((size, i) => (
            <button
              key={i}
              onClick={onClickSizeType(i)}
              className={sizeType === i ? style.activeBtn : ""}
            >
              {size.number} см.
            </button>
          ))}
        </div>
      </div>
      <div className={`${style.cardBottom} d-flex jc-sb ai-c`}>
        <span className={style.span}>от {price.small} руб.</span>
        <Btn isWhite={cartCount !== 0} onClick={onClickAddToCart}>
          <AddIcon width="12" height="12" />
          {cartCount === 0 ? (
            <span>Добавить</span>
          ) : (
            <>
              <CartIcon width="18" height="18" />
              <span className={style.cartCount}>{cartCount}</span>
            </>
          )}
        </Btn>
      </div>
    </div>
  );
}

export default PizzaBlock;
