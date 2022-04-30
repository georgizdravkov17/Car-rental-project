import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './Header.css';


const Header = () => {

  const navigateTo = useNavigate();

  return(
      <header className="header">
          <div className="heading">
              <h1>Car Rent</h1>
           </div> 
           <nav className="nav">
              <ul className="list">
                  <li className="list__item"><NavLink to="/home">Home</NavLink></li>
                  <li className="list__item"><NavLink to="/orders">Orders</NavLink></li>
                  <li className="list__item"><NavLink to="/vehicles">Vehicles</NavLink></li>
                  <li className="list__item"><NavLink to="/customers">Customers</NavLink></li>
                  <li className="list__item"><NavLink to="/add-vehicle">Add Vehicle</NavLink></li>
              </ul>
           </nav>

           <div className="buttons">
                <Button variant="contained" className="button" onClick={ () => { navigateTo("/register") } }>Sign up</Button>
                <Button variant="contained" className="button" onClick={ () => { navigateTo("/login") } }>Sign in</Button>
              </div>
      </header>
  );
}

export default Header;