import { useState, useEffect, createContext } from 'react';
import Service from '../services/ServiceClass.js';
import { base_URL } from '../helpers/constants';

const orders_URL = `${base_URL}/orders`;

export const OrdersContext = createContext();

export const OrdersProvider = ({children}) => {

    const [orders, setOrders] = useState([]);

    const ordersService = new Service(orders_URL);

    useEffect(() => {
     ordersService.getAll()
     .then(response => {
        setOrders(response.data);
     })
     .catch(err => {
         console.log(err);
     })
   
    }, [])

    return(
        <OrdersContext.Provider value={{orders}}>{children}</OrdersContext.Provider>
    )
}