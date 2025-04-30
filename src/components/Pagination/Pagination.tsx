import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import BackIcon from "../Icons/BackIcon";
import NextIcon from "../Icons/NextIcon";

import style from "./Pagination.module.scss";

import {
  changeCurrentPage,
  selectFilter,
} from "../../redux/slices/filterSlice";

// меню по страницам (снизу)
function Pagination() {
  const currentPage = useSelector(selectFilter("currentPage"));

  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className={`${style.pagination} d-flex jc-sb ai-c`}
      nextLabel={<NextIcon />}
      onPageChange={(e) => dispatch(changeCurrentPage(e.selected + 1))}
      pageCount={4}
      forcePage={currentPage - 1}
      previousLabel={<BackIcon />}
    />
  );
}

export default Pagination;
