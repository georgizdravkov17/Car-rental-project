import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VehicleCard from '../../Components/Vehicle-components/Vehicle-card/VehicleCard';
import { getAllVehicles } from '../../Core/Services/vehicleServices';
import './VehiclePage.css';

const VehiclesPage = () => {

    const navigateTo = useNavigate();

    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getAllVehicles()
        .then(response => {
            setVehicles(response.data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, [])

    


  return(
      <div className="vehicles-page">
          <h1>This is Vehicles Page!</h1>
           <div className="vehicles-container">
           { vehicles.length > 0 ? (
               vehicles.map(({make, model, type, description ,id, numberOfSeats, avaliableCount ,fuelType, price, picture}) => {
               return <VehicleCard id={id} make={make} model={model} description={description} price={price} avaliableCount={avaliableCount} picture={picture} numberOfSeats={numberOfSeats} fuelType={fuelType} vehicles={vehicles} setVehicles={setVehicles} />
               }
           )) : <p>No vehicles avaliable!</p> }
           </div>
          <button onClick={() => { console.log(vehicles); }}>Show vehicles</button>
      </div>
  );
}

export default VehiclesPage;