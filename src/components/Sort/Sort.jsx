import { useState } from "react";

import style from "./Sort.module.scss";

function Sort() {
  const [isOpened, setIsOpened] = useState(false);
  const [sortType, setSortType] = useState("popularity");
  const [sortDirection, setSortDirection] = useState("desc");

  const sortTypesArr = [
    { name: "популярности", type: "popularity" },
    { name: "цене", type: "price" },
    { name: "алфавиту", type: "abc" },
  ];

  const onClickTogleDirection = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const onClickTogleType = () => {
    setIsOpened((prev) => !prev);
  };

  const onClickChangeType = (type) => () => {
    setSortType(type);
    setIsOpened(false);
  };

  return (
    <div className={style.sort}>
      {isOpened && (
        <div className={style.drawer}>
          <ul>
            {sortTypesArr.map(({ type, name }, i) => (
              <li
                key={i}
                className={type === sortType ? style.active : ""}
                onClick={onClickChangeType(type)}
              >
                <button>{name}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={`${style.settings} d-flex ai-c`}>
        <button
          className={`${style.sortDirection} ${
            sortDirection === "desc" ? style.down : ""
          }`}
          onClick={onClickTogleDirection}
        >
          <svg
            className=""
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
        </button>
        <span>Сортировка по:</span>
        <button className={style.sortType} onClick={onClickTogleType}>
          {sortTypesArr.find((t) => t.type === sortType).name}
        </button>
      </div>
    </div>
  );
}

export default Sort;
