import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${style.footer} d-flex jc-c`}>
      <p>
        Используемые технологии: Vite, React, Sass, CSS module, React Router,
        React Content Loader
      </p>
    </footer>
  );
}

export default Footer;
