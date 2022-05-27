import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { SearchBar, Slider } from '../../components/components.js';
import { CustomersContext } from '../../contexts/customersContext';
import { OrdersContext } from '../../contexts/ordersContext';
import { VehiclesContext } from '../../contexts/vehiclesContext';
import { MessagesContext } from '../../contexts/messagesContext';
import './DashboardScreen.css';

const DashboardScreen = () => {

    const { customers } = useContext(CustomersContext);
    const { vehicles } = useContext(VehiclesContext);
    const { messages } = useContext(MessagesContext);
    const { orders } = useContext(OrdersContext);

    const printCustomers = () => {
      return customers.slice(-4).map(({id, firstname, lastname, username, email, createdAt ,isAdmin}, index) => (
       <tr>
       <td>{index + 1}</td>
       <td>{id}</td>
       <td>{firstname}</td>
       <td>{lastname}</td>
       <td>{username}</td>
       <td>{email}</td>
       <td>{isAdmin ? "True" : "False"}</td>
     </tr>
      ))
   }

   const printMessages = () => {
    return messages.slice(-4).map(({id, email, message }, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{id}</td>
                <td>{email}</td>
                <td>{message}</td>
              </tr>
    ))
  }

  const printVehicles = () => {
    return vehicles.slice(-4).map(({id, type, brand, model, year, fuel, numberOfSeats, pricePerDay, avaliableVehicles }, index) => (
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
              </tr>
    ))
  }

    

  return (
    <>
      <Slider />
    <div className="dashboard-screen">
        <div className="aside-bar">
              <ul className="list">
                 <li className="item"><Link to="/dashboard/customers">Customers</Link></li>
                 <li className="item"><Link to="/dashboard/add-customer">Add Customer</Link></li>
                 <li className="item"><Link to="/dashboard/vehicles">Vehicles</Link></li>
                 <li className="item"><Link to="/dashboard/add-vehicle">Add Vehicle</Link></li>
                 <li className="item"><Link to="/dashboard/messages">Messages</Link></li>
                 <li className="item"><Link to="/dashboard/orders">Orders</Link></li>
              </ul> 
        </div>
        <div className="content">
        <Outlet />
        <h1 className="heading">Dashboard</h1>
        <div className="customers">
      <div className="search-bar-container">
            <h3>Last Created Customers</h3>
        </div>
          <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>isAdmin</th>
                </tr>
              </thead>
              <tbody>
                { printCustomers() }
              </tbody>
          </Table>
      </div>
      <div className="messages">
      <div className="search-bar-container">
            <h3>Last Sended Messages</h3>
        </div>
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>From</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  { printMessages() }
                </tbody>
            </Table>
      </div>
      <div className="vehicles">
        <div className="search-bar-container">
            <h3>Last Added Vehicles</h3>
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
                </tr>
              </thead>
              <tbody>
                  { printVehicles() }
              </tbody>
          </Table>
      </div>
        </div>
    </div>
    </>
  )
}

export default DashboardScreen

