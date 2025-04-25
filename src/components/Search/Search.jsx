import { useContext } from "react";
import SearchIcon from "../Icons/SearchIcon";
import style from "./Search.module.scss";
import { MainContext } from "../../pages/Main/Main";
import CloseIcon from "../Icons/CloseIcon";

function Search() {
  const { searchValue, onChangeSearch, onClickClearSearch } =
    useContext(MainContext);

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
        <button type="button" onClick={onClickClearSearch}>
          <CloseIcon />
        </button>
      )}
    </form>
  );
}

export default Search;
