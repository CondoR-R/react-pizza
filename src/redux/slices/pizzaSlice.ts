import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import URL from "../../URL";
import { RootState } from "../store";

export type Pizza = {
  id: string;
  imgUrl: string;
  name: string;
  dough: { subtle: boolean; traditioal: boolean };
  price: { small: number; medium: number; big: number };
};

interface PizzaSliceState {
  pizzas: Pizza[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PizzaSliceState = {
  pizzas: [],
  isLoading: false,
  error: null,
};

type FetchPizzasParams = {
  pageLimit: number;
  currentPage: number;
  querryString: string;
};

export const fetchPizzas = createAsyncThunk<
  Pizza[],
  FetchPizzasParams,
  { rejectValue: string }
>(
  "pizza/fetchPizza",
  async (
    { pageLimit, currentPage, querryString }: FetchPizzasParams,
    { rejectWithValue }
  ) => {
    try {
      const pizzasRespons = await axios.get<Pizza[]>(
        `${URL}/items?limit=${pageLimit}&page=${currentPage}&${querryString}`
      );
      return pizzasRespons.data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "Unknown error"
      );
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
    builder.addCase(
      fetchPizzas.fulfilled,
      (state, action: PayloadAction<Pizza[]>) => {
        state.isLoading = false;
        state.pizzas = action.payload;
      }
    );
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.isLoading = false;
      console.log(typeof action.payload);
      state.error = action.payload ? action.payload : "Непредвиденная ошибка";
    });
  },
});

export const selectPizzaStateItem = (
  state: RootState,
  pizzaItem: keyof PizzaSliceState
) => state.pizza[pizzaItem];

export const selectPizzaState = () => (state: RootState) => state.pizza;

export default pizzaSlice.reducer;
