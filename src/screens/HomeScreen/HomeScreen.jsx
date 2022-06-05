import React, { useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import { VehiclesContext } from '../../contexts/vehiclesContext.js';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import { vehicleTypes } from '../../helpers/constants.js';
import { HeaderSection, CarCard, NewsLetter, AccordeonContainer, Banner, Slider } from '../../components/components.js';
import { carsImages } from '../../helpers/data.js';

const HomeScreen = () => {

   const navigate = useNavigate();

  const { vehicles } = useContext(VehiclesContext);

  const printVehicles = (type) => {

    if(type){
      const filteredVehicles = vehicles.filter(vehicle => vehicle.type.toLowerCase() === type.toLowerCase()).slice(-4);
      return filteredVehicles.map(vehicle => <CarCard vehicle={vehicle}/>)
    }

    return vehicles.map(vehicle => <CarCard vehicle={vehicle}/>)
  }
 
  return (
    <div className="home-screen">
       <Slider />
        <div className="luxury-vehicles wrapper">
           <div className="upper">
           <h1 className="heading">Luxury Vehicles</h1>
           <Button variant="primary" onClick={() => { navigate("/vehicles") }}>See more</Button>
           </div>
           <div className="container">
           { printVehicles(vehicleTypes.luxury) }
           </div>
        </div>
        <HeaderSection img={carsImages[3]}/>
        <div className="economy-vehicles wrapper">
        <div className="upper">
           <h1 className="heading">Economy Vehicles</h1>
           <Button variant="primary" onClick={() => { navigate("/vehicles") }}>See more</Button>
           </div>
           <div className="container">
           { printVehicles(vehicleTypes.economy) }
           </div>
        </div>
        <HeaderSection img={carsImages[2]}/>
        <div className="suv-vehicles wrapper">
        <div className="upper">
           <h1 className="heading">SUV Vehicles</h1>
           <Button variant="primary" onClick={() => { navigate("/vehicles") }}>See more</Button>
           </div>
           <div className="container">
           { printVehicles(vehicleTypes.suv) }
           </div>
        </div>
        <HeaderSection img={carsImages[1]}/>
        <div className="cargo-vehicles wrapper">
        <div className="upper">
           <h1 className="heading">Cargo Vehicles</h1>
           <Button variant="primary">See more</Button>
           </div>
           <div className="container">
           { printVehicles(vehicleTypes.cargo) }
           </div>
        </div>
        <HeaderSection img={carsImages[4]}/>
        <div className="estate-vehicles wrapper">
        <div className="upper">
           <h1 className="heading">Estate Vehicles</h1>
           <Button variant="primary" onClick={() => { navigate("/vehicles") }}>See more</Button>
           </div>
           <div className="container">
           { printVehicles(vehicleTypes.estate) }
           </div>
        </div>
        <Banner />
       <ReactPlayer url="https://www.youtube.com/watch?v=HJuStxoaDf8&ab_channel=Mercedes-Benz" width="100vw" height="85vh" controls />
       <NewsLetter />
    </div>
  )
}

export default HomeScreen