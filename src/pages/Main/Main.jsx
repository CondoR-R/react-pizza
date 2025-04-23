import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import style from "./Main.module.scss";

import pizzas from "../../assets/pizzas.json";

function Main() {
  return (
    <div className={style.main}>
      <div className={`${style.header} d-flex jc-sb ai-c`}>
        <Categories />
        <Sort />
      </div>
      <div className={style.body}>
        <h1>Все пиццы</h1>
        <div className={style.content}>
          {pizzas.map((pizza) => (
            <Card key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
