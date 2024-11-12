import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Signin from './Components/Pages/Signin';
import SignUp from './Components/Pages/SignUp';
import Contactus from './Components/Pages/Contactus';
import ServicePage from './Components/Pages/ServicePage';
import Dashboard from './Components/Pages/Dashboard';
import SampleSidebar from './Components/Sidebar/SampleSidebar';
import { UserProvider } from './Components/UserContext/UserProvider';
import { DataProvider } from './Components/UserContext/DataContext';
import Clients from './Components/Pages/Clients';
import './App.css';
import Orders from './Components/Pages/Orders';
// import Overview from './Components/Pages/Overview';
import PrivacySafety from './Components/Pages/Privacy';

function App() {
  const location = useLocation();
  return (
    <UserProvider>
      <DataProvider>
        <Navbar />
        
        {/* Load SampleSidebar on all routes for testing */}
        {/* <SampleSidebar /> */}
        {location.pathname !== '/signin' && <SampleSidebar />}

        <div className="main-content" style={{ marginTop: '70px', marginLeft: '200px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* dont want sidebar for signin route */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Clients />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/privacy and safety" element={<PrivacySafety />} />
          </Routes>
        </div>
      </DataProvider>
    </UserProvider>
  );
}

export default App;
