import React from 'react';
import { useState } from 'react';
import { registerCustomer } from '../../../Core/Services/authServices';
import { arePasswordsEqual } from '../../../Helpers/arePasswordsEqual';
import { TextField, Button } from '@mui/material';

const RegisterCustomerForm = () => {

    const [customerData, setCustomerData] = useState({});
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const onInputChange = (event) => {
       event.persist();

       setCustomerData((prevState) => {
           return {
               ...prevState,
               [event.target.name]: event.target.value
           }
       })
    }

    const onFormSubmit = async (event) => {
       event.preventDefault();
       
       const passwordsCheck = arePasswordsEqual(customerData.password, confirmedPassword);

       if(!passwordsCheck){
           console.log("Invalid user data!");
           return;
       }

      registerCustomer(customerData)
      .then(customerData => {
         localStorage.setItem("user_id", customerData.id);
      })
      .catch(err => {
          console.log(err);
      })

    }

  return(
      <div className="form-container">
          <form className="form" onSubmit={onFormSubmit}>
              <TextField variant="outlined" size="small" type="text" name="firstname" label="First name" required onChange={onInputChange}/>
              <TextField variant="outlined" size="small" type="text" name="lastname" label="Last name" required onChange={onInputChange}/>
              <TextField variant="outlined" size="small" type="email" name="email" label="Email" required onChange={onInputChange}/>
              <TextField variant="outlined" size="small" type="tel" name="tel" label="Telephone number" required onChange={onInputChange} />
              <TextField variant="outlined" size="small" type="password" name="password" label="Password" required onChange={onInputChange}/>
              <TextField variant="outlined" size="small" type="password" name="confirm-password" label="Confirm password" required onChange={(event) => { setConfirmedPassword(event.target.value) }}/>
              <Button variant="contained" type="submit">Register</Button>
          </form>
      </div>
  );
}

export default RegisterCustomerForm;