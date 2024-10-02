import React from 'react';
import './appointment.css';

function Appointment() {
  return (
    <div className='b-g' style={{ marginTop: "70px", border: '2px solid grey' }}>
      <div className="appointment-container">
        <div className="appointment-content">
          <div className="appointment-header">
            <h1 className="appointment-title">
              Schedule an appointment with our <br />
              <span className="highlighted-text"> Mobile App Development</span> Expert
            </h1>
          </div>

          <div>
            <button className="start-button">Start Your Project</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;