import React from "react";
import style from "./Footer.module.scss";

// подвал сайта
const Footer: React.FC = () => {
  return (
    <footer className={`${style.footer} d-flex jc-c`}>
      <p>
        Используемые технологии: Vite, React, Sass, CSS module, React Router,
        React Content Loader, React Paginate, Redux Toolkit, axios, lodash,
        TypeScript.
      </p>
    </footer>
  );
};

export default Footer;
