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
import PrivacySafety from './Components/Pages/Privacy';
import Footer from './Components/Pages/Footer';
import './App.css';
import Community from './Components/Pages/Community';
import Clubs from './Components/Pages/Club';
import Events from './Components/Pages/Events';
import LearnerStories from './Components/Pages/LearnerStories';
import Pricing from './Components/Pages/Pricing';
import CodeCrew from './Components/Pages/Codecrew';
import Cpage from './Components/Pages/Cpage';
import CppPage from './Components/Pages/CppPage';
import PythonPage from './Components/Pages/PythonPage';
import JavascriptPage from './Components/Pages/JavascriptPage';
import PhpPage from './Components/Pages/PhpPage';
import SqlPage from './Components/Pages/SqlPage';
import JavaPage from './Components/Pages/JavaPage';
import ReactPage from './Components/Pages/ReactPage';
import HtmlPage from './Components/Pages/HtmlPage';

function App() {
  const location = useLocation();

  return (
    <UserProvider>
      <DataProvider>
        <div className="app">
          <Navbar />
          
          {location.pathname !== '/signin' && <SampleSidebar />}

          <div className="main-content" style={{ marginTop: '70px', marginLeft: '200px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/service" element={<ServicePage />} />
              <Route path="/customers" element={<Clients />} />
              <Route path="/community" element={<Community />} />
              <Route path="/privacy and safety" element={<PrivacySafety />} />
              <Route path="/clubs" element={<Clubs />} />
              <Route path="/events" element={<Events />} />
              <Route path="/learner-stories" element={<LearnerStories />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/code-crew" element={<CodeCrew />} />
              <Route path="/docs/c" element={<Cpage />} /> {/* C Programming Page */}
              <Route path="/docs/cpp" element={<CppPage />} />
              <Route path="/docs/python" element={<PythonPage />} />
              <Route path="/docs/javascript" element={<JavascriptPage />} />
              <Route path="/docs/php" element={<PhpPage />} />
              <Route path="/docs/sql" element={<SqlPage />} />
              <Route path="/docs/java" element={<JavaPage />} />
              <Route path="/docs/react" element={<ReactPage />} />
              <Route path="/docs/html" element={<HtmlPage />} />
            </Routes>
          </div>
          
          {/* Footer outside of main-content for sticky effect */}
          <Footer />
        </div>
      </DataProvider>
    </UserProvider>
  );
}

export default App;
