import { NavLink } from "react-router-dom";
import style from "./Categories.module.scss";

function Categories() {
  return (
    <ul className={`${style.categories} d-flex`}>
      {/* <li className={style.active}>
        <NavLink>Все</NavLink>
      </li>
      <li>
        <NavLink>Мясные</NavLink>
      </li>
      <li>
        <NavLink>Вегатарианские</NavLink>
      </li>
      <li>
        <NavLink>Гриль</NavLink>
      </li>
      <li>
        <NavLink>Острые</NavLink>
      </li>
      <li>
        <NavLink>Закрытые</NavLink>
      </li> */}
      <li className={style.active}>Все</li>
      <li>Мясные</li>
      <li>Вегатарианские</li>
      <li>Гриль</li>
      <li>Острые</li>
      <li>Закрытые</li>
    </ul>
  );
}

export default Categories;
