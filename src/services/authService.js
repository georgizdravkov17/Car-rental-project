import axios from 'axios';
import { base_URL } from '../helpers/constants.js';

export const get_logged_user = () => {
    return localStorage("user");
}

export const logout_user = () => {
    localStorage.removeItem("user");
}

export const authenticate_user = (url, data) => {
  return axios.post(url, data);
}