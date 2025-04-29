import { useDispatch } from "react-redux";
import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

import { changeCategory } from "../../redux/slices/filterSlice";

import style from "./Categories.module.scss";
import "./active.scss";

// меню с категориями
const Categories: React.FC = () => {
  const dispatch = useDispatch();

  type Category = { type: string; path: string };

  const categories: Category[] = [
    { type: "Все", path: "all" },
    { type: "Мясные", path: "meat" },
    { type: "Вегатарианские", path: "vegetarian" },
    { type: "Гриль", path: "grill" },
    { type: "Острые", path: "sharp" },
    // { type: "Закрытые", path: "closed" },
  ];

  // если путь не совпадает с категориями идет перенаправление на notFound
  const navigate = useNavigate();
  const params = useParams();
  if (!categories.some(({ path }) => path === params.category)) {
    navigate("*");
  }

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
};

export default Categories;
