import React, { useContext } from 'react';
import { CustomersContext } from '../../contexts/customersContext.js';
import { authenticate_user } from '../../services/authService.js';
import { base_URL } from '../../helpers/constants.js';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginUserSchema } from '../../validations/customerValidation.js';

const login_URL = `${base_URL}/customers`;

const initialValues = {
  email: "",
  password: ""
}


const LoginScreen = () => {

  const { customers } = useContext(CustomersContext);

  const onSubmit = (values) => {

      const foundUser = customers.find(customer => customer.email === values.email);

      if(!foundUser){
        alert("User not found!");
        throw new Error("User not found!");
      }

      const isPasswordEqual = foundUser.password === values.password;

      if(!isPasswordEqual){
        alert("Invalid credentials!");
        throw new Error("Invalid credentials!");
      }

      authenticate_user(login_URL, values)
      .then(_ => {
        localStorage.setItem("customer", JSON.stringify(values));
        alert("Succesfully login");
      })
      .catch(err => {
        console.log(err);
      })
}

  return (
    <div className="login-screen">
        <Formik
          initialValues={initialValues}
          validationSchema={loginUserSchema}
          onSubmit={onSubmit}
        >
           <Form>
               <div className="form-control">
                   <div className="error">
                       <ErrorMessage name="email" />
                   </div>
                   <Field type="email" name="email" placeholder="Email" required />
               </div>
               <div className="form-control">
                   <div className="error">
                       <ErrorMessage name="password" />
                   </div>
                   <Field type="password" name="password" placeholder="Password" required />
               </div>
               <Button type="submit" variant="primary">Login</Button>
           </Form>
        </Formik>
    </div>
  )
}

export default LoginScreen