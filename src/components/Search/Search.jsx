import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { changeSearchValue, clearSearch } from "../../redux/slices/filterSlice";

import SearchIcon from "../Icons/SearchIcon";
import CloseIcon from "../Icons/CloseIcon";

import style from "./Search.module.scss";

// блок с поиском
function Search() {
  const searchValue = useSelector((state) => state.filter.searchValue);

  const dispatch = useDispatch();

  // текущий путь и перенаправление при поиске
  const location = useLocation();
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    dispatch(changeSearchValue(e.target.value));

    if (location.pathname === "pizzas/all") return;
    navigate("/pizzas/all");
  };

  return (
    <form className={`${style.search} d-flex ai-c`}>
      <label htmlFor="search" className={style.label}>
        <SearchIcon />
      </label>
      <input
        value={searchValue}
        onChange={onChangeSearch}
        id="search"
        className={style.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <button type="button" onClick={() => dispatch(clearSearch())}>
          <CloseIcon />
        </button>
      )}
    </form>
  );
}

export default Search;
