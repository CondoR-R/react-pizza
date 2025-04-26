import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  sortOrder: "desc",
  sortBy: "rating",
  searchValue: "",
  searchValueForQuerry: "",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
      state.searchValue = "";
      state.searchValueForQuerry = "";
    },
    togleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
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
} = filterSlice.actions;

export default filterSlice.reducer;
