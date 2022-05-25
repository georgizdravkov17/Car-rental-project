import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { SearchBar, Slider } from '../../components/components.js';
import { CustomersContext } from '../../contexts/customersContext';
import { OrdersContext } from '../../contexts/ordersContext';
import { VehiclesContext } from '../../contexts/vehiclesContext';
import { MessagesContext } from '../../contexts/messagesContext';
import './DashboardScreen.css';

const DashboardScreen = () => {

  const navigate = useNavigate();

  const { customers, deleteCustomer } = useContext(CustomersContext);
  const { orders } = useContext(OrdersContext);
  const { vehicles, deleteVehicle } = useContext(VehiclesContext);
  const {messages, deleteMessage} = useContext(MessagesContext);

  const [customersQuery, setCustomersQuery] = useState("");
  const [ordersQuery, setOrdersQuery] = useState("");
  const [vehiclesQuery, setVehiclesQuery] = useState("");
  const [messagesQuery, setMessagesQuery] = useState("");



  const printCustomers = () => {
     return customers.map(({id, firstname, lastname, username, email, createdAt ,isAdmin}, index) => (
      <tr>
      <td>{index + 1}</td>
      <td>{id}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{isAdmin ? "True" : "False"}</td>
      <td>
       <Button variant="danger" onClick={() => { deleteCustomer(id) }}>X</Button>
       <Button variant="success" onClick={() => { navigate(id) }}>V</Button></td>
    </tr>
     ))
  }

  // const printOrders = () => {
    
  // }

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

  const printMessages = () => {
    return messages.map(({id, email, message }, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{id}</td>
                <td>{email}</td>
                <td>{message}</td>
                <td><Button variant="danger" onClick={() => { deleteMessage(id) } }>X</Button> <Button variant="success">V</Button></td>
              </tr>
    ))
  }

  return (
    <>
      <Slider />
    <div className="dashboard-screen">
      <div>{vehicles.length}</div>
      <button onClick={() => { console.log(messages) }}>Show messages</button>
       <h1 className="heading">Dashboard</h1>
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
      <div className="customers">
      <div className="search-bar-container">
            <h3>Customers</h3>
            <SearchBar onChangeFunction={(event) => { setCustomersQuery(event.target.value) }}/>
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
                  <th>Activities</th>
                </tr>
              </thead>
              <tbody>
                { printCustomers() }
              </tbody>
          </Table>
      </div>
      <div className="orders">
      <div className="search-bar-container">
            <h3>Orders</h3>
            <SearchBar onChangeFunction={(event) => { setOrdersQuery(event.target.value) }}/>
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
                    <th>Activities</th>
                  </tr>
                </thead>
                <tbody>
                  { printCustomers() }
                </tbody>
            </Table>
      </div>
      <div className="messages">
      <div className="search-bar-container">
            <h3>Messages</h3>
            <SearchBar onChangeFunction={(event) => { setMessagesQuery(event.target.value) }}/>
        </div>
            <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>From</th>
                    <th>Message</th>
                    <th>Activities</th>
                  </tr>
                </thead>
                <tbody>
                  { printMessages() }
                </tbody>
            </Table>
      </div>
    </div>
    </>
  )
}

export default DashboardScreen

