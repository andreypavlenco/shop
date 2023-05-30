import axios from 'axios';
import { orderType } from '../types';

const URL_API = 'http://localhost:3004';
axios.defaults.baseURL = URL_API;

export const orderService = {
  async postCreateOrder(data: orderType) {
    const app = await axios.post('/order', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return app.data;
  },

  async findOrder(user_id: number) {
    const app = await axios.get<orderType[]>('/user/order', {
      params: user_id,
      headers: { 'Content-Type': 'application/json' },
    });
    return app.data;
  },
};
