import axios from 'axios';
import { foodType } from '../types';

const URL_API = 'http://localhost:3004';
axios.defaults.baseURL = URL_API;

export const productService = {
  async getKFC() {
    const app = await axios.get<foodType[]>('/KFC');
    return app.data;
  },

  async getPizzaDay() {
    const app = await axios.get<foodType[]>('/PizzaDay');
    return app.data;
  },

  async getIQpizza() {
    const app = await axios.get<foodType[]>('/IQPizza');
    return app.data;
  },
};
