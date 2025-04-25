import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  sortOrder: "desc",
  sortBy: "rating",
  searchValue: "",
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
      state.searchValue = "";
    },
    togleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
    changeSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    changeSearchValue: (state, action) => {
      state.searchValue = action.payload;
      state.category = "";
      state.currentPage = 1;
    },
    clearSearch: (state) => {
      state.searchValue = "";
    },
    changeCurrentPage: (state, action) => {
      state.currentPage = action.payload;
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
} = filterSlice.actions;

export default filterSlice.reducer;
