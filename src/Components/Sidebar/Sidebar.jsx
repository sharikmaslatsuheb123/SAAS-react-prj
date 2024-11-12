
// import React from 'react';
// import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
// import './Sidebar.css';

// const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
//   return (
//     <div className={`sidebar-container ${isSidebarOpen ? 'open' : ''}`}>
//       <button className="sidebar-arrow" onClick={toggleSidebar}>
//         {isSidebarOpen ? '<' : '>'}
//       </button>
//       <div className={`custom-offcanvas ${isSidebarOpen ? 'open' : ''}`}>
//         <div className="offcanvas-body">
//           <NavLink exact to="/" activeclassname="active-link">
//             <i className="bi bi-speedometer2"></i> Overview
//           </NavLink>
//           <div>
//             <NavLink to="/dashboard" activeclassname="active-link">
//               <i className="bi bi-person"></i> Dashboard
//             </NavLink>
//           </div>
//           <div>
//             <NavLink to="/orders" activeclassname="active-link">
//               <i className="bi bi-gear"></i> Orders
//             </NavLink>
//           </div>
//           <div>
//             <NavLink to="/service" activeclassname="active-link">
//               <i className="bi bi-envelope"></i> Services
//             </NavLink>
//           </div>
//           <div>
//             <NavLink to="/customers" activeclassname="active-link">
//               <i className="bi bi-people-fill"></i> Clients
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
