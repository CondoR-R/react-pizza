import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FilterSliceState {
  category: string;
  sortOrder: string;
  sortBy: string;
  searchValue: string;
  searchValueForQuerry: string;
  currentPage: number;
}

const initialState: FilterSliceState = {
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
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.searchValue = "";
      state.searchValueForQuerry = "";
      state.currentPage = 1;
    },
    togleSortOrder: (state) => {
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
    changeSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
      state.currentPage = 1;
    },
    changeSearchValueForQuerry: (state, action: PayloadAction<string>) => {
      state.searchValueForQuerry = action.payload;
      state.category = "";
      state.currentPage = 1;
    },
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    clearSearch: (state) => {
      state.searchValue = "";
      state.searchValueForQuerry = "";
    },
    changeCurrentPage: (state, action: PayloadAction<number>) => {
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
    setFilters: (state, action: PayloadAction<FilterSliceState>) => {
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

export const selectFilterStateItem =
  (filterItem: keyof FilterSliceState) => (state: RootState) =>
    state.filter[filterItem];

export const selectFilterState = () => (state: RootState) => state.filter;

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
