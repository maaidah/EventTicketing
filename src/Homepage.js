import React, { useState } from 'react';
import './Homepage.css';

function Homepage() {
  const [formData, setFormData] = useState({
    email: '',
    contactNumber: '',
    ticketType: '',
    submitted: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setFormData({ ...formData, submitted: true });
  };

  return (
    <div>
      {!formData.submitted ? (
        <div>
          <h1>Event Ticketing Corner</h1>
          <form onSubmit={handleFormSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </label>
            <br />
            <label>
              Contact Number:
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder="Enter contact number"
                required
              />
            </label>
            <br />
            <label>
              Ticket Type:
              <select
                name="ticketType"
                value={formData.ticketType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select an option</option>
                <option value="concert">Concert</option>
                <option value="sports">Sports</option>
                <option value="theatre">Theatre Performance</option>
              </select>
            </label>
            <br />
            <button type="submit">Purchase Tickets</button>
          </form>
        </div>
      ) : (
        <div>
          <h1>Thank You!</h1>
      <p>Your ticket purchase has been confirmed.</p>
      <h2>Bill Summary</h2>
      <p>Email: {formData.email}</p>
      <p>Contact Number: {formData.contactNumber}</p>
      <p>Ticket Type: {formData.ticketType}</p>
        </div>
      )}
    </div>
  );
}

export default Homepage;
