import Btn from "../Btn/Btn";
import logo from "../../assets/img/logo.svg";

import CartIcon from "../Icons/CartIcon";

import style from "./Header.module.scss";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Header() {
  return (
    <header className={`${style.header} d-flex jc-sb`}>
      <Link className={`${style.lefftSide} ${style.link} d-flex ai-c`} to="/">
        <img src={logo} alt="Логотип" width={38} height={38} />
        <div className={style.titleBox}>
          <h2>React Pizza</h2>
          <span>самая реактивная пицца во вселенной</span>
        </div>
      </Link>

      <div className={style.rightSide}>
        <Link to="/cart" className={style.link}>
          <Btn>
            <span>520 руб.</span>
            <span className={style.verticalLine}></span>
            <CartIcon width="18" height="18" />
            <span>4</span>
          </Btn>
        </Link>
      </div>
    </header>
  );
}

export default Header;
