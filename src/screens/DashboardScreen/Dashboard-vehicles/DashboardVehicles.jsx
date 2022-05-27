import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { VehiclesContext } from '../../../contexts/vehiclesContext';
import { SearchBar } from '../../../components/components.js';
import { Table, Button } from 'react-bootstrap';
import './DashboardVehicles.css';

const DashboardVehicles = () => {

  const navigate = useNavigate();

  const { vehicles, deleteVehicle } = useContext(VehiclesContext);

  const [vehiclesQuery, setVehiclesQuery] = useState("");

  const printVehicles = () => {
    return vehicles.map(({id, type, brand, model, year, fuel, numberOfSeats, pricePerDay, avaliableVehicles }, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{id}</td>
                <td>{type}</td>
                <td>{brand}</td>
                <td>{model}</td>
                <td>{year}</td>
                <td>{fuel}</td>
                <td>{numberOfSeats}</td>
                <td>{pricePerDay}</td>
                <td>{avaliableVehicles.toString()}</td>
                <td><Button variant="danger" onClick={() => { deleteVehicle(id) } }>X</Button> <Button variant="success">V</Button></td>
              </tr>
    ))
  }

  return (
    <div>
        <div className="vehicles">
        <div className="search-bar-container">
            <h3>Vehicles</h3>
            <SearchBar onChangeFunction={(event) => { setVehiclesQuery(event.target.value) }}/>
        </div>
        <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>Type</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Year</th>
                  <th>Fuel</th>
                  <th>Seats</th>
                  <th>Price/Day</th>
                  <th>Avaliable</th>
                  <th>Activities</th>
                </tr>
              </thead>
              <tbody>
                  { printVehicles() }
              </tbody>
          </Table>
      </div>
    </div>
  )
}

export default DashboardVehicles