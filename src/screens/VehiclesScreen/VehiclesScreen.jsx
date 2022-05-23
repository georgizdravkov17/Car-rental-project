import React from 'react';
import { useContext } from 'react';
import { VehiclesContext } from '../../contexts/vehiclesContext.js';

const VehiclesScreen = () => {

  const { vehicles } = useContext(VehiclesContext);

  return (
    <div>VehiclesScreen
      <button onClick={() => { console.log(vehicles) }}>SHow vehicles</button>
    </div>
    
  )
}

export default VehiclesScreen