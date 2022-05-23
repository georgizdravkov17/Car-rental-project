import React from 'react';
import { useContext } from 'react';
import { CustomersContext } from '../../contexts/customersContext';

const CustomersScreen = () => {

  const { customers } = useContext(CustomersContext);

  return (
    <div>CustomersScreen
      <button onClick={() => { console.log(customers) }}>Show customers</button>
    </div>
  )
}

export default CustomersScreen