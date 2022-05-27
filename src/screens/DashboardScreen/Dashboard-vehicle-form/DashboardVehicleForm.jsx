import React, { useContext } from 'react';
import { VehiclesContext } from '../../../contexts/vehiclesContext.js';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import { v4 as uuid } from 'uuid';
import { vehicleSchema } from '../../../validations/vehicleValidation.js';
import './DashboardVehicleForm.css';


const initialValues = {
     id: uuid(),
     type: "",
     brand: "",
     model: "",
     year: 0,
     fuel: "",
     numberOfSeats: 0,
     picture: "",
     pricePerDay: 0,
     avaliableVehicles: ""
}


const DashboardVehicleForm = () => {

     const { createVehicle } = useContext(VehiclesContext);

     const onSubmit = (values) => {
    createVehicle(values)
}


  return (
    <div className="vehicle-form-container form-container">
        <Formik
      validationSchema={vehicleSchema}
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
              <Form.Label>Brand</Form.Label>
              <Form.Control
              autoComplete="off"
                type="text"
                placeholder="Brand"
                name="brand"
                value={values.brand}
                onChange={handleChange}
                isInvalid={!!errors.brand}
              />
              <Form.Control.Feedback type="invalid">
                {errors.brand}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationFormik04">
              <Form.Label>Model</Form.Label>
              <Form.Control
              autoComplete="off"
                type="text"
                placeholder="Model"
                name="model"
                value={values.model}
                onChange={handleChange}
                isInvalid={!!errors.model}
              />
              <Form.Control.Feedback type="invalid">
                {errors.model}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationFormik04">
              <Form.Label>Construction year</Form.Label>
              <Form.Control
              autoComplete="off"
                type="number"
                placeholder="Construction year"
                name="year"
                value={values.year}
                onChange={handleChange}
                isInvalid={!!errors.year}
              />
              <Form.Control.Feedback type="invalid">
                {errors.year}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationFormik04">
              <Form.Label>Number of seats</Form.Label>
              <Form.Control
              autoComplete="off"
                type="number"
                placeholder="Number of seats"
                name="numberOfSeats"
                value={values.numberOfSeats}
                onChange={handleChange}
                isInvalid={!!errors.numberOfSeats}
              />
              <Form.Control.Feedback type="invalid">
                {errors.numberOfSeats}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationFormik04">
              <Form.Label>Picture</Form.Label>
              <Form.Control
              autoComplete="off"
                type="text"
                placeholder="Picture"
                name="picture"
                value={values.picture}
                onChange={handleChange}
                isInvalid={!!errors.picture}
              />
              <Form.Control.Feedback type="invalid">
                {errors.picture}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationFormik04">
              <Form.Label>Price per day</Form.Label>
              <Form.Control
              autoComplete="off"
                type="number"
                placeholder="Price per day"
                name="pricePerDay"
                value={values.pricePerDay}
                onChange={handleChange}
                isInvalid={!!errors.pricePerDay}
              />
              <Form.Control.Feedback type="invalid">
                {errors.pricePerDay}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group  controlId="validationFormik04">
              <Form.Label>Avaliable Vehicles</Form.Label>
              <Form.Control
              autoComplete="off"
                type="number"
                placeholder="Avaliable Vehicles"
                name="avaliableVehicles"
                value={values.avaliableVehicles}
                onChange={handleChange}
                isInvalid={!!errors.avaliableVehicles}
              />
              <Form.Control.Feedback type="invalid">
                {errors.avaliableVehicles}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Select name="fuel" aria-label="Default select example" onChange={handleChange} >
                <option>Fuel</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="hybrid">Hybrid</option>
                <option value="electric">Electric</option>
          </Form.Select>

          <Form.Select name="type" aria-label="Default select example" onChange={handleChange} >
                <option>Vehicle Type</option>
                <option value="economy">Economy</option>
                <option value="estate">Estate</option>
                <option value="luxury">Luxury</option>
                <option value="suv">SUV</option>
                <option value="cargo">Cargo</option>
          </Form.Select>

          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
    </div>
  )
}

export default DashboardVehicleForm