import axios from 'axios';
import uuid from 'react-uuid';
import { getAllCustomers } from './customerServices';
import { registerUserValidation, loginUserValidation } from '../../Validations/customerValidation';
import { apiUrl } from '../../Helpers/constants';

export const registerCustomer = async (customerData) => {

    try{

        const customers = await (await getAllCustomers()).data; 

       const isCustomerDataValid = await registerUserValidation.isValid(customerData);

       if(!isCustomerDataValid){
           throw new Error("Customer data is not valid!");
       }

       const foundCustomer = customers.find(customer => customer.email === customerData.email);



       if(foundCustomer){
           throw new Error("User with this email already exists");
       }

       customerData.id = uuid();
       customerData.picture = "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-photo-183042379.jpg";
       customerData.isAdmin = false;
       customerData.orders = [];


      await axios.post(`${apiUrl}/customers`, customerData);

       return customerData;
       
    } catch(err){
        console.log(err);
    }

}

export const loginCustomer = async (customerData) => {
    try{

        const customers = await (await getAllCustomers()).data;

        const isCustomerDataValid = await loginUserValidation.isValid(customerData);

        if(!isCustomerDataValid){
            throw new Error("Invalid credentials!");
        }

        const foundCustomer = customers.find(customer => customer.email === customerData.email);

        if(!foundCustomer){
            throw new Error("Invalid credentials!");
        }

        const isPasswordValid = foundCustomer.password === customerData.password;

        if(!isPasswordValid){
            throw new Error("Invalid credentials!");
        }

       return localStorage.setItem("customer_id", foundCustomer.id);

    } catch(err){
        throw new Error("Invalid user data!");
    }
}