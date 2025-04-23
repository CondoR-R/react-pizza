import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HorizontalLine from "../../components/HorizontalLine/HorizontalLine";

import style from "./Layout.module.scss";

function Layout() {
  return (
    <div className={style.layout}>
      <Header />
      <HorizontalLine />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
