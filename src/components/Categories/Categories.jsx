import { useDispatch } from "react-redux";
import { changeCategory } from "../../redux/slices/filterSlice";

import { NavLink } from "react-router-dom";

import style from "./Categories.module.scss";
import "./active.scss";

// меню с категориями
function Categories() {
  const dispatch = useDispatch();

  const categories = [
    { type: "Все", path: "all" },
    { type: "Мясные", path: "meat" },
    { type: "Вегатарианские", path: "vegetarian" },
    { type: "Гриль", path: "grill" },
    { type: "Острые", path: "sharp" },
    // { type: "Закрытые", path: "closed" },
  ];

  return (
    <ul className={`${style.categories} d-flex`}>
      {categories.map(({ type, path }, index) => (
        <li key={index}>
          <NavLink
            to={`/pizzas/${path}`}
            className={style.link}
            onClick={() => dispatch(changeCategory(path === "all" ? "" : path))}
          >
            {type}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Categories;
