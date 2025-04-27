import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { clearFilterState } from "../../redux/slices/filterSlice";

import Btn from "../Btn/Btn";

import CartIcon from "../Icons/CartIcon";

import style from "./Header.module.scss";

import logo from "../../assets/img/logo.svg";
import { selectCart } from "../../redux/slices/cartSlice";

// шапка сайта
function Header() {
  const { totalCount, totalPrice } = useSelector(selectCart());

  const dispatch = useDispatch();

  return (
    <header className={`${style.header} d-flex jc-sb`}>
      <Link
        className={`${style.lefftSide} ${style.link} d-flex ai-c`}
        to="/"
        onClick={() => {
          dispatch(clearFilterState());
        }}
      >
        <img src={logo} alt="Логотип" width={38} height={38} />
        <div className={style.titleBox}>
          <h2>React Pizza</h2>
          <span>самая реактивная пицца во вселенной</span>
        </div>
      </Link>

      <div className={style.rightSide}>
        <Link to="/cart" className={style.link}>
          <Btn>
            {totalCount > 0 ? (
              <>
                <span>{totalPrice} руб.</span>
                <span className={style.verticalLine}></span>
                <CartIcon width="18" height="18" />
                <span>{totalCount}</span>
              </>
            ) : (
              "Корзина"
            )}
          </Btn>
        </Link>
      </div>
    </header>
  );
}

export default Header;
