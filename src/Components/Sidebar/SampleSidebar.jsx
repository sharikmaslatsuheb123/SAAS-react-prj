import React, { useState } from 'react';
import { FaPuzzlePiece } from 'react-icons/fa'; // Puzzle icon
// import { AiOutlineCloudDownload } from 'react-icons/ai'; // Cloud Download icon
import { GiCube } from 'react-icons/gi'; // Cube icon
// import { FaUsers } from 'react-icons/fa'; // Users icon (for Clients)
import { AiFillEyeInvisible } from 'react-icons/ai';
import { FaNetworkWired } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { ImPriceTag } from "react-icons/im"
import { Link } from 'react-router-dom'; 
import '../Sidebar/SampleSidebar.css';

const SampleSidebar = () => {
  const [clicked, setClicked] = useState(null);

  // Handle click event
  const handleClick = (index) => {
    setClicked(clicked === index ? null : index); 
  };

  return (
    <div className="sidebar">
      {/* Overview Icon with Title */}
      {/* <Link to="/overview" className="sidebar-item" onClick={() => handleClick()}>
        <MdSpeed className="sidebar-icon" />
        <span className="sidebar-title">Overview</span>
      </Link> */}
      <Link to="/privacy and safety" className="sidebar-item" onClick={() => handleClick()}>
      <AiFillEyeInvisible className="sidebar-icon"/>
        <span className="sidebar-title">Privacy</span>
      </Link>

      {/* Dashboard Icon with Title */}
      {/* <Link to="/dashboard" className="sidebar-item" onClick={() => handleClick()}>
        <FaPuzzlePiece className="sidebar-icon" />
        <span className="sidebar-title">Dashboard</span>
      </Link> */}

      {/* Orders Icon with Title */}
      {/* <Link to="/orders" className="sidebar-item" onClick={() => handleClick()}>
        <AiOutlineCloudDownload className="sidebar-icon" />
        <span className="sidebar-title">Orders</span>
      </Link> */}

      {/* Services Icon with Title */}
      <Link to="/service" className="sidebar-item" onClick={() => handleClick()}>
        <GiCube className="sidebar-icon" />
        <span className="sidebar-title">Resources</span>
      </Link>

      <Link to="/community" className="sidebar-item" onClick={() => handleClick()}>
        <FaNetworkWired className="sidebar-icon" />
        <span className="sidebar-title">Community</span>
      </Link>
      <Link to="/pricing" className="sidebar-item" onClick={() => handleClick()}>
        <ImPriceTag className="sidebar-icon" /> 
        <span className="sidebar-title">Pricing</span>
      </Link>

      {/* Clients Icon with Title */}
      <Link to="/customers" className="sidebar-item" onClick={() => handleClick()}>
        <FaUserTie className="sidebar-icon" />
        <span className="sidebar-title">Clients</span>
      </Link>
    </div>
  );
};

export default SampleSidebar;
