import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  sortOrder: "desc",
  sortBy: "rating",
  searchValue: "",
  searchValueForQuerry: "",
  currentPage: 1,
};

// слайс отвечает за категории, сортировку и страницы
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
      state.searchValue = "";
      state.searchValueForQuerry = "";
      state.currentPage = 1;
    },
    togleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
      state.currentPage = 1;
    },
    changeSearchValueForQuerry: (state, action) => {
      state.searchValueForQuerry = action.payload;
      state.category = "";
      state.currentPage = 1;
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
    clearSearch: (state) => {
      state.searchValue = "";
      state.searchValueForQuerry = "";
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    clearFilterState: (state) => {
      state.category = "";
      state.sortOrder = "desc";
      state.sortBy = "rating";
      state.searchValue = "";
      state.searchValueForQuerry = "";
      state.currentPage = 1;
    },
    setFilters: (state, action) => {
      state.sortBy = action.payload.sortBy || "rating";
      state.sortOrder = action.payload.sortOrder || "desc";
      state.category = action.payload.category || "";
      state.currentPage = +action.payload.currentPage || 1;
      if (action.payload?.searchValueForQuerry) {
        state.searchValueForQuerry = action.payload.searchValueForQuerry;
        state.searchValue = action.payload.searchValueForQuerry;
      }
    },
  },
});

export const {
  changeCategory,
  togleSortOrder,
  changeSortBy,
  changeSearchValue,
  clearSearch,
  changeCurrentPage,
  clearFilterState,
  changeSearchValueForQuerry,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
