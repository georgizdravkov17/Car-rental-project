import React from 'react';
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
import { Header, Footer } from './components/components.js';
import { DashboardScreen, HomeScreen, LoginScreen, NotFoundScreen, RegisterScreen, AboutScreen, ContactScreen ,VehiclesScreen, ProfileScreen } from './screens/screens.js';
import { DashboardVehicleForm, DashboardVehicles, DashboardCustomers, DashboardCustomerForm, DashboardMessages, DashboardOrders } from './screens/DashboardScreen/dashboardScreens.js';
import { VehiclesProvider } from './contexts/vehiclesContext.js';
import { CustomersProvider } from './contexts/customersContext.js';
import { OrdersProvider } from './contexts/ordersContext.js';
import { MessagesProvider } from './contexts/messagesContext.js';
import { AuthenticatedRoute, NonAuthenticatedRoute } from './guards/guards.js';

import './App.css';

function App() {
  return (
  <VehiclesProvider>
    <CustomersProvider>
      <OrdersProvider>
        <MessagesProvider>
    <Router>
      <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<HomeScreen />}/>
          <Route exact path="/contact" element={<ContactScreen />}/>
          <Route exact path="/vehicles" element={<VehiclesScreen />}/>
          <Route element={<AuthenticatedRoute />}>
              <Route exact path="/dashboard" element={<DashboardScreen />}>
                   <Route path="customers" element={<DashboardCustomers />}/>
                   <Route path="add-customer" element={<DashboardCustomerForm />}/>
                   <Route path="vehicles" element={<DashboardVehicles />}/>
                   <Route path="add-vehicle" element={<DashboardVehicleForm />}/>
                   <Route path="orders" element={<DashboardOrders />}/>
                   <Route path="messages" element={<DashboardMessages />}/>
              </Route>
              <Route exact path="/profile" element={<ProfileScreen />}/>
          </Route>
          <Route exact path="/about" element={<AboutScreen />}/>
          <Route element={<NonAuthenticatedRoute />}>
              <Route exact path="/login" element={<LoginScreen />}/>
              <Route exact path="/register" element={<RegisterScreen />}/>
          </Route>
          <Route exact path="/*" element={<NotFoundScreen />}/>
      </Routes>
      <Footer />
    </div>  
    </Router>
    </MessagesProvider> 
    </OrdersProvider>
    </CustomersProvider>
    </VehiclesProvider> 
  );
}

export default App;
