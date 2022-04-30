import React from 'react';
import { useState } from 'react';

const OrderForm = () => {

    const [orderData, setOrderData] = useState({});

    const onInputChange = (event) => {
        event.persist();

        setOrderData(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(orderData);
    }

  return(
      <div className="form-container">
          <form className="form" onSubmit={onFormSubmit}>
              <input type="date" name="startDate" placeholder="Start date" required onChange={onInputChange}/>
              <input type="date" name="endDate" placeholder="End date" required onChange={onInputChange}/>
              <input type="text" name="vehicle" placeholder="Vehicle" required onChange={onInputChange} />
              <input type="text" name="customer" placeholder="Customer" required onChange={onInputChange}/>
              <button type="submit">Rent</button>
          </form>
      </div>
  );
}

export default OrderForm;