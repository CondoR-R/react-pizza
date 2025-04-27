import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import URL from "../../URL";

const initialState = {
  pizzas: [],
  isLoading: false,
  error: null,
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizza",
  async ({ pageLimit, currentPage, querryString }, { rejectWithValue }) => {
    try {
      const pizzasRespons = await axios.get(
        `${URL}/items?limit=${pageLimit}&page=${currentPage}&${querryString}`
      );
      return pizzasRespons.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pizzas = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export default pizzaSlice.reducer;
