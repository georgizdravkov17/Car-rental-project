import React from 'react';
import { useNavigate } from 'react-router-dom'
import { deleteCustomer } from '../../../Core/Services/customerServices.js';
import { Button } from '@mui/material';
import './CustomerCard.css';

const CustomerCard = ({id, firstname, lastname, email, tel, picture ,customers, setCustomers}) => {

    const navigateTo = useNavigate();

    const onDeleteCustomer = (id) => {
        deleteCustomer(id)
        .then(_ => {
           setCustomers(customers.filter(customer => customer.id !== id));
           console.log("Succesfully deleted customer!");
        })
        .catch(err => {
            console.log(err.message);
        })
    }

   return(
       <div className="customer-card">
             <div className="img">
             <img src={picture} alt="Customer image" />
             </div>
            <div className="info">
            <h3>First name:{firstname}</h3>
            <h3>First name:{lastname}</h3>
            <h3>First name:{email}</h3>
            <h3>First name:{tel}</h3>
            <div className="buttons">
            <Button variant="contained" size="small" onClick={() => { navigateTo(`/customers/${id}`) }}>View Profile</Button>
              <Button variant="contained" size="small" onClick={() => { onDeleteCustomer(id) }}>Delete Customer</Button>
            </div>
            </div>
       </div>
   );
}

export default CustomerCard;