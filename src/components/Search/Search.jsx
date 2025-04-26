import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useRef, useState } from "react";
import _ from "lodash";

import {
  changeSearchValue,
  clearSearch,
  changeSearchValueForQuerry,
} from "../../redux/slices/filterSlice";

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

  const inputRef = useRef();

  /* записываем в redux изменение searchValue только
    спустя время после последнего изменения инпута */
  const updateSearchValue = useCallback(
    _.debounce((str) => {
      dispatch(changeSearchValueForQuerry(str));
    }, 250),
    []
  );

  // обработка событий
  const onChangeSearch = (e) => {
    dispatch(changeSearchValue(e.target.value));
    updateSearchValue(e.target.value);

    if (location.pathname === "pizzas/all") return;
    navigate("/pizzas/all");
  };

  const onClickClearInput = () => {
    dispatch(clearSearch());
    inputRef.current.focus();
  };

  return (
    <form className={`${style.search} d-flex ai-c`}>
      <label htmlFor="search" className={style.label}>
        <SearchIcon />
      </label>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={onChangeSearch}
        id="search"
        className={style.input}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <button type="button" onClick={onClickClearInput}>
          <CloseIcon />
        </button>
      )}
    </form>
  );
}

export default Search;
