import axios from 'axios';
import { apiUrl } from '../../Helpers/constants';


export const getAllCustomers = () => {
  return axios.get(`${apiUrl}/customers`);
}

export const getCustomerById = (id) => {
  return axios.get(`${apiUrl}/customers/${id}`);
}

export const deleteCustomer = (id) => {
  return axios.delete(`${apiUrl}/customers/${id}`);
}