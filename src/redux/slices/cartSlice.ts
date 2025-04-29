import { createSlice } from "@reduxjs/toolkit";

/**Если работать с нормальным бэкендом, тогда в корзину на стороне фронта
 * нужно сохранять id товара, тип теста и размер, отправлять эти данные на back
 * и получать ответ с id товара корзины, названием, колличеством и тп. Я бы мог
 * сделать подобную логику и с mockapi, но тогда пришлось бы делать доп запросы
 * к серверу, чтобы получить инфу о товаре, обращаясь к массиву товаров. Чтобы
 * не увеличивать колличество запросов на сервер, было принято решение сразу
 * передавать в корзину всю необходимую информацию о товаре.
 */

// слайс корзины
const initialState = {
  cart: [],
  totalPrice: 0,
  totalCount: 0,
  cartItemId: 1,
};

const updateTotalPrice = (cart) =>
  cart.reduce((sum, item) => item.count * item.price + sum, 0);

const updateTotalCount = (cart) =>
  cart.reduce((sum, item) => item.count + sum, 0);

const findCartItem = (cart, id) => cart.find((item) => item.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const cartItem = state.cart.find(
        (item) =>
          item.itemId === action.payload.itemId &&
          item.doughType === action.payload.doughType &&
          item.price === action.payload.price
      );

      if (cartItem) {
        cartItem.count++;
      } else {
        state.cart.push({
          ...action.payload,
          id: state.cartItemId,
          count: 1,
        });
        state.cartItemId++;
      }

      state.totalPrice = updateTotalPrice(state.cart);
      state.totalCount = updateTotalCount(state.cart);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.totalPrice = updateTotalPrice(state.cart);
      state.totalCount = updateTotalCount(state.cart);
    },
    increment: (state, action) => {
      const cartItem = findCartItem(state.cart, action.payload);
      cartItem.count++;

      state.totalPrice = updateTotalPrice(state.cart);
      state.totalCount = updateTotalCount(state.cart);
    },
    decrement: (state, action) => {
      const cartItem = findCartItem(state.cart, action.payload);
      if (!(cartItem.count - 1)) {
        state.cart = state.cart.filter((item) => item.id !== cartItem.id);
      } else {
        cartItem.count--;
      }

      state.totalPrice = updateTotalPrice(state.cart);
      state.totalCount = updateTotalCount(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalCount = 0;
      state.totalPrice = 0;
    },
  },
});

export const selectCart =
  (stateItem = "") =>
  (state) =>
    stateItem ? state.cart[stateItem] : state.cart;

export const { addItem, removeItem, increment, decrement, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
