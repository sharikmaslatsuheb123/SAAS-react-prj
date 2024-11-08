import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import Signin from './Components/Pages/Signin';
import SignUp from './Components/Pages/SignUp';
import Contactus from './Components/Pages/Contactus';
import ServicePage from './Components/Pages/ServicePage';
import Dashboard from './Components/Pages/Dashboard';
import Sidebar from './Components/Sidebar/Sidebar';
import { UserProvider } from './Components/UserContext/UserProvider';
import { DataProvider } from './Components/UserContext/DataContext';
import Clients from './Components/Pages/Clients';

function App() {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  // Only show Sidebar on Home and Dashboard routes
  const showSidebar = ['/','/dashboard'].includes(useLocation().pathname);
  

  return (
    <UserProvider>
      <DataProvider>
        <Navbar />
        {showSidebar && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
        <div className={isSidebarOpen ? 'main-content open' : 'main-content'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Clients />} />
          </Routes>
        </div>
      </DataProvider>
    </UserProvider>
  );
}

export default App;
