import style from "./Categories.module.scss";

function Categories() {
  return (
    <ul className={`${style.categories} d-flex`}>
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
