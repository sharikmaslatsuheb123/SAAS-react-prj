import React from 'react';

const ServicePage = () => {
  return (
    <div className="container mt-4">
      <div className="card mb-4">
        <div className="card-header bg-primary text-white">
          <h5 className="mb-0">Services</h5>
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Web Development</span>
              <span className='badge bg-primary rounded-pill'>New</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Mobile App Development</span>
              <span className='badge bg-secondary rounded-pill'>Popular</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <span>Digital Marketing</span>
              <span className='badge bg-success rounded-pill'>Trending</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="card mb-4">
        <div className="card-header bg-secondary text-white">
          <h5 className="mb-0">Testimonials</h5>
        </div>
        <div className='card-body'>
          <blockquote className="blockquote mb-0">
            <p>"The team provided exceptional service and brought our vision to life!"</p>
            <footer className="blockquote-footer">John <cite title="Source Title">XYZ Pvt Ltd</cite></footer>
          </blockquote>
          <blockquote className="blockquote mt-3">
            <p>"Professional and efficient, highly recommend their services."</p>
            <footer className="blockquote-footer">Jane Smith, <cite title="Company Name">XYZ Ltd</cite></footer>
          </blockquote>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="card mb-4">
        <div className="card-header bg-dark text-white">
          <h5 className="mb-0">FAQs</h5>
        </div>
        <div className='card-body'>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  What services do you offer?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show">
                <div className="accordion-body">
                  We offer web development, mobile app development, and digital marketing.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  How can I contact you?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Contact us via our contact page, email, or phone number provided on our website.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  Do you offer customized solutions?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Yes, we provide customized solutions tailored to your needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;
