import Btn from "../Btn/Btn";
import style from "./Header.module.scss";
import logo from "../../assets/img/logo.svg";
import CartIcon from "../Icons/CartIcon";

function Header() {
  return (
    <header className={`${style.header} d-flex jc-sb`}>
      <div className={`${style.lefftSide} d-flex ai-c`}>
        <img src={logo} alt="Логотип" width={38} height={38} />
        <div className={style.titleBox}>
          <h2>React Pizza</h2>
          <span>самая реактивная пицца во вселенной</span>
        </div>
      </div>
      <div className={style.rightSide}>
        <Btn>
          <span>520 руб.</span>
          <span className={style.verticalLine}></span>
          <CartIcon width="18" height="18" />
          <span>4</span>
        </Btn>
      </div>
    </header>
  );
}

export default Header;
