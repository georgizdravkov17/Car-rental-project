import React, { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SearchBar, Slider } from '../../../components/components.js';
import { CustomersContext } from '../../../contexts/customersContext';
import { Table, Button } from 'react-bootstrap';
import './DashboardOrders.css';

const DashboardOrders = () => {

   const navigate = useNavigate();

  const { customers, deleteCustomer } = useContext(CustomersContext);

  const [customersQuery, setCustomersQuery] = useState("");

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

  return (
    <div>
        <div className="customers">
      <div className="search-bar-container">
            <h3>Orders</h3>
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
    </div>
  )
}

export default DashboardOrders