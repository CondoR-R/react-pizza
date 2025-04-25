import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Search from "../../components/Search/Search";

import style from "./Main.module.scss";

import URL from "../../URL";
import Pagination from "../../components/Pagination/Pagination";

const MainContext = createContext({});

function Main() {
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [sortOrder, setSortOrder] = useState("desc");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const pageLimit = 8;

  const onClickCatregory = (newCategory) => () => {
    setCategory(newCategory);
    setCurrentPage(1);
  };

  const onClickTogleOrder = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const onClickClearSearch = () => {
    setSearchValue("");
  };

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);

    if (currentPage !== 1) {
      setCurrentPage(1);
    }

    if (location.pathname === "pizzas/all") return;
    setCategory("");
    navigate("/pizzas/all");
  };

  const onClickChangePage = (e) => {
    setCurrentPage(e.selected + 1);
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
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

  const contextValue = {
    sortOrder,
    sortBy,
    searchValue,
    currentPage,
    onClickCatregory,
    onClickTogleOrder,
    onClickClearSearch,
    onChangeSearch,
    onClickChangePage,
    setSortBy,
  };

  return (
    <MainContext.Provider value={contextValue}>
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
    </MainContext.Provider>
  );
}

export default Main;

export { MainContext };
