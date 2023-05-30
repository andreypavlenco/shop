import axios from 'axios';
import { userType } from '../types';

const URL_API = 'http://localhost:3004';
axios.defaults.baseURL = URL_API;

export const userService = {
  async postCreateUser(data: userType) {
    const app = await axios.post('/user', data, {
      headers: { 'Content-Type': 'application/json' },
    });
    return app.data;
  },

  async findUser(data: userType) {
    const app = await axios.get<userType[]>('/email', {
      params: data,
      headers: { 'Content-Type': 'application/json' },
    });

    return app.data;
  },
};
