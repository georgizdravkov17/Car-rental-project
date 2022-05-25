import { useState, useEffect, createContext } from 'react';
import Service from '../services/ServiceClass.js';
import { base_URL } from '../helpers/constants.js';

const customers_URL = `${base_URL}/customers`;

export const CustomersContext = createContext();

export const CustomersProvider = ({children}) => {

    const [customers, setCustomers] = useState([]);
    
    const customersService = new Service(customers_URL);
    
    useEffect(() => {
       customersService.getAll()
       .then(response => {
         setCustomers(response.data);
       })
       .catch(err => {
           console.log(err);
       })
    }, [])

    const deleteCustomer = (id) => {
      customersService.delete(id)
      .then(_ => {
          setCustomers(customers.filter(customer => customer.id !== id));
         alert("Succesfully deleted customer!");
      })
      .catch(err => {
          console.log(err);
      })
    }

    return(
        <CustomersContext.Provider value={{customers, deleteCustomer}}>{children}</CustomersContext.Provider>
    );
}
