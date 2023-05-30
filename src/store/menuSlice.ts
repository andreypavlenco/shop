import { createSlice } from '@reduxjs/toolkit';

export interface nameStore {
  pizzaDay: boolean;
  iqPizza: boolean;
  kfc: boolean;
}

const initialState: nameStore = {
  pizzaDay: true,
  iqPizza: false,
  kfc: false,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    pizzaDayOn: state => {
      state.pizzaDay = true;
      state.iqPizza = false;
      state.kfc = false;
    },

    iqPizzaOn: state => {
      state.pizzaDay = false;
      state.iqPizza = true;
      state.kfc = false;
    },

    kfcOn: state => {
      state.pizzaDay = false;
      state.iqPizza = false;
      state.kfc = true;
    },
  },
});

export const { pizzaDayOn, iqPizzaOn, kfcOn } = menuSlice.actions;
export default menuSlice.reducer;
