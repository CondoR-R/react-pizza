import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination/Pagination";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import style from "./Main.module.scss";

import URL from "../../URL";
import empryPizza from "../../assets/img/pizza.avif";

// главная страница
function Main() {
  // пиццы с сервера и статус загрузки
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // состояния из хранилища filter
  // const category = useSelector((state) => state.filter.category);
  // const sortOrder = useSelector((state) => state.filter.sortOrder);
  // const sortBy = useSelector((state) => state.filter.sortBy);
  // const searchValue = useSelector((state) => state.filter.searchValue);
  // const currentPage = useSelector((state) => state.filter.currentPage);
  const { category, sortOrder, sortBy, searchValueForQuerry, currentPage } =
    useSelector((state) => state.filter);

  // колличество пицц на странице
  const pageLimit = 8;

  // запросы к серверу
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    (async () => {
      try {
        /* строка запроса или поиск или сортировка, тк mockapi не умеет работать 
          с 2 сразу */
        const querryString = searchValueForQuerry
          ? `search=${searchValueForQuerry}`
          : `sortBy=${sortBy}&order=${sortOrder}&categories=${category}`;

        const pizzasRespons = await axios.get(
          `${URL}/items?limit=${pageLimit}&page=${currentPage}&${querryString}`
        );

        if (pizzasRespons.status !== 200) {
          throw new Error("Ошибка при попытке соединиться с сервером!");
        }

        setPizzas(pizzasRespons.data);
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [category, sortBy, sortOrder, searchValueForQuerry, currentPage]);

  const renderContent = () => {
    return (
      <div className={style.content}>
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : pizzas.map((pizza) => <PizzaBlock key={pizza.id} pizza={pizza} />)}
      </div>
    );
  };

  const renderError = () => {
    return (
      <InfoBlock
        dontRenderBtn
        className={style.error}
        title="Пусто!"
        text={
          searchValueForQuerry
            ? "По вашему запросу ничего не найдено."
            : "Не смогли соединиться с сервером, попробуйте позже."
        }
        imgUrl={empryPizza}
        onClick={() => setError(null)}
      />
    );
  };

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

        {error ? renderError() : renderContent()}
        <Pagination />
      </div>
    </div>
  );
}

export default Main;
