import React from 'react';
import { useState, useEffect } from 'react';
import CustomerCard from '../../Components/Customer-components/Customer-card/CustomerCard.jsx';
import { deleteCustomer, getAllCustomers } from '../../Core/Services/customerServices.js';
import './CustomersPage.css';

const CustomersPage = () => {


    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getAllCustomers()
        .then(response => {
            setCustomers(response.data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])

  return(
      <div className="customers-page">
          <h1>This is Customers Page!</h1>
          <div className="customers-container">
              { customers.length > 0 ? ( 
                  customers.map(({id, firstname, lastname, email, tel, picture}) => {
                      return <CustomerCard id={id} firstname={firstname} lastname={lastname} email={email} tel={tel} picture={picture} customers={customers} setCustomers={setCustomers} />
                  })
               ) : <p>No customers!</p> }
          </div>
          <button onClick={() => { console.log(customers) }}>Show Customers</button>
      </div>
  );
}

export default CustomersPage;