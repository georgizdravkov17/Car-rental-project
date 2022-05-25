import React from 'react';
import { Routes, Route, BrowserRouter as Router  } from 'react-router-dom';
import { Header, Footer } from './components/components.js';
import { DashboardScreen, HomeScreen, LoginScreen, NotFoundScreen, RegisterScreen, AboutScreen, ContactScreen ,VehiclesScreen, OrdersScreen } from './screens/screens.js';
import { VehiclesProvider } from './contexts/vehiclesContext.js';
import { CustomersProvider } from './contexts/customersContext.js';
import { OrdersProvider } from './contexts/ordersContext.js';
import { MessagesProvider } from './contexts/messagesContext.js';

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
          <Route exact path="/login" element={<LoginScreen />}/>
          <Route exact path="/register" element={<RegisterScreen />}/>
          <Route exact path="/contact" element={<ContactScreen />}/>
          <Route exact path="/vehicles" element={<VehiclesScreen />}/>
          <Route exact path="/dashboard" element={<DashboardScreen />}/>
          <Route exact path="/orders" element={<OrdersScreen />}/>
          <Route exact path="/about" element={<AboutScreen />}/>
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
