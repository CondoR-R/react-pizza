import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination/Pagination";

import style from "./Main.module.scss";

import URL from "../../URL";

// главная страница
function Main() {
  // пиццы с сервера и статус загрузки
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // состояния из хранилища filter
  const category = useSelector((state) => state.filter.category);
  const sortOrder = useSelector((state) => state.filter.sortOrder);
  const sortBy = useSelector((state) => state.filter.sortBy);
  const searchValue = useSelector((state) => state.filter.searchValue);
  const currentPage = useSelector((state) => state.filter.currentPage);

  // колличество пицц на странице
  const pageLimit = 8;

  // запросы к серверу
  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        /* строка запроса или поиск или сортировка, тк mockapi не умеет работать 
          с 2 сразу */
        const querryString = searchValue
          ? `search=${searchValue}`
          : `sortBy=${sortBy}&order=${sortOrder}&categories=${category}`;

        const pizzasRespons = await fetch(
          `${URL}/items?limit=${pageLimit}&page=${currentPage}&${querryString}`
        );
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
  }, [category, sortBy, sortOrder, searchValue, currentPage]);

  return (
    <div className={style.main}>
      <div className={`${style.header} d-flex jc-sb ai-c`}>
        <Categories />
        <Sort />
      </div>
      <div className={style.body}>
        <div className={`${style.bodyHeader} d-flex ai-c jc-sb`}>
          <h1>Все пиццы</h1>
          <Search />
        </div>

        <div className={style.content}>
          {isLoading
            ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
            : pizzas.map((pizza) => (
                <PizzaBlock key={pizza.id} pizza={pizza} />
              ))}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default Main;
