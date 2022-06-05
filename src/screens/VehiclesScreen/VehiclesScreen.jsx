import React from 'react';
import { useContext } from 'react';
import { vehicleTypes } from '../../helpers/constants.js';
import { CarCard, NewsLetter, HeaderSection } from '../../components/components.js';
import { VehiclesContext } from '../../contexts/vehiclesContext.js';
import { carsImages } from '../../helpers/data.js';
import './VehicleScreen.css';

const VehiclesScreen = () => {

  const { vehicles } = useContext(VehiclesContext);

  const printVehicles = (type) => {

    if(type){
      const filteredVehicles = vehicles.filter(vehicle => vehicle.type.toLowerCase() === type.toLowerCase());
      return filteredVehicles.map(vehicle => <CarCard vehicle={vehicle}/>)
    }

    return vehicles.map(vehicle => <CarCard vehicle={vehicle}/>)
  }

  return (
    <div>
      <HeaderSection img={carsImages[0]}/> 
      <div className="luxury-vehicles wrapper">
         <h1 className="heading">Luxury Vehicles</h1>
         <div className="container">
           { printVehicles(vehicleTypes.luxury) }
         </div>
      </div>
      <HeaderSection img={carsImages[5]}/>
      <div className="economy-vehicles wrapper">
         <h1 className="heading">Economy Vehicles</h1>
         <div className="container">
           { printVehicles(vehicleTypes.economy) }
         </div>
      </div>
      <HeaderSection img={carsImages[6]}/>
      <div className="estate-vehicles wrapper">
         <h1 className="heading">Estate Vehicles</h1>
         <div className="container">
           { printVehicles(vehicleTypes.estate) }
         </div>
      </div>
      <HeaderSection img={carsImages[7]}/>
      <div className="suv-vehicles wrapper">
         <h1 className="heading">SUV Vehicles</h1>
         <div className="container">
           { printVehicles(vehicleTypes.suv) }
         </div>
      </div>
      <HeaderSection img={carsImages[8]}/>
      <div className="cargo-vehicles wrapper">
         <h1 className="heading">Cargo Vehicles</h1>
         <div className="container">
           { printVehicles(vehicleTypes.cargo) }
         </div>
      </div>
      <NewsLetter />
    </div>
    
  )
}

export default VehiclesScreen