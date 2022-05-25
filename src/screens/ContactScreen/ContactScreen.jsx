import React, { useContext } from 'react';
import { MessagesContext } from '../../contexts/messagesContext.js';
import { Formik } from 'formik';
import { v4 as uuid } from 'uuid';
import { Form, Button } from 'react-bootstrap';
import { messageSchema } from '../../validations/messageValidation.js';
import { carsImages } from '../../helpers/data.js';
import { Banner, Slider } from '../../components/components.js';
import './ContactScreen.css';

const initialValues = {
    id: uuid(),
    email: "",
    message: ""
}


const ContactScreen = () => {

  const { createMessage } = useContext(MessagesContext);

  const onSubmit = (values) => {
     console.log(values);
      createMessage(values)
  }

  return (
    <div className="contact-screen">
        <Slider />
         <div className="contact-container box-shadow">
              <div className="img">
                   <img src={carsImages[0]} alt="Car" />
              </div>
              <div className="form-container ">
              <Formik
      validationSchema={messageSchema}
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
            <h2 className="heading">Send us a message</h2>
            <Form.Group  controlId="validationFormik03">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
              autoComplete="off"
                type="email"
                placeholder="Your Email"
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
              <Form.Label>Your Message</Form.Label>
              <Form.Control
              autoComplete="off"
                type="text"
                placeholder="Your message"
                name="message"
                value={values.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>
          <Button type="submit">Send</Button>
        </Form>
      )}
    </Formik>
              </div> 
         </div>
        <Banner />
    </div>
  )
}

export default ContactScreen