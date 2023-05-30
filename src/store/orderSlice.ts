import { orderType } from './../types/orderType';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { foodType } from '../types';

export interface orderState {
  quantity: number;
  orderPrice: number;
  userOrder: orderType[];
}

const initialState: orderState = {
  quantity: 0,
  orderPrice: 0,
  userOrder: [],
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderAdd: (state, action: PayloadAction<foodType>) => {
      const newOrder = { ...action.payload };
      const order = state.userOrder.find(index => index.food_id === newOrder.food_id);

      if (!order) {
        const price = state.orderPrice + newOrder.food_price;
        state.userOrder.push({ ...newOrder, price, quantity: 1 });
        state.orderPrice = state.userOrder.reduce(
          (total, order) => total + Number(order.food_price),
          0
        );
      }

      if (order) {
        order.quantity = order.quantity + 1;
        state.orderPrice += Number(order.food_price);
        order.price = state.orderPrice;
      }
    },

    orderRemove: (state, action: PayloadAction<number>) => {
      const foodIdToDelete = action.payload;
      const updatedUserOrder = state.userOrder.filter(order => order.food_id !== foodIdToDelete);
      state.userOrder = updatedUserOrder;
      state.orderPrice = state.userOrder.reduce(
        (total, order) => total + Number(order.food_price),
        0
      );
    },

    orderAllRemove: state => {
      state.userOrder = [];
      state.orderPrice = 0;
    },

    quantityAdd: (state, action: PayloadAction<number>) => {
      const foodId = action.payload;

      const order = state.userOrder.find(index => index.food_id === foodId);

      if (order) {
        order.quantity = order.quantity + 1;
        state.orderPrice += Number(order.food_price);
        order.price = state.orderPrice;
      }
    },

    quantityLess: (state, action: PayloadAction<number>) => {
      const foodId = action.payload;
      const order = state.userOrder.find(index => index.food_id === foodId);

      if (order) {
        order.quantity = order.quantity - 1;
        state.orderPrice -= Number(order.food_price);
        order.price = state.orderPrice;
      }

      if (order?.quantity === 0) {
        const foodIdToDelete = action.payload;
        const updatedUserOrder = state.userOrder.filter(order => order.food_id !== foodIdToDelete);
        state.userOrder = updatedUserOrder;
        state.orderPrice = state.userOrder.reduce(
          (total, order) => total + Number(order.food_price),
          0
        );
      }
    },
  },
});

export const { orderAdd, orderRemove, quantityAdd, quantityLess, orderAllRemove } =
  orderSlice.actions;

export default orderSlice.reducer;
