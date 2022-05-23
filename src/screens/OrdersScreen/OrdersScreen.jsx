import React, { useContext } from 'react';
import { OrdersContext } from '../../contexts/ordersContext';

const OrdersScreen = () => {

  const { orders } = useContext(OrdersContext);

  return (
    <div>OrdersScreen
      <button onClick={() => { console.log(orders); }}>Show orders</button>
    </div>
  )
}

export default OrdersScreen