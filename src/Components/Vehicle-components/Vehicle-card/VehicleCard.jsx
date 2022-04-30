import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteVehicle } from '../../../Core/Services/vehicleServices';
import { Button } from '@mui/material';
import "./VehicleCard.css";

const VehicleCard = ({ id, make, model, description ,price, avaliableCount ,picture, vehicles , setVehicles }) => {

    const navigateTo = useNavigate();

    const onDeleteVehicle = (id) => {
        deleteVehicle(id)
        .then(_ => {
            setVehicles(vehicles.filter(vehicle => vehicle.id !== id));
            console.log("Succesfully deleted vehicle");
        })
        .catch(err => {
            console.log(err.message);
        })
    }


  return (
      <div className="vehicle">
          <div className="img">
              <img src={picture} alt={`${make} ${model}`} /> 
          </div> 
          <div className="info">
               <h3>{`${make} ${model}`}</h3>
                <h2 className="price">${price}</h2>
                <h4>Avaliable vehicles: {avaliableCount}</h4>
                <p>{description}</p>
                <div className="buttons">
          <Button variant="contained" size="small" onClick={() => { navigateTo(`/vehicles/${id}`) }}>View Vehicle</Button>
          <Button variant="contained" size="small" onClick={() => { onDeleteVehicle(id) }}>Delete Vehicle</Button>
          </div>
          </div> 
      </div>
  );
} 

export default VehicleCard;