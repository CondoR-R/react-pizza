import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";

import { selectFilter, setFilters } from "../../redux/slices/filterSlice";
import { fetchPizzas, selectPizza } from "../../redux/slices/pizzaSlice";

import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";
import Pagination from "../../components/Pagination/Pagination";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

import style from "./Main.module.scss";

import empryPizza from "../../assets/img/pizza.avif";

// главная страница
function Main() {
  // filterSlice
  const { category, sortOrder, sortBy, searchValueForQuerry, currentPage } =
    useSelector(selectFilter());

  // pizzaSlice
  const { pizzas, isLoading, error } = useSelector(selectPizza());

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // колличество пицц на странице
  const pageLimit = 8;

  // загружаем параметры из URL
  useEffect(() => {
    if (location.search) {
      const pathCategory = location.pathname.split("/")[2];
      const filters = searchParams.get("search")
        ? {
            searchValueForQuerry: searchParams.get("search"),
            searchValue: searchParams.get("search"),
          }
        : {
            currentPage: searchParams.get("currentPage") || 1,
            sortBy: searchParams.get("sortBy") || "rating",
            sortOrder: searchParams.get("order") || "desc",
            category:
              pathCategory && pathCategory !== "all" ? pathCategory : "",
          };
      dispatch(setFilters(filters));
    }
  }, []);

  // запрос с учетом текущих фильтров
  useEffect(() => {
    const querryString = searchValueForQuerry
      ? `search=${searchValueForQuerry}`
      : `sortBy=${sortBy}&order=${sortOrder}&categories=${category}`;

    dispatch(fetchPizzas({ pageLimit, currentPage, querryString }));
  }, [category, sortBy, sortOrder, searchValueForQuerry, currentPage]);

  // Обновляем URL при изменении фильтров
  useEffect(() => {
    const querryString = searchValueForQuerry
      ? { search: searchValueForQuerry }
      : {
          sortBy,
          order: sortOrder,
          currentPage,
        };
    setSearchParams(querryString);
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
        // onClick={() => setError(null)}
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
