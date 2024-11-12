import React from 'react';
import './Clients.css';

const clients = [
  { id: 1, logo: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460149/abof.png' },
  { id: 2, logo: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460224/cropped-cropped-20170720-lucuLogo-squ2-e1500543540803.png' },
  { id: 3, logo: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460269/104840a62d46c05d285762857fecb61a.png' },
  { id: 4, logo: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460358/client-4.png' },
  { id: 5, logo: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460379/client-5.png' },
  { id: 6, logo: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460398/client-6.png' },
  { id: 7, logo: 'https://res.cloudinary.com/dxfq3iotg/image/upload/v1559460418/client-7.png' },
  // { id: 8, logo: 'https://bootstrapmade.com/demo/themes/NewBiz/img/clients/client-8.png' },
];

const Clients = () => {
  return (
    <section id="clients" className="section-bg">
      <div className="container">
        <div className="section-header">
          <h3>Our Clients</h3>
          <p>Meet our happy clients</p>
        </div>
        <div className="clients-wrap row no-gutters clearfix wow fadeInUp">
          {clients.map(client => (
            <div key={client.id} className="col-lg-3 col-md-4 col-xs-6">
              <div className="client-logo">
                <img src={client.logo} className="img-fluid" alt={`Client ${client.id}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
