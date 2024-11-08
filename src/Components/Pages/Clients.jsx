import React from 'react';
import './Clients.css';

const clients = [
  {
    id: 1,
    name: 'John Doe',
    company: 'Tech Solutions Inc.',
    email: 'john.doe@techsolutions.com',
    phone: '+123 456 7890',
    logo: 'logo', 
  },
  {
    id: 2,
    name: 'Jane Smith',
    company: 'Innovate Labs',
    email: 'jane.smith@innolabs.com',
    phone: '+987 654 3210',
    logo: 'logo',
  },
  {
    id: 3,
    name: 'Alan Brown',
    company: 'FutureWorks',
    email: 'alan.brown@futureworks.com',
    phone: '+456 789 1230',
    logo: 'logo',
  },
  {
    id: 4,
    name: 'Emily Clark',
    company: 'Creative Minds Ltd.',
    email: 'emily.clark@creativeminds.com',
    phone: '+789 123 4567',
    logo: 'logo',
  },
];

const Clients = () => {
  return (
    <div className="client-page">
      <h2>Clients</h2>
      <div className="client-search">
        <input type="text" placeholder="Search clients..." />
        <button>Search</button>
      </div>
      <table className="client-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Client Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>
                <img src={client.logo} alt={`${client.company} logo`} className="company-logo" />
              </td>
              <td>{client.name}</td>
              <td>{client.company}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                <button className="btn-view">View</button>
                <button className="btn-edit">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
