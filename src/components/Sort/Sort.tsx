import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changeSortBy,
  selectFilter,
  togleSortOrder,
} from "../../redux/slices/filterSlice";

import style from "./Sort.module.scss";

// блок сортировки
const Sort: React.FC = () => {
  // статус открыт/закрыт
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const { sortOrder, sortBy } = useSelector(selectFilter());

  const sortRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  type SortTypeItem = {
    name: string;
    type: string;
  };

  const sortTypesArr: SortTypeItem[] = [
    { name: "популярности", type: "rating" },
    { name: "цене", type: "minPrice" },
    { name: "алфавиту", type: "name" },
  ];

  // обработка событий

  // открыть/закрыть
  const onClickTogleType = () => {
    setIsOpened((prev) => !prev);
  };

  // выбор типа сортировки
  const onClickChangeSortBy = (type: string) => () => {
    dispatch(changeSortBy(type));
    setIsOpened(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setIsOpened(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isOpened]);

  return (
    <div className={style.sort} ref={sortRef}>
      {isOpened && (
        <div className={style.drawer}>
          <ul>
            {sortTypesArr.map(({ type, name }, i) => (
              <li
                key={i}
                className={type === sortBy ? style.active : ""}
                onClick={onClickChangeSortBy(type)}
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
            sortOrder === "desc" ? style.down : ""
          }`}
          onClick={() => dispatch(togleSortOrder())}
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
          {sortTypesArr.find((t) => t.type === sortBy)?.name}
        </button>
      </div>
    </div>
  );
};

export default Sort;
