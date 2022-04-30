import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getVehicleById } from '../../../Core/Services/vehicleServices';
import ReactPlayer from 'react-player';
import './VehicleProfile.css';

const VehicleProfile = () => {

    const { id } = useParams();

    const [vehicleData, setVehicleData] = useState({});

    useEffect(() => {
        getVehicleById(id)
        .then((response) => {
            setVehicleData(response.data);
        })
        .catch(err => {
            console.log(err.message);
        }, [])
    })

  return(
      <div className="container">
          <div className="vehicle-profile">
          <div className="img">
              <img src={vehicleData.picture} alt={`${vehicleData.make} ${vehicleData.model}`} />
          </div>
          <div className="info">
              <h1>Car info: </h1>
          <h3>Make: {vehicleData.make}</h3>
          <h3>Model: {vehicleData.model}</h3>
          <h3>Price: ${vehicleData.price} per day</h3>
          <h3>Fuel type: {vehicleData.fuelType}</h3>
          <h3>Number of seats: {vehicleData.numberOfSeats}</h3>
          <h4>Description: {vehicleData.description}</h4>
          </div>
          </div>
          <div className="video">
          <ReactPlayer url="https://www.youtube.com/watch?v=bB3VRrN6IOs&t=797s&ab_channel=NobleVigilance" controls width="100%" height="100%" />
          </div>
          
      </div>
  );
}

export default VehicleProfile;