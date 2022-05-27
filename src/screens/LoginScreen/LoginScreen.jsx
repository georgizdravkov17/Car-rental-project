import React, { useContext } from 'react';
import axios from 'axios';
import { CustomersContext } from '../../contexts/customersContext.js';
import { authenticate_user } from '../../services/authService.js';
import { base_URL } from '../../helpers/constants.js';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
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

      const { id, isAdmin, ...userInfo } = foundUser;

      authenticate_user(login_URL, values)
      .then(_ => {
        localStorage.setItem("customer", JSON.stringify({id, isAdmin}));
        alert("Succesfully login");
      })
      .catch(err => {
        console.log(err);
      })
}

  return (
    <div className="login-screen form-container">
         <Formik
      validationSchema={loginUserSchema}
      onSubmit={onSubmit}
      initialValues={initialValues}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form className="form box-shadow" autoComplete="off"  noValidate onSubmit={handleSubmit}>
            <Form.Group  controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
              autoComplete="off"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group  controlId="validationFormik04">
              <Form.Label>Password</Form.Label>
              <Form.Control
              autoComplete="off"
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default LoginScreen