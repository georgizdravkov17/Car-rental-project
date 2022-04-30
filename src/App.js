import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { HomePage, CustomersPage, OrdersPage, VehiclesPage, NotFoundPage } from './Pages/pages';
import { Header, Footer } from './Components/components';
import RegisterCustomerForm from './Components/Customer-components/RegisterCustomerForm/RegisterCustomerForm';
import LoginCustomerForm from './Components/Customer-components/LoginCustomerForm/LoginCustomerForm';
import VehicleForm  from './Components/Vehicle-components/Vehicle-form/VehicleForm.jsx';
import OrderForm from './Components/Order-components/Order-form/OrderForm';
import VehicleProfile from './Components/Vehicle-components/Vehicle-profile/VehicleProfile';
import CustomerProfile from './Components/Customer-components/Customer-profile/CustomerProfile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
         <Header />
         <Routes>
             <Route exact path="/" element={<HomePage />} />
             <Route exact path="/home" element={<HomePage />} />
             <Route exact path="/customers" element={<CustomersPage />} />
             <Route exact path="/customers/:id" element={<CustomerProfile />} />
             <Route exact path="/orders" element={<OrdersPage />} />
             <Route exact path="/vehicles" element={<VehiclesPage />} />
             <Route exact path="/vehicles/:id" element={<VehicleProfile />} />
             <Route exact path="/add-vehicle" element={<VehicleForm />}/>
             <Route exact path="/order" element={<OrderForm />}/>
             <Route exact path="/register" element={<RegisterCustomerForm />} />
             <Route exact path="/login" element={<LoginCustomerForm />} />
             <Route path="*" element={<NotFoundPage />} />
          </Routes> 
          <Footer />
    </div>
    </Router>
  );
}

export default App;
