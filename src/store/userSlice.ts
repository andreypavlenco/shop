import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { userType } from '../types';

const initialState: userType = {
  username: '',
  email: '',
  phone: '',
  address: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    nameChange: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },

    emailChange: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },

    phoneChange: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },

    addressChange: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    removeChange: state => {
      state.address = '';
      state.email = '';
      state.phone = '';
      state.username = '';
    },
  },
});

export const { nameChange, emailChange, phoneChange, addressChange, removeChange } =
  userSlice.actions;
export default userSlice.reducer;
