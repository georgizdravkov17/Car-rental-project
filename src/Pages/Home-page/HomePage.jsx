import React from 'react';
import { useState, useEffect} from 'react';
import uuid from 'react-uuid';
import { getLimitedVehiclesCount } from '../../Core/Services/vehicleServices';

const HomePage = () => {

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    getLimitedVehiclesCount(1)
    .then((response) => {
      setVehicles(response.data);
    })
    .catch(err => {
      console.log(err.message);
    })
  })

  return(
      <div className="home-page">
          <h1>This is Home Page!</h1>
          <div className="vehicles">
            { vehicles.map((vehicle) => (
              <div className="vehicle">
                 <p>{vehicle.make}</p>
                 <p>{vehicle.model}</p>
              </div>
            ))}
          </div>
      </div>
  );
}

export default HomePage;