import React from 'react';
import { useState, useEffect } from 'react';
import { getAllOrders } from '../../Core/Services/orderServices.js';

const OrdersPage = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
       getAllOrders()
       .then(response => {
           setOrders(response.data);
       })
       .catch(err => {
           console.log(err.message);
       })
    }, [])

  return(
      <div className="orders-page">
          <h1>This is Orders Page!</h1>
          <button onClick={() => { console.log(orders); }}>Show orders</button>
      </div>
  );
}

export default OrdersPage;