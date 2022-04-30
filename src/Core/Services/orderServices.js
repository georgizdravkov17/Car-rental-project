import axios from 'axios';
import { apiUrl } from '../../Helpers/constants';

export const getAllOrders = () => {
    return axios.get(`${apiUrl}/orders`);
}