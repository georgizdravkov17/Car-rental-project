import React, { useContext } from 'react';
import { CustomersContext } from '../../contexts/customersContext.js';
import { authenticate_user } from '../../services/authService.js';
import { v4 as uuid } from 'uuid';
import { base_URL } from '../../helpers/constants.js';
import { Formik, Form ,Field, ErrorMessage } from 'formik';
import { registerUserSchema } from '../../validations/customerValidation.js';
import { Button } from 'react-bootstrap';

const register_URL = `${base_URL}/customers`;

const initialValues = {
   id: uuid(),
   firstname: "",
   lastname: "",
   username: "",
   email: "",
   password: "",
   isAdmin: false,
   orders: []
}

const RegisterScreen = () => {
  
  const { customers } = useContext(CustomersContext);

  const onSubmit = (values) => {

    const isEmailFound = customers.find(customer => customer.email === values.email);

    if(isEmailFound){
      alert("Customer with this email already exists!");
      throw new Error("Customer with this email already exists!");
    }

    const isUsernameFound = customers.find(customer => customer.username === values.username);

    if(isUsernameFound){
      alert("Customer with this email already exists!");
      throw new Error("Customer with this username already exists!");
    }

   authenticate_user(register_URL, values)
   .then(_ => {
     localStorage.setItem("customer", JSON.stringify(values));
     alert("Succesfully registered customer!");
   })
   .catch(err => {
     console.log(err);
   })
}

  return (

    <div className="register-screen">
        <Formik
         initialValues={initialValues}
         validationSchema={registerUserSchema}
         onSubmit={onSubmit}
        >
            <Form>
                <div className="form-control">
                    <div className="error">
                        <ErrorMessage name="firstname" />
                    </div>
                    <Field type="text" name="firstname" placeholder="Firstname" required/>
                </div>
                <div className="form-control">
                    <div className="error">
                        <ErrorMessage name="lastname"/>
                    </div>
                    <Field type="text" name="lastname" placeholder="Lastname" required/>
                </div>
                <div className="form-control">
                    <div className="error">
                        <ErrorMessage name="username"/>
                    </div>
                    <Field type="text" name="username" placeholder="Username" required/>
                </div>
                <div className="form-control">
                    <div className="error">
                        <ErrorMessage name="email"/>
                    </div>
                    <Field type="email" name="email" placeholder="Email" required/>
                </div>
                <div className="form-control">
                    <div className="error">
                        <ErrorMessage name="password"/>
                    </div>
                    <Field type="password" name="password" placeholder="Password" required/>
                </div>
                <Button type="submit" variant="primary">Register</Button>
            </Form>
        </Formik>
    </div>
  )
}

export default RegisterScreen