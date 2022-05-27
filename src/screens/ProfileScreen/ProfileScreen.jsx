import React, { useContext, useState, useEffect } from 'react';
import { get_logged_customer } from '../../helpers/functions.js';
import { OrdersContext } from '../../contexts/ordersContext';
import { CustomersContext } from '../../contexts/customersContext';

const ProfileScreen = () => {

  const loggedCustomer = get_logged_customer();

  const { customers } = useContext(CustomersContext);
  const { orders } = useContext(OrdersContext);

  const customer = customers.find(customer => customer.id === loggedCustomer.id);    

  return (
    <div>OrdersScreen
      <button onClick={() => { console.log(customers); }}>Show orders</button>
      <div>{customer.id}</div>
      <div>{customer.email}</div>
      <div>{customer.firstname}</div>
    </div>
  )
}

export default ProfileScreen;