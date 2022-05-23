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

    return(
        <CustomersContext.Provider value={{customers}}>{children}</CustomersContext.Provider>
    );
}
