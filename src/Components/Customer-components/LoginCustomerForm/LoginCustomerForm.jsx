import React from 'react';
import { useState } from 'react'; 
import { loginCustomer } from '../../../Core/Services/authServices.js';
import { TextField, Button } from '@mui/material';

const LoginCustomerForm = () => {

    const [customerData, setCustomerData] = useState({});

    const onInputChange = (event) => {
         event.persist();

         setCustomerData(prevState => {
             return {
                ...prevState,
                [event.target.name]: event.target.value
             }
         })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        loginCustomer(customerData)
        .then(_ => {
            console.log("Succesfully logged user!");
        })
        .catch(err => {
            console.log(err.message);
        })
    }

  return(
      <div className="form-container">
          <form className="form" onSubmit={onFormSubmit}>
              <TextField variant="outlined" size="small" type="email" name="email" label="Email"  required onChange={onInputChange} />
              <TextField variant="outlined" size="small" type="password" name="password" label="Password" required onChange={onInputChange} />
              <Button variant="contained" type="submit">Login</Button>
          </form>
      </div>
  );
}

export default LoginCustomerForm;