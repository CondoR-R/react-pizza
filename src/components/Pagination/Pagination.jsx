import { useContext } from "react";
import ReactPaginate from "react-paginate";

import BackIcon from "../Icons/BackIcon";
import NextIcon from "../Icons/NextIcon";

import style from "./Pagination.module.scss";

import { MainContext } from "../../pages/Main/Main";

// меню по страницам (снизу)
function Pagination() {
  const { onClickChangePage, currentPage } = useContext(MainContext);

  return (
    <ReactPaginate
      className={`${style.pagination} d-flex jc-sb ai-c`}
      nextLabel={<NextIcon />}
      onPageChange={onClickChangePage}
      pageCount={4}
      forcePage={currentPage - 1}
      previousLabel={<BackIcon />}
    />
  );
}

export default Pagination;
