import { useEffect, useState } from "react";

import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";

import style from "./Main.module.scss";

import URL from "../../URL";

function Main() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const pizzasRespons = await fetch(`${URL}/items`);
        if (!pizzasRespons.ok) {
          throw new Error("404: Ошибка при попытке соединиться с сервером!");
        }

        const pizzasJson = await pizzasRespons.json();
        setPizzas(pizzasJson);
      } catch (err) {
        console.log(err);
        alert(err.message);
        // сделать страницу ошибки загрузки?
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className={style.main}>
      <div className={`${style.header} d-flex jc-sb ai-c`}>
        <Categories />
        <Sort />
      </div>
      <div className={style.body}>
        <h1>Все пиццы</h1>
        <div className={style.content}>
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((pizza) => (
                <PizzaBlock key={pizza.id} pizza={pizza} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
