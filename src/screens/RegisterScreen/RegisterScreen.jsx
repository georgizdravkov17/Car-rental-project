import React, { useContext } from 'react';
import * as yup from 'yup';
import { CustomersContext } from '../../contexts/customersContext.js';
import { authenticate_user } from '../../services/authService.js';
import { v4 as uuid } from 'uuid';
import { base_URL } from '../../helpers/constants.js';
import { Formik } from 'formik';
import { registerUserSchema } from '../../validations/customerValidation.js';
import { Button, InputGroup, Form ,FormControl } from 'react-bootstrap';

const register_URL = `${base_URL}/customers`;

const initialValues = {
   id: uuid(),
   firstname: "",
   lastname: "",
   username: "",
   email: "",
   password: "",
   isAdmin: false,
   terms: "",
   orders: [],
   createdAt: new Date()
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

    <div className="register-screen form-container">
        <Formik
      validationSchema={registerUserSchema}
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
          <Form.Group controlId="validationFormikFirstName">
              <Form.Label>First name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="First name"
                  aria-describedby="inputGroupPrepend"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  isInvalid={!!errors.firstname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstname}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="validationFormikLastName">
              <Form.Label>Last name</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Last name"
                  aria-describedby="inputGroupPrepend"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  isInvalid={!!errors.lastname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastname}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group  controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group controlId="validationFormik03">
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
            <Form.Group controlId="validationFormik04">
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
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default RegisterScreen