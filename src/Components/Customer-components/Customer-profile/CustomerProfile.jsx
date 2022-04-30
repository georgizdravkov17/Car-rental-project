import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById } from '../../../Core/Services/customerServices';

const CustomerProfile = () => {

    const [customerData, setCustomerData] = useState({});

    const { id } = useParams();

    useEffect(() => {
        getCustomerById(id)
        .then(response => {
           setCustomerData(response.data);
        }) 
        .catch(err => {
            console.log(err.message);
        })
    }, [])

  return(
      <div className="customer-profile">
          <p>{customerData.firstname}</p>
          <p>{customerData.lastname}</p>
          <p>{customerData.email}</p>
          <p>{customerData.id}</p>
      </div>
  );
}

export default CustomerProfile;